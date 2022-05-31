const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/assessment.list", (req, res) => {
  res.json({
    success: true,
    results: [
      {
        assessment_type_id: "1",
        name: "synonyms",
        description: "proste synonyma",
      },
      {
        assessment_type_id: "2",
        name: "dependencies",
        description: "default assignment",
      },
    ],
  });
});

app.post("/assessment.start", (req, res) => {
  console.log(req.body);

  const assessment_id = uuid.v4();
  console.log(`New Assessment ID: ${assessment_id}`);

  res.json({
    success: true,
    results: {
      assessment_id,
      _comment: "some comment",
      update_request: {
        timestamp: new Date().getTime(),
        assessment_id,
        assessment_status: {
          identifier: "assignment_status",
          value: "not_started",
          type: "string",
          label: "Assignment status",
        },
      },
    },
  });
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
