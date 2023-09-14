const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get("/api", (req, res) => {
    res.json({
        "events": [
            { title: "Teacher's Day", date: '2023-09-05' },
            { title: 'Synopsis Evaluation', date: '2023-08-24' },
            { title: 'Rakhi Celebration', date: '2023-08-30' },
            { title: 'GitHub Event', date: '2023-09-09', url: 'https://github.com/' }
        ]
    })
})

app.listen(5000, () => { console.log("server started") })