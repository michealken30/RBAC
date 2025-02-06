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

## License

This project is licensed under the MIT License.
```

This README file provides a comprehensive guide on how to set up and run the RBAC project. Make sure to replace the placeholders in the `.env` file with your actual MongoDB connection string and secret key. If there are additional configuration options or setup steps specific to your project, you can include them in the README file as needed
