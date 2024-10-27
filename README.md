# Donut API 

This project is a simple RESTful API for managing donuts using Next.js. It allows users to perform CRUD (Create, Read, Update, Delete) operations on donut data stored in a JSON file


# Table of Contents
- [Donut API](#donut-api)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
    - [Clone the Repository](#clone-the-repository)
    - [Install Dependencies](#install-dependencies)
    - [Run the Application](#run-the-application)
- [API Endpoints](#api-endpoints)
- [Using Postman](#using-postman)
- [RESTful API Overview](#restful-api-overview)
- [Contributing](#contributing)
- [License](#license)

# Features
- **GET**: Retrieve donut information by ID
- **POST**: Add new donuts to the database
- **PUT**: Update existing donut details
- **DELETE**: Remove a donut from the database
# Technologies Used
- Next.js
- Node.js
- Postman
- JSON

# Getting Started

### Clone the Repository

```bash
git clone https://github.com/seal-000/donut-api.git
cd donut-api
```

### Install Dependencies
```bash
npm install
```

### Run the Application
```bash
npm run dev
```
The API will be available at http://localhost:3000


# API Endpoints
| Method | Endpoint            | Description                        |
|--------|---------------------|------------------------------------|
| GET    | /api/donuts/:donutId     | Retrieve donut by ID               |
| POST   | /api/donuts         | Add a new donut                    |
| PUT    | /api/donuts/:donutId     | Update an existing donut by ID     |
| DELETE | /api/donuts/:donutId     | Delete a donut by ID               |

# Using Postman
1. Open Postman and create a new request
2. Choose the appropriate HTTP method (GET, POST, PUT, DELETE)
3. Enter the URL for your local server (e.g., http://localhost:3000/api/donuts)
4. For POST and PUT requests, set the body type to JSON and provide the necessary data
5. Click Send to make the request and view the response
# RESTful API Overview
A RESTful API (Representational State Transfer) is an architectural style for designing networked applications. It relies on stateless communication and standard HTTP methods to perform CRUD operations:

- **GET**: Retrieve data from the server
- **POST**: Send data to the server to create a new resource
- **PUT**: Update an existing resource on the server
- **DELETE**: Remove a resource from the server


# Contributing
Feel free to contribute to this project by submitting issues or pull requests. Your contributions are welcome!


# License
Distributed under the MIT License. See `LICENSE` for more information

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)