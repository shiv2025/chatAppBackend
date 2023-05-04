const mongoose = require('mongoose');

const url = `mongodb+srv://shivanshsethi7895:MongoBekarHai.23@shivansh.oujxo4z.mongodb.net/chatapp`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))