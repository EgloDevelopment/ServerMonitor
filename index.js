const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const data = {
    message: "Server is alive",
    timestamp: new Date().toISOString(),
  };

  res.json(data);
});

app.listen(port, () => {
  console.log("🎉 Uptime server is running at port 3000!");
});
