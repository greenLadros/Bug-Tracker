//init
const mongoose = require("mongoose")

//creating schema
const BugReportSchema = mongoose.Schema({
    project: {
        type: String,
        default: "Project", // fill in the name of the project
    },
    title: {
        type: String,
        default: "Title", // a title for the report
    },
    status: {
        type: String,
        default: "Open - Not Fixed" // or "Close - Fixed"
    },
    priority: {
        type: String,
        default: "3 - annoying but not must" // priority from 3 to 1
    },
    version: {
        type: String,
        default: "Current version" // fill in a var that contains the current version
    },
    device: {
        type: String,
        default: "device unknown" // the device used in time of the error
    },
    description: {
        type: String,
        default: "no description provided" // description of what cause the bug or what happend
    },
    expected: {
        type: String,
        default: "no expectetion provided" // description of what was expected to happen
    },
    reporter: {
        type: String,
        deafult: "anonymous" // the person who reported
    }
})

//exporting
module.exports = mongoose.model('Bugs', BugReportSchema)