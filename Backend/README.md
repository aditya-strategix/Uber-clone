# User Registration Endpoint Documentation

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user. It validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, it returns an authentication token and the user details.

## Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing the user's first and last name.
    - `firstName` (string, required): The user's first name. Must be at least 3 characters long.
    - `lastName` (string, optional): The user's last name. Must be at least 3 characters long if provided.
- `email` (string, required): The user's email address. Must be a valid email format.
- `password` (string, required): The user's password. Must be at least 6 characters long.

### Example
```json
{
    "fullname": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Response Body**:
    ```json
    {
        "token": "jwt-auth-token",
        "user": {
            "_id": "user-id",
            "fullname": {
                "firstName": "John",
                "lastName": "Doe"
            },
            "email": "john.doe@example.com"
        }
    }
    ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**:
    ```json
    {
        "errors": [
            {
                "msg": "Invalid Email",
                "param": "email",
                "location": "body"
            },
            {
                "msg": "First name should be atleast 3 characters",
                "param": "fullname.firstName",
                "location": "body"
            },
            {
                "msg": "Password must be atleast 6 characters long",
                "param": "password",
                "location": "body"
            }
        ]
    }
    ```

### Server Errors
- **Status Code**: `500 Internal Server Error`
- **Response Body**:
    ```json
    {
        "error": "Internal Server Error"
    }
    ```

## Notes
- Ensure that the `email` provided is unique and not already registered in the system.
- The `password` is securely hashed before being stored in the database.
- The endpoint returns a JWT token that can be used for authenticated requests.
