/**
 * Manages automatic token rotation using username/password credentials.
 * Fetches a new token from POST /oauth/token when the current one expires.
 */
export class TokenRotationManager {
  private readonly tokenEndpoint: string;
  private readonly username: string;
  private readonly password: string;
  private readonly clockSkewSeconds: number;
  private accessToken: string | null = null;
  private expiresAt: number = 0;

  constructor(
    baseUrl: string,
    username: string,
    password: string,
    clockSkewSeconds: number = 60
  ) {
    if (!username || !password) {
      throw new Error('Username and password are required.');
    }
    this.tokenEndpoint = baseUrl.replace(/\/$/, '') + '/oauth/token';
    this.username = username;
    this.password = password;
    this.clockSkewSeconds = clockSkewSeconds;
  }

  /** Returns a valid access token, fetching a new one if expired. */
  public async getAccessToken(): Promise<string> {
    if (this.isExpired()) {
      await this.rotate();
    }
    return this.accessToken!;
  }

  /** Forces an immediate token rotation regardless of expiry. */
  public async forceRotate(): Promise<void> {
    await this.rotate();
  }

  private isExpired(): boolean {
    return (
      this.accessToken === null ||
      Date.now() / 1000 >= this.expiresAt - this.clockSkewSeconds
    );
  }

  private async rotate(): Promise<void> {
    const body = new URLSearchParams({
      grant_type: 'password',
      username: this.username,
      password: this.password,
    });

    const response = await fetch(this.tokenEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(
        `Token endpoint returned HTTP ${response.status}: ${text}`
      );
    }

    const data = await response.json() as {
      access_token?: string;
      expires_in?: number;
    };

    if (!data.access_token) {
      throw new Error('Token response missing access_token.');
    }

    this.accessToken = data.access_token;
    this.expiresAt = Date.now() / 1000 + (data.expires_in ?? 3600);
  }
}
