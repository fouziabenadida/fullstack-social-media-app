const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

require('dotenv').config();
const uri = process.env.MONGO_URL;

mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB');

    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
//Middleware
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
app.listen(8800, () => {
    console.log('server is running')
})


