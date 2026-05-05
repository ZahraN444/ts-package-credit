
# Custom Header Signature



Documentation for accessing and setting credentials for api_key.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| api_key | `string` | - | `apiKey` |



**Note:** Auth credentials can be set using `apiKeyCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
import { Client } from 'ts-package-credit';

const client = new Client({
  apiKeyCredentials: {
    'api_key': 'api_key'
  },
});
```


