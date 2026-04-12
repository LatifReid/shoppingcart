const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

const cartRoutes = require('./routes/carts');
app.use('/cart', cartRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});