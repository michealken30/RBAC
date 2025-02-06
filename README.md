# RBAC

## Description

This repository contains an implementation of Role-Based Access Control (RBAC) in a Node.js application using MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB Atlas account

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/michealken30/RBAC.git
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign in or create an account.
2. Create a new project and cluster.
3. In the cluster, click on "Connect" and follow the instructions to allow your IP address and create a MongoDB user.
4. Copy the connection string.

### 4. Configure Environment Variables

Create a `.env` file in the root directory of the project and add the following variables:

```
MONGO_URI=<your-mongodb-connection-string>
SECRET_KEY=<your-secret-key>
```

Replace `<your-mongodb-connection-string>` with the connection string you copied from MongoDB Atlas, and replace `<your-secret-key>` with a secret key of your choice for JWT authentication.

### 5. Run the Application

```bash
npm run dev
```

The application should now be running on `http://localhost:3000`.

## API Endpoints

### Authentication

#### Register a new user

- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "username": "exampleuser",
    "password": "examplepassword",
    "email": "user@example.com"
    "role" : "admin"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully"
  }
  ```

#### Login

- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "username": "exampleuser",
    "password": "examplepassword"
  }
  ```
- **Response**:
  ```json
  {
    "token": "your-jwt-token"
  }
  ```

### Role Management

#### Create a role

- **URL**: `/roles/create`
- **Method**: `POST`
- **Headers**:
  - `Authorization`: `Bearer your-jwt-token`
- **Body**:
  ```json
  {
    "name": "admin",
    "permissions": ["read", "write", "delete"]
  }
  ```
- **Response**:
  ```json
  {
    "message": "Role created successfully"
  }
  ```


### Protected Routes

Protected routes are endpoints that can only be accessed by users with specific roles. The middleware checks the user's roles and grants access only if the user has the required role.

#### Example of a Protected Route

- **URL**: `/protected/admin`
- **Method**: `GET`
- **Headers**:
  - `Authorization`: `Bearer your-jwt-token`
- **Response**:
  ```json
  {
    "message": "Welcome Admin"
  }
  ```

## License

This project is licensed under the MIT License.
