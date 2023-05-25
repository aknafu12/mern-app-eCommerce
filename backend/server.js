const http = require("http");
const app = require("./app");
const connectDatabase = require("./config/database");

const dotenv = require("dotenv");
// setting up config file
dotenv.config({ path: "backend/config/config.env" });

const server = http.createServer(app);
const port = process.env.PORT;

//connect database
connectDatabase();

const serverHandle = server.listen(port, () => {
  console.log(`Server started on port ${port} in ${process.env.NODE_ENV}`);
});

//handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  console.log('shutting down the server due to unhandled promise rejection ');

  //close server and exit process
  serverHandler.close(() => process.exit(1));
  });
  //handle uncaught exceptions
  process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    //close server and exit process
     serverHandle.close(() => process.exit(1));
    });
    //handle ctrl+c event
    process.on("SIGINT", () => {
      console.log("Caught interrupt signal");
      //close server and exit process
      serverHandler.close(() => process.exit(1));
      });


