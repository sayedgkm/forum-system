const express = require('express');
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/userRoutes')

const app = express();
const port =process.env.PORT || 5000;


app.get("/", (req, resp)=> {
    resp.json({message: "Getting all post"});
});

app.use(express.json());
app.use("/api/v1/user", userRoutes);

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});