const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const bodyParser = require('body-parser');
const errorMiddleWare = require('./utils/error.js');

const authRouter = require('./routes/auth.routes.js');
const contactRoutes = require('./routes/contact.routes.js');

const app = express();
dotenv.config();

app.use(
  bodyParser.json({
    limit: '10mb',
    extended: true,
  })
);

app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('connected to database successfully');
});

app.get('/', (req, res) => {
  console.log('calling');
  res.send('<h1>Hello</h1>');
});

// defining the routes
app.use('/auth', authRouter);
app.use('/contact', contactRoutes);
app.use(errorMiddleWare);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`running port number ${PORT} of express_jcb`);
});
