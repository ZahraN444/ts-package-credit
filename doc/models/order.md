
# Order

*This model accepts additional fields of type unknown.*

## Structure

`Order`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | - |
| `petId` | `bigint \| undefined` | Optional | - |
| `quantity` | `number \| undefined` | Optional | - |
| `shipDate` | `string \| undefined` | Optional | - |
| `status` | [`OrderStatus \| undefined`](../../doc/models/order-status.md) | Optional | Order Status |
| `complete` | `boolean \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "id": 180,
  "petId": 220,
  "quantity": 136,
  "shipDate": "2016-03-13T12:52:32.123Z",
  "status": "placed",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

