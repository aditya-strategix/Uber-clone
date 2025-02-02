# User Registration Endpoint Documentation

## User Login Endpoint Documentation

### Endpoint
`POST /users/login`

### Description
This endpoint is used to authenticate a user. It validates the input credentials and returns an authentication token and user information upon successful login.

### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The user's email address. Must be a valid email format.
- `password` (string, required): The user's password.

### Example
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

### Success Response
- **Code**: 200 OK
- **Content**:
  ```json
  {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
          "id": "12345",
          "name": "John Doe",
          "email": "johndoe@example.com"
      }
  }
##

  ### GET /users/profile
- **Description**: Retrieves the profile of the authenticated user.
- **Headers**:
    - `Authorization` (string, required): Bearer token for authentication.
- **Responses**:
    - `200 OK`: Returns the user's profile data.


### GET /users/logout
- **Description**: Logs out the authenticated user by clearing the authentication token.
- **Headers**:
    - `Authorization` (string, required): Bearer token for authentication.
- **Responses**:
    - `200 OK`: Returns a message indicating successful logout.

    /**
     * @fileoverview Captain routes for handling registration and other captain-related operations.
     */

    const express = require("express");
    const router = express.Router();
    const { body } = require("express-validator");
    const captainController = require("../controllers/captain.controller");

    /**
     * @route POST /register
     * @description Register a new captain
     * @access Public
     * @param {string} email - The email of the captain, must be a valid email format.
     * @param {object} fullname - The full name of the captain.
     * @param {string} fullname.firstName - The first name of the captain, must be at least 3 characters long.
     * @param {string} password - The password for the captain's account, must be at least 6 characters long.
     * @param {object} vehicle - The vehicle details of the captain.
     * @param {string} vehicle.color - The color of the vehicle, must be at least 3 characters long.
     * @param {string} vehicle.plate - The plate number of the vehicle, must be at least 3 characters long.
     * @param {number} vehicle.capacity - The capacity of the vehicle, must be at least 1.
     * @param {string} vehicle.vehicleType - The type of the vehicle, must be one of ['car', 'motorcycle', 'auto'].
     * @returns {object} 201 - Created captain with authentication token.
     * @returns {object} 400 - Validation errors or if captain already exists.
     */
    router.post('/register', [
        body('email').isEmail().withMessage('Invalid Email'),
        body('fullname.firstName').isLength({ min: 3 }).withMessage('First name should be at least 3 characters'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
        body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
        body('vehicle.capacity').isInt({ min: 1 }).withMessage("Capacity must be at least 1"),
        body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage("Invalid vehicleType")
    ], captainController.registerCaptain);

    module.exports = router;