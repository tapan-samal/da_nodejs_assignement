SECURE NOTES API

A Node.js + Express + MongoDB API for secure note management with JWT authentication.

----------------------------------------
SETUP STEPS

1. Install dependencies:
   npm install

2. Run server (development):
   npm run dev

Server runs at http://localhost:4000

----------------------------------------
ENVIRONMENT VARIABLES (.env)

PORT=4000
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.rj2tivi.mongodb.net/secure-notes?retryWrites=true&w=majority
JWT_SECRET_KEY=your_jwt_secret
JWT_EXPIRE=7d
COOKIE_EXPIRE=5

----------------------------------------
API DOCUMENTATION

USER ROUTES:
POST /user/signup
  Request Body: { username, email, password }

POST /user/login
  Request Body: { email, password }

GET /user/logout
  No body. Logs out user.

GET /user/profile
  No body. Requires auth.

NOTE ROUTES (AUTH REQUIRED):
POST /note/create
  Body: { title, content }

GET /note/all
  Returns all notes of logged-in user.

GET /note/:id
  Path Param: id
  
PUT /note/:id
  Body: { title, content }
  
DELETE /note/:id
  Path Param: id

----------------------------------------
SCRIPTS

npm run dev   -> start server with nodemon
npm start     -> start server normally

