require('dotenv');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, 'src', 'public')));

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
