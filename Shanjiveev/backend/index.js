const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
mongoose.set('strictQuery', true);

// Middleware
app.use(cors());

// Routing
const expenseRouter = require('./routes/Router');
app.use('/', expenseRouter);

// DB Connection via MongoDB Atlas
const DbConnectionURL = "mongodb+srv://root:root@suryraj.gfokr.mongodb.net/?retryWrites=true&w=majority&appName=suryraj";

mongoose.connect(DbConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB Connected Successfully"))
  .catch(err => console.log("DB Connection Error:", err));

// Server Running Status
const PORT = 9000;
app.listen(PORT, () => console.log(`Server Running... Port is: ${PORT}`));
