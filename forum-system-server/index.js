const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const port =process.env.PORT || 5000;


app.get("/api/post", (req, resp)=> {
    resp.json({message: "Getting all post"});
});


app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});