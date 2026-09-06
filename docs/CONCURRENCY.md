# Concurrent Edits Handling in SyncBoard

To fulfill the Milestone 3 requirements, SyncBoard implements a version-checking concurrency strategy to ensure that simultaneous updates by multiple users are detected and handled properly, preventing silent data overwrites.

## The Problem
In a collaborative environment, User A and User B might look at the same board at the same time. If User A moves a task to "Doing" and, milliseconds later, User B moves that same task to "Done", a standard update would silently overwrite User A's action.

## Our Approach: Optimistic UI with Version Control

We solve this using **Optimistic UI Updates** paired with **Mongoose Versioning (`__v`)**.

### 1. Backend Detection (The Server)
- Every Task document in MongoDB has a built-in `__v` (version) key managed by Mongoose.
- When a client sends a `PUT` request to update a task, they must include the `version` they currently see on their screen.
- The `taskController` fetches the task from the database and compares the database's `__v` with the client's `version`.
- If the client's version is older than the database version, the server rejects the update with a `409 Conflict` HTTP status and sends back the latest task data.

### 2. Frontend Handling (The Client)
- When a user drops a task into a new column, the UI updates instantly (Optimistic UI) to keep the app feeling fast.
- The `taskService` fires the `PUT` request containing the task's `__v` key.
- If the server responds with a `409 Conflict`, the frontend catches the error and performs a **Rollback**:
  - The optimistic UI update is instantly reverted.
  - A browser alert surfaces the conflict to the user ("This task was modified by another user").
  - The application state is automatically injected with the server's newest data so the user can see exactly what the other person changed.

This approach guarantees that users are always aware of conflicts and data is never silently destroyed.