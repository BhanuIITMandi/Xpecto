const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    club: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },

    oneline_content: {
        type: String,
        required: true,
    },

    rest_content: {
        type: String,
    },

    event_image: {
        type: String,
        required: true,
    },
    rulebook_link: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    problemset_link: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    start_time: {
        day: {
            type: Number,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
    },

    end_time: {
        day: {
            type: Number,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
    },

    prices: {
        first: {
            type: Number,
            required: true,
        },
        second: {
            type: String,
            required: true,
        },
        third: {
            type: String,
            required: true,
        },
    },

    coordinators: {
        first: {
            name: {
                type: String,
                required: true,
            },
            contact: {
                type: String,
                required: true,
            },
        },
        second: {
            name: {
                type: String,
                required: true,
            },
            contact: {
                type: String,
                required: true,
            },
        },
    },

    registeredUsers: [
        {
            user_id: {
                type: String,
                unique: true,
            },
        },
    ],
    teamMaxSize: {
        type: Number,
        required: true,
    },
    teamMinSize: {
        type: Number,
        required: true,
    },
});
;

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
