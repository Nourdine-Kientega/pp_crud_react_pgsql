const cors = require('cors');
const express =  require('express');
const { createTables } = require('./models/articleModel');
const articlesRouter = require('./routes/articlesRoutes');

const app =  express();
const port = process.env.PORT || 8000;

// creates articles table if not exist
createTables();

app.use(cors()); // Allow all request provide anything origin eg: (front: 5000) to (back: 3000/8000) 
 
app.use(articlesRouter);     

app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));             