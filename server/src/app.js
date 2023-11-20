const express = require("express");

const config = require("./config");
const loaders = require("./loaders");
const router = require("./routes");
const cors = require("cors");

config();
loaders();

const PORT = process.env.APP_PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        hello: "Niyaban abi"
    });
});

app.listen(PORT, () => {
    app.use(router);

    console.log(`listening on port ${PORT}`);
});