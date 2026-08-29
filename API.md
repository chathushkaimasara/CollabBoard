# SyncBoard API Contract

**Base URL:** `http://localhost:5000/api`

## Authentication

### 1. Register User
- **URL:** `/auth/register`
- **Method:** `POST`
- **Auth Required:** No
- **Request Body:**

  ```json
  {
    "username": "johndoe",
    "email": "john@example.com",
    "password": "securepassword123"
  }
- **Success Response:** 201 Created

  ```json
  {
  "message": "User registered successfully",
  "user": { "_id": "...", "username": "johndoe", "email": "john@example.com" }
  }


### 2. Login User

- **URL:** /auth/login
- **Method:** POST
- **Auth Required:** No
- **Request Body:**

  ```json
  {
  "email": "john@example.com",
  "password": "securepassword123"
  }
- **Success Response:** 200 OK (Returns JWT token)


## Boards
All board routes require a valid JWT passed in the Authorization: Bearer <token> header.

### 1. Get All Boards

- **URL:** /boards
- **Method:** GET
- **Success Response:** 200 OK

  ```json
  [
    {
    "_id": "60d5ec...",
    "title": "Project Alpha",
    "owner": "user_id...",
    "columns": ["To Do", "Doing", "Done"]
    }
  ]

### 2. Create Board

- **URL:** /boards
- **Method:** POST
- **Request Body:**

  ```json
  {
  "title": "Project Alpha"
  }
- **Success Response:** 201 Created


## Tasks
All task routes require a valid JWT passed in the Authorization: Bearer <token> header.

### 1. Get Tasks for a Board

- **URL:** /tasks/:boardId
- **Method:** GET
- **Success Response:** 200 OK

  ```json
  [
  {
    "_id": "task_id...",
    "title": "Setup Docker",
    "status": "To Do",
    "boardId": "60d5ec..."
  }
  ]


### 2. Move / Update Task

- **URL:** /tasks/:taskId
- **Method:** PUT
- **Request Body:**

  ```json
  {
  "status": "Doing" 
  }
- **Success Response:** 200 OK
