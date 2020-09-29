//init
const express = require("express")
route = express.Router()
const BugReport = require("./models/BugReportModel")

//making routes

//GET SPECIFIC BUG REPORT
route.get('/:reportId', async (req, res) => {
    try{
        const report = await BugReport.findById(req.params.reportId)
        res.json(report)
    }catch(err){
        res.json({message: err})
    }
})

//GET ALL BUG REPORTS
route.get('/', async (req, res) => {
    try{
        const reports = await BugReport.find()
        res.json(reports)
    }catch(err){
        res.json({message: err})
    }
})

//DELETE SPECIFIC BUG REPORT
route.delete('/:reportId', async (req, res) => {
    try{
        const report = await BugReport.findByIdAndDelete(req.params.reportId)
        res.json(report)
    }catch(err){
        res.json({message: err})
    }
})

//SUBMIT A BUG REPORT
route.post("/", (req, res) =>{
    const report = new BugReport({
        title: req.body.title,
        priority: req.body.priority,
        device: req.body.device,
        description: req.body.description,
        expected: req.body.expected,
        reporter: req.body.reporter
    })
    report.save()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json({message: err})
    })
})

//UPDATE A BUG REPORT
route.patch('/:reportId', async (req, res) => {
    try{
        const updatedReport = BugReport.updateOne({_id: req.params.reportId}, {$set: {status: req.body.status}})
        res.json(updatedReport)
    }catch(err){
        res.json({message: err})
    }
})


//exporting
module.exports = route