
# Pet

*This model accepts additional fields of type unknown.*

## Structure

`Pet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | - |
| `name` | `string` | Required | - |
| `category` | [`Category \| undefined`](../../doc/models/category.md) | Optional | - |
| `photoUrls` | `string[]` | Required | - |
| `tags` | [`Tag[] \| undefined`](../../doc/models/tag.md) | Optional | - |
| `status` | [`PetStatus \| undefined`](../../doc/models/pet-status.md) | Optional | pet status in the store |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "id": 120,
  "name": "name0",
  "category": {
    "id": 232,
    "name": "name2",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "photoUrls": [
    "photoUrls5",
    "photoUrls6"
  ],
  "tags": [
    {
      "id": 26,
      "name": "name0",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  ],
  "status": "available",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

