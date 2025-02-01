# API Documentation

## Endpoints

### Register User

- **URL**: `/users/register`
- **Method**: `POST`{
    "token": "jwt_token",
    "user": {
        "_id": "user_id",
        "fullname": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
- **Description**: This endpoint registers a new user by validating the input data, hashing the password, and creating a new user record in the database. It also generates a JWT token for the user.

#### Request Body

The request body should be a JSON object with the following structure:

```json
{
    "fullname": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "yourpassword"
}
{
    "token": "jwt_token",
    "user": {
        "_id": "user_id",
        "fullname": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
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