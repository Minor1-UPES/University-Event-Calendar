const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Anmol@123",
    database: "test"
})


app.get("/create", (req, res) => {
    const sql = "SELECT * FROM university_calendar";
    db.query(sql, (err, result) => {
        if (err) throw err;
        const events = result;
        console.log(events);
        const title = events[0].calendar_title
        const date_01 = events[0].calendar_date
        const title_02 = events[1].calendar_title
        const date_02 = events[1].calendar_date
        console.log(date_01);
        console.log("title", title);
        console.log(title_02);
        res.json({
            "events": [
                { title: title, date: date_01 },
                { title: title_02, date: date_02 },

            ]
        })
    })
})

// app.post("create", (req, res) => {
//     const sql = `INSERT INTO BOOKS (title, desc, date, venue) VALUES (${req.body.title}, ${req.body.desc}, ${req.body.date}, ${req.body.venue})`;
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     })
// })

app.post("/create", (req, res) => {
    const event = req.query;
    console.log(event);
    console.log(req.json);
    res.send("Event is added to the database");
})

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