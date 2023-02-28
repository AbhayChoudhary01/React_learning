const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(
        "MongoDB database connection established"
    );
})

const customerRouter = require('./routes/customer')
const productRouter = require('./routes/product')

app.use('/customer', customerRouter);
app.use('/product', productRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

