// Load the module dependencies
const mongoose = require('mongoose');
const crypto = require('crypto');
const pbkd2f = require('pbkdf2');
const Schema = mongoose.Schema;

// Define a new 'FeedbackSchema
const FeedbackSchema = new Schema({
    username: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    comments: String,
    created: {
        type: Date,
        // Create a default 'created' value
        default: Date.now
    }
});

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
FeedbackSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

// Create the 'Feedback' model out of the 'FeedbackSchema'
mongoose.model('Feedback', FeedbackSchema);