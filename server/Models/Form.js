const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    comment: { type: String, required: true }
});

const Form = mongoose.model('forms', formSchema);

module.exports = Form;