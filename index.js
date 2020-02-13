const express = require('express');

const server = express();

const apiRouter = require("./data/db-router.js");

server.use(express.json());

server.use("/api/posts", apiRouter);


server.get('/', (req, res) => {
    res.send(`
      <h2>Lambda Posts API</h>
      <p>Welcome to the Lambda Posts API</p>
    `);
  });



  const port = process.env.PORT || 5000
  server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
  });
  