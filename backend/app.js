const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const {cors}=require('./middleware/cors')
const app = express();

const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json());//pour avoir acces au corps de la requete json

app.use(cors)
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/books', bookRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;