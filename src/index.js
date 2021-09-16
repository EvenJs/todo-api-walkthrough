require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const logger = require('./utils/logger');

const app = express();

const PORT = process.env.PORT || 9000;

app.use(helmet());
app.use(
  process.env.NODE_ENV === 'production' ? morgan('common') : morgan('dev')
);

app.use(express.json());
app.use(cors);

app.use(routes);

app.listen(PORT, () => {
  logger.info(`server listening on port ${PORT}`);
})