const express = require("express");
const app = express();
const cors = require("cors");
const PORT =  5000;

app.use(express.json());
app.use(cors());

//Routes
app.use('/app', require('./app'))


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}!`);
});
