import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({

    password:{
        type: String,
        required: [true, 'Enter your password'],
        trim: true,
        min: [6, "Your password should be atleast 6 characters"]
    },
 
    email:{
        type: String,
        require: [true, 'Enter an email'],
        trim: true
    },
    todos:[{type:mongoose.Types.ObjectId, ref: 'Todo'}]

},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

});

export default mongoose.model ('User', UserSchema);
