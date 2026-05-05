
# OAuth 2 Implicit Grant



Documentation for accessing and setting credentials for petstore_auth.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| oauthClientId | `string` | OAuth 2 Client ID | `oauthClientId` |
| oauthRedirectUri | `string` | OAuth 2 Redirection endpoint or Callback Uri | `oauthRedirectUri` |
| oauthToken | `OauthToken` | Object for storing information about the OAuth token | `oauthToken` |
| oauthScopes | `OauthScopePetstoreAuth[]` | List of scopes that apply to the OAuth token | `oauthScopes` |
| oauthClockSkew | `number` | Clock skew time in seconds applied while checking the OAuth Token expiry. | `clockSkew` |
| oauthTokenProvider | `(lastOAuthToken: OauthToken \| undefined, authManager: PetstoreAuthManager) => Promise<OauthToken>` | Registers a callback for oAuth Token Provider used for automatic token fetching/refreshing. | `oauthTokenProvider` |
| oauthOnTokenUpdate | `(token: OauthToken) => void` | Registers a callback for token update event. | `oauthOnTokenUpdate` |



**Note:** Auth credentials can be set using `petstoreAuthCredentials` object in the client.

## Usage Example



Your application must obtain user authorization before it can execute an endpoint call in case this SDK chooses to use *OAuth 2.0 Implicit Grant* to obtain a user's consent to perform an API request on user's behalf. This authorization includes the following steps

This process requires the presence of a client-side JavaScript code on the redirect URI page to receive the *access token* after the consent step is completed.

### 1\. Obtain user consent

To obtain user's consent, you must redirect the user to the authorization page. The `buildAuthorizationUrl()` method creates the URL to the authorization page. You must have initialized the client with scopes for which you need permission to access.

```ts
const authUrl = client.petstoreAuthManager?.buildAuthorizationUrl();
```

### 2\. Handle the OAuth server response

Once the user responds to the consent request, the OAuth 2.0 server responds to your application's access request by redirecting the user to the redirect URI specified set in `Configuration`.

The redirect URI will receive the *access token* as the `token` argument in the URL fragment.

```
https://example.com/oauth/callback#token=XXXXXXXXXXXXXXXXXXXXXXXXX
```

The access token must be extracted by the client-side JavaScript code. The access token can be used to authorize any further endpoint calls by the JavaScript code.

### Scopes

Scopes enable your application to only request access to the resources it needs while enabling users to control the amount of access they grant to your application. Available scopes are defined in the [`OauthScopePetstoreAuth`](../../doc/models/oauth-scope-petstore-auth.md) enumeration.

| Scope Name | Description |
|  --- | --- |
| `Writepets` | modify pets in your account |
| `Readpets` | read your pets |


