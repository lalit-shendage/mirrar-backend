# mirrar-backend

This is a simple RESTful API built with Express.js and MongoDB that allows performing CRUD operations on a collection of items.

## Tech Stack

**Server:** Node, Express, mongoose

**API-Test:** POSTMAN

**External libraries:** dotenv

## Getting Started

### Installation

1. Clone this repository to your local machine.

```bash
  https://github.com/lalit-shendage/mirrar-backend
```
2. Install the dependencies.

```bash
 npm install
```

```
### Running the API

1. Start the application.

```bash
npm start
```

2. The API will be available at http://localhost:3000.

## API Reference

### 1.Create a Product

**Endpoint:** `POST /products`

Create a new product.

**Request {body}:**
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 29.99, //product price  in number 
  "variants": [
    {
      "name": "Variant 1",
      "sku": "ABC123",
      "additionalCost": 5.99, //varient price  in number 
      "stockCount": 100 //varient count  in number 
    }
  ]
}

```
### 2. Get all Products

**Endpoint:** `GET /products`

Retrieve a list of all products.

### 3. Get  Products by ID

**Endpoint:** `GET /products/{product id}`

Retrieve a Product by its id.

### 4. Update a Product

**Endpoint:** `PUT /products/{productId}`

Update details of a specific product.

**Request:**
```json
{
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 39.99,
  "variants": [
    {
      "name": "Updated Variant",
      "sku": "XYZ789",
      "additionalCost": 8.99,
      "stockCount": 150
    }
  ]
}

```
### 5. Delete  Products by ID

**Endpoint:** `DELETE /products/{product id}`

Retrieve a Product by its id and delete it.


### 6. Search  Products by ID

**Endpoint:** `GET /products/search?query={searchQuery}`

Search for products by name, description, or variant name.



## Additional Features
#### Manual test using postman

1. Start the application
2. Open Postman and import the provided collection file
3. The collection includes pre-configured requests for each API endpoint. You can send requests to the corresponding endpoints and examine the responses.

**Note**: Make sure to update the request URLs and data as needed based on your local environment and specific API configurations.

## Authors

- [Lalit Shendage](https://github.com/lalit-shendage)




