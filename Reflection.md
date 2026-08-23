# CollabBoard - Team Reflection

## How Work Was Divided
To ensure even contribution, we rotated roles loosely across the project sessions[span_5](start_span)[span_5](end_span).
* Member 1 (Lead): React UI/UX skeleton, design system, and final demo compilation.
* Member 2: Kanban Board and static Column components.
* Member 3: Task Card UI, HTML5 drag and drop, and React login forms.
* Member 4: Express REST API, JWT middleware, and User authentication.
* Member 5: Socket.io real-time WebSocket synchronization.
* Member 6: MongoDB database connection and Mongoose schema definitions.
* Member 7: Client-side offline persistence using IndexedDB.
* Member 8: Optimistic concurrency control and conflict detection logic.
* Member 9: Automated testing suites using Jest and React Testing Library.
* Member 10: Docker containerization and GitHub Actions CI pipeline.

## What Worked Well
Our branch strategy of using feature branches and Pull Requests into `main` kept our git history clean and prevented massive merge conflicts[span_6](start_span)[span_6](end_span). By establishing a static React UI and Express skeleton early, the frontend and backend teams were able to work in parallel without blocking each other.

## What We Would Do Differently
If we built this again, we would integrate the automated Jest tests earlier in the development cycle. Writing tests at the end (Milestone 4) meant we had to go back and slightly refactor our initial API controllers to make them more testable. Additionally, handling the complex state merges between the offline IndexedDB cache and the live WebSocket updates required more debugging time than anticipated.
