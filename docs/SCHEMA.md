erDiagram
    USER ||--o{ BOARD : owns
    BOARD ||--o{ TASK : contains

    USER {
        ObjectId _id
        String name
        String email
        String password
    }

    BOARD {
        ObjectId _id
        String name
        ObjectId ownerId
        Date createdAt
    }

    TASK {
        ObjectId _id
        String title
        String description
        String status
        ObjectId boardId
        Date createdAt
    }