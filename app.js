const express = require('express');
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const app = express();
//Les cors
app.use(cors())
//BodyParser Middleware
app.use(express.json());
mongoose.set("strictQuery", false);
// Connexion à la base données
mongoose.connect(process.env.DATABASE,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connexion à la base de données réussie");
    }).catch(err => {
        console.log('Impossible de se connecter à la base de données', err);
        process.exit();
    });
app.get("/", (req, res) => {
    res.send("bonjour");
});
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});

// Route For Category
const CategoryRouter = require("./routes/Category.route")
app.use('/api/Categorys', CategoryRouter);
// Route For SubCategory
const SubCategoryRouter = require("./routes/SubCategory.route")
app.use('/api/SubCategorys', SubCategoryRouter);
// Route For Services
const servicesRouter = require("./routes/services.route")
app.use('/api/services', servicesRouter);
// Route For Order
const orderRouter = require("./routes/Order.route")
app.use('/api/Order', orderRouter);
// Route For User
const userRouter = require("./routes/User.route")
app.use('/api/User', userRouter);

module.exports = app; 