# Pet

Everything about your Pets

Find out more: [https://swagger.io](https://swagger.io)

```ts
const petApi = new PetApi(client);
```

## Class Name

`PetApi`

## Methods

* [Update Pet](../../doc/controllers/pet.md#update-pet)
* [Add Pet](../../doc/controllers/pet.md#add-pet)
* [Find Pets by Status](../../doc/controllers/pet.md#find-pets-by-status)
* [Find Pets by Tags](../../doc/controllers/pet.md#find-pets-by-tags)
* [Get Pet by Id](../../doc/controllers/pet.md#get-pet-by-id)
* [Update Pet with Form](../../doc/controllers/pet.md#update-pet-with-form)
* [Delete Pet](../../doc/controllers/pet.md#delete-pet)
* [Upload File](../../doc/controllers/pet.md#upload-file)


# Update Pet

Update an existing pet by Id.

```ts
async updatePet(
  name: string,
  photoUrls: string[],
  id?: bigint,
  category?: Category,
  tags?: Tag[],
  status?: PetStatus,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Pet>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Form, Required | - |
| `photoUrls` | `string[]` | Form, Required | - |
| `id` | `bigint \| undefined` | Form, Optional | - |
| `category` | [`Category \| undefined`](../../doc/models/category.md) | Form, Optional | - |
| `tags` | [`Tag[] \| undefined`](../../doc/models/tag.md) | Form, Optional | - |
| `status` | [`PetStatus \| undefined`](../../doc/models/pet-status.md) | Form, Optional | pet status in the store |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### petstore_auth

`read:pets`, `write:pets`

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Pet`](../../doc/models/pet.md).

## Example Usage

```ts
const name = 'doggie';

const photoUrls: string[] = [
  'photoUrls5',
  'photoUrls6',
  'photoUrls7'
];

const id = BigInt(10);

const tags: Tag[] = [
  {
  }
];

try {
  const response = await petApi.updatePet(
    name,
    photoUrls,
    id,
    undefined,
    tags
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid ID supplied | `ApiError` |
| 404 | Pet not found | `ApiError` |
| 422 | Validation exception | `ApiError` |
| Default | Unexpected error | `ApiError` |


# Add Pet

Add a new pet to the store.

```ts
async addPet(
  name: string,
  photoUrls: string[],
  id?: bigint,
  category?: Category,
  tags?: Tag[],
  status?: PetStatus,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Pet>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Form, Required | - |
| `photoUrls` | `string[]` | Form, Required | - |
| `id` | `bigint \| undefined` | Form, Optional | - |
| `category` | [`Category \| undefined`](../../doc/models/category.md) | Form, Optional | - |
| `tags` | [`Tag[] \| undefined`](../../doc/models/tag.md) | Form, Optional | - |
| `status` | [`PetStatus \| undefined`](../../doc/models/pet-status.md) | Form, Optional | pet status in the store |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### petstore_auth

`read:pets`, `write:pets`

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Pet`](../../doc/models/pet.md).

## Example Usage

```ts
const name = 'doggie';

const photoUrls: string[] = [
  'photoUrls5',
  'photoUrls6',
  'photoUrls7'
];

const id = BigInt(10);

const tags: Tag[] = [
  {
  }
];

try {
  const response = await petApi.addPet(
    name,
    photoUrls,
    id,
    undefined,
    tags
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid input | `ApiError` |
| 422 | Validation exception | `ApiError` |
| Default | Unexpected error | `ApiError` |


# Find Pets by Status

Multiple status values can be provided with comma separated strings.

```ts
async findPetsByStatus(
  status?: PetStatus,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Pet[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`PetStatus \| undefined`](../../doc/models/pet-status.md) | Query, Optional | Status values that need to be considered for filter |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### petstore_auth

`read:pets`, `write:pets`

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Pet[]`](../../doc/models/pet.md).

## Example Usage

```ts
try {
  const response = await petApi.findPetsByStatus();

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid status value | `ApiError` |
| Default | Unexpected error | `ApiError` |


# Find Pets by Tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

```ts
async findPetsByTags(
  tags?: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<Pet[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tags` | `string[] \| undefined` | Query, Optional | Tags to filter by |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### petstore_auth

`read:pets`, `write:pets`

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Pet[]`](../../doc/models/pet.md).

## Example Usage

```ts
try {
  const response = await petApi.findPetsByTags();

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid tag value | `ApiError` |
| Default | Unexpected error | `ApiError` |


# Get Pet by Id

Returns a single pet.

```ts
async getPetById(
  petId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Pet>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `petId` | `bigint` | Template, Required | ID of pet to return |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### petstore_auth

`read:pets`, `write:pets`

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Pet`](../../doc/models/pet.md).

## Example Usage

```ts
const petId = BigInt(10);

try {
  const response = await petApi.getPetById(petId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid ID supplied | `ApiError` |
| 404 | Pet not found | `ApiError` |
| Default | Unexpected error | `ApiError` |


# Update Pet with Form

Updates a pet resource based on the form data.

```ts
async updatePetWithForm(
  petId: bigint,
  name?: string,
  status?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Pet>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `petId` | `bigint` | Template, Required | ID of pet that needs to be updated |
| `name` | `string \| undefined` | Query, Optional | Name of pet that needs to be updated |
| `status` | `string \| undefined` | Query, Optional | Status of pet that needs to be updated |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### petstore_auth

`read:pets`, `write:pets`

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Pet`](../../doc/models/pet.md).

## Example Usage

```ts
const petId = BigInt(10);

try {
  const response = await petApi.updatePetWithForm(petId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid input | `ApiError` |
| Default | Unexpected error | `ApiError` |


# Delete Pet

Delete a pet.

```ts
async deletePet(
  petId: bigint,
  apiKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `petId` | `bigint` | Template, Required | Pet id to delete |
| `apiKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### petstore_auth

`read:pets`, `write:pets`

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const petId = BigInt(10);

try {
  const response = await petApi.deletePet(petId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid pet value | `ApiError` |
| Default | Unexpected error | `ApiError` |


# Upload File

Upload image of the pet.

```ts
async uploadFile(
  petId: bigint,
  additionalMetadata?: string,
  body?: FileWrapper,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MApiResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `petId` | `bigint` | Template, Required | ID of pet to update |
| `additionalMetadata` | `string \| undefined` | Query, Optional | Additional Metadata |
| `body` | `FileWrapper \| undefined` | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### petstore_auth

`read:pets`, `write:pets`

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`MApiResponse`](../../doc/models/m-api-response.md).

## Example Usage

```ts
const petId = BigInt(10);

try {
  const response = await petApi.uploadFile(petId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | No file uploaded | `ApiError` |
| 404 | Pet not found | `ApiError` |
| Default | Unexpected error | `ApiError` |

