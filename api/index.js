const config =require('dotenv');
const express=require('express');
const bodyParser= require('body-parser');
const bookRoutes = require('./server/routes/BookRoutes');

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;
//app.use(express.json());

app.use('/api/v1/books', bookRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

module.exports= app;
