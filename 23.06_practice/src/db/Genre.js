import { Schema, model } from "mongoose";

const genreSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
    },
    image: {
        type: String,
        required: true,
        default: "http://google.com",
    }
}, {versionKey: false, timestamps: true});

const Genre = model("genre", genreSchema);

export default Genre;





