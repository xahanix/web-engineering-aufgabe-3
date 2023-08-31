import express from "express";
import personalDataRoutes from "./routes/personalData.routes";

const app = express();
const port = 3000;

app.use(express.json());

//routes
personalDataRoutes(app);

app.listen(port, () => {
    console.log(`Fodes caralho on port ${port}`);
});
