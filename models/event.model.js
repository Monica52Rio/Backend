const mongoos = require("mongoose");
const event = new mongoos.Schema(
    {
    title: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          address: {
            type: String,
            required: true,
          },
          date: {
            type: Date,
            default: Date.now,
          },
          type_event: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            default: 0,
          },
          guests: {
            type: Number,
            default: 0,
          },
          invited: {
            type: Array,
            default: [],
          },

    }, { versionKey: false, timestamps: true })

module.exports = mongoos.model("events", event);
