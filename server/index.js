const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

//routes
require("./routes/personalData.routes")(app);

app.listen(port, () => {
    console.log(`Fodes caralho on port ${port}`);
});
