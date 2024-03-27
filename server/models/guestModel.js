import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cv : {
        type: String,
        required: false
    },

});

const Guest = mongoose.model('Guest', guestSchema);
export default Guest;
    