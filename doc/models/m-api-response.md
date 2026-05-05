
# M Api Response

*This model accepts additional fields of type unknown.*

## Structure

`MApiResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `number \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `message` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "code": 142,
  "type": "type0",
  "message": "message0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

