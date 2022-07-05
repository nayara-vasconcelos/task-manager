const express = require('express');
// const cors = require('cors');

const router = require('./routes');
const { handleErrors } = require('./middlewares/errorMiddlewares');

const app = express();
app.use(express.json());
// app.use(cors());

app.use('/', router);
app.use(handleErrors);

module.exports = app;
