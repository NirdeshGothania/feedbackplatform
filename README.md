# Google OAuth Authentication with Node.js

This project implements the Google OAuth 2.0 authentication in a Node.js application using Express, Mongoose, and Passport.

## Prerequisites

- Node.js
- MongoDB
- Google Developer Console account

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/NirdeshGothania/feedbackplatform.git
```

### 2. Install dependencies

``` sh
npm install
```

### 3. Set up environment variables

``` sh
MONGO_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
```

### 4. Google Developer Console Configuration

- Go to the Google Developer Console.
- Create a new project.
- Navigate to Credentials and create a new OAuth 2.0 Client ID.
- Set the Authorized redirect URIs to http://localhost:3000/auth/google/callback.
- Copy the Client ID and Client Secret to your .env file.

### 5. Running the Application

``` sh
npm start
```

The server will start on [http://localhost:3000](url).

### 6. Endpoints

- /: Home page.
- /auth/google: Initiates Google authentication.
- /auth/google/callback: Handles the callback from Google.
- /feedbackPage: Protected route that requires authentication.
- /logout: Logs out the user.

### 7. Explanation of the code

- **server.js**
  - Dependencies: The application uses express, mongoose, passport, express-session, passport-google-oauth20, dotenv, and cors.
  - Express Setup: Configures the view engine, parsers, CORS, sessions, and initializes Passport.
  - Database Connection: Connects to MongoDB using Mongoose.
  - User Model: Defines a Mongoose schema and model for the User.
  - Passport Configuration: Sets up the Google OAuth strategy, serializes user information into the session, and deserializes it for each request.
  - Routes:
    - /: Renders the home page.
    - /auth/google: Initiates Google OAuth authentication.
    - /auth/google/callback: Handles the callback from Google and redirects to the feedback page.
    - /feedbackPage: Protected route that requires authentication.
    - /logout: Logs out the user and destroys the session.
- **views**
  - index.ejs: The home page template.
  - feedbackPage.ejs: The feedback page template, displayed after successful authentication.
