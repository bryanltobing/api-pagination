const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/product-test', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : true
})
.then(() => console.log('Database Connected'))
.catch((e) => console.log('Error ' + e));


module.exports = mongoose;