const express =  require('express');
const { createTables } = require('./services/database');

const app =  express();
const port = process.env.PORT || 5000;

// creates articles table if not exist
createTables();

app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));      