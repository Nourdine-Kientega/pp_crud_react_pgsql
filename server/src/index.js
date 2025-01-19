const express =  require('express');
const { createTables } = require('./models/articleModel');
const articlesRouter = require('./routes/articlesRoutes');

const app =  express();
const port = process.env.PORT || 5000;

// creates articles table if not exist
createTables();

app.use(express.json()); 
// app.use(express.urlencoded({ extended: false }));

app.use(articlesRouter);   


app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));            