
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.get("/api/resume", (req, res) => {
    res.json({
        name: "Nandana K A",
        education: "BCA",
        course: "M.Voc Software Application Development",
        skills: ["HTML", "CSS", "JavaScript", "React"]
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
