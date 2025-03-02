# API Documentation

## User Routes

### Register User
- **Endpoint:** `users/register`
- **Method:** POST
- **Description:** Registers a new user.
- **Request Body:**
    - `email` (string, required): User's email.
    - `fullname.firstName` (string, required): User's first name.
    - `password` (string, required): User's password.
- **Response:**
    - `status` (string): Status of the request.
    - `message` (string): Success or error message.
    - `data` (object): Registered user details.

### Login User
- **Endpoint:** `users/login`
- **Method:** POST
- **Description:** Logs in an existing user.
- **Request Body:**
    - `email` (string, required): User's email.
    - `password` (string, required): User's password.
- **Response:**
    - `status` (string): Status of the request.
    - `message` (string): Success or error message.
    - `token` (string): Authentication token.

### Get User Profile
- **Endpoint:** `users/profile`
- **Method:** GET
- **Description:** Retrieves the profile of the logged-in user.
- **Headers:**
    - `Authorization` (string, required): Bearer token.
- **Response:**
    - `status` (string): Status of the request.
    - `data` (object): User profile details.

### Logout User
- **Endpoint:** `users/logout`
- **Method:** GET
- **Description:** Logs out the current user.
- **Headers:**
    - `Authorization` (string, required): Bearer token.
- **Response:**
    - `status` (string): Status of the request.
    - `message` (string): Success or error message.

## Captain Routes

### Register Captain
- **Endpoint:** `captains/register`
- **Method:** POST
- **Description:** Registers a new captain.
- **Request Body:**
    - `email` (string, required): Captain's email.
    - `fullname.firstName` (string, required): Captain's first name.
    - `password` (string, required): Captain's password.
    - `vehicle.color` (string, required): Vehicle color.
    - `vehicle.plate` (string, required): Vehicle plate number.
    - `vehicle.capacity` (number, required): Vehicle capacity.
    - `vehicle.vehicleType` (string, required): Vehicle type (car, motorcycle, auto).
- **Response:**
    - `status` (string): Status of the request.
    - `message` (string): Success or error message.
    - `data` (object): Registered captain details.

### Login Captain
- **Endpoint:** `captains/login`
- **Method:** POST
- **Description:** Logs in an existing captain.
- **Request Body:**
    - `email` (string, required): Captain's email.
    - `password` (string, required): Captain's password.
- **Response:**
    - `status` (string): Status of the request.
    - `message` (string): Success or error message.
    - `token` (string): Authentication token.

### Get Captain Profile
- **Endpoint:** `captains/profile`
- **Method:** GET
- **Description:** Retrieves the profile of the logged-in captain.
- **Headers:**
    - `Authorization` (string, required): Bearer token.
- **Response:**
    - `status` (string): Status of the request.
    - `data` (object): Captain profile details.

### Logout Captain
- **Endpoint:** `captains/logout`
- **Method:** GET
- **Description:** Logs out the current captain.
- **Headers:**
    - `Authorization` (string, required): Bearer token.
- **Response:**
    - `status` (string): Status of the request.
    - `message` (string): Success or error message.

## Map Routes

### Get Coordinates
- **Endpoint:** `maps/get-coordinates`
- **Method:** GET
- **Description:** Retrieves the coordinates for a given address.
- **Query Parameters:**
    - `address` (string, required): The address to get coordinates for.
- **Headers:**
    - `Authorization` (string, required): Bearer token.
- **Response:**
    - `status` (string): Status of the request.
    - `data` (object): Coordinates of the address.

### Get Distance and Time
- **Endpoint:** `maps/get-distance-time`
- **Method:** GET
- **Description:** Retrieves the distance and time between two locations.
- **Query Parameters:**
    - `origin` (string, required): The starting location.
    - `destination` (string, required): The ending location.
- **Headers:**
    - `Authorization` (string, required): Bearer token.
- **Response:**
    - `status` (string): Status of the request.
    - `data` (object): Distance and time between the locations.

### Get AutoComplete Suggestions
- **Endpoint:** `maps/get-suggestions`
- **Method:** GET
- **Description:** Retrieves autocomplete suggestions for a given input.
- **Query Parameters:**
    - `input` (string, required): The input to get suggestions for.
- **Headers:**
    - `Authorization` (string, required): Bearer token.
- **Response:**
    - `status` (string): Status of the request.
    - `data` (object): Autocomplete suggestions.

## Ride Routes

### Create Ride
- **Endpoint:** `rides/create`
- **Method:** POST
- **Description:** Creates a new ride.
- **Request Body:**
    - `pickup` (string, required): Pickup location.
    - `destination` (string, required): Destination location.
    - `vehicleType` (string, required): Type of vehicle (car, bike, auto).
- **Headers:**
    - `Authorization` (string, required): Bearer token.
- **Response:**
    - `status` (string): Status of the request.
    - `message` (string): Success or error message.
    - `data` (object): Ride details.

### Get Fare
- **Endpoint:** `rides/getfare`
- **Method:** GET
- **Description:** Retrieves the fare for a ride.
- **Query Parameters:**
    - `pickup` (string, required): Pickup location.
    - `destination` (string, required): Destination location.
- **Headers:**
    - `Authorization` (string, required): Bearer token.
- **Response:**
    - `status` (string): Status of the request.
    - `data` (object): Fare details.