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

server.listen(port, () => {
  console.log(`Server started on port ${port} in ${process.env.NODE_ENV}`);
});
