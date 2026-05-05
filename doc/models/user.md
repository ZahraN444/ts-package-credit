
# User

*This model accepts additional fields of type unknown.*

## Structure

`User`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | - |
| `username` | `string \| undefined` | Optional | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `password` | `string \| undefined` | Optional | - |
| `phone` | `string \| undefined` | Optional | - |
| `userStatus` | `number \| undefined` | Optional | User Status |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "id": 82,
  "username": "username6",
  "firstName": "firstName8",
  "lastName": "lastName0",
  "email": "email0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

