// First Create initalization files:

npm init -y

// Express JS and Node modules installation:
npm install express cors dotenv

// Install nodemon to restart the backend server whenever any change happens in the development environment:
npm install --save-dev nodemon

//For Clerk authentication in express server:
npm install @clerk/express

//To generate prisma schema on neon database.
npx prisma generate

// Need to Create a webhook on Inngest for clerk background jobs (email, comments, notification)
-- Add Secret key in .env 

//Go to Inngest and copy INNGEST_EVENT_KEY and INNGEST_SIGNING_KEY from the Inngest dashboard and paste it inside the .env file.

// Go to terminal in server and install inngest:
npm install inngest