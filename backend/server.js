const express = require('express');
const dotenv = require('dotenv');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();

/* API Server Utilities */
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
/* API Server Utilities */


app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

/* MIDDLEWARE */
app.use(notFound);
app.use(errorHandler);
/* MIDDLEWARE */

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
