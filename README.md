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

### Create a Product

**Endpoint:** `POST /products`

Create a new product.

**Request:**
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 29.99,
  "variants": [
    {
      "name": "Variant 1",
      "sku": "ABC123",
      "additionalCost": 5.99,
      "stockCount": 100
    }
  ]
}