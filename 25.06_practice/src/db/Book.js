// import { Schema, model } from "yup";
import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
    },
    author: {
        type: String,
        required: true,
        minlength: 2,
    },
    year: {
        type: Number,
        required: true,
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: "genres",
        required: true,
    },
    cover: {
        type: String,
        required: true,
    }
}, {versionKey: false, timestamps: true});

const Book = model("book", bookSchema);

export default Book;