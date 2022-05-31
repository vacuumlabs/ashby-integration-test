const express = require("express")
const app = express()
const PORT = process.env.PORT ?? 3000

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.post("/assessment.list", (req, res) => {
    res.json([
        {
            id: "1",
            name: "synonyms",
            description: "proste synonyma"
        },
        {
            id: "2",
            name: "dependencies",
            description: "default assignment"
        }
    ])
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))
