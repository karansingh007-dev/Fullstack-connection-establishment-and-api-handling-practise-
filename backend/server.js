import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import cors from "cors";
app.get("/", (req, res) => {
  res.send(`listening on port ${PORT}`);
})
// app.use(cors());


app.get("/api/jokes", (req, res) => {
   const jokes = [
     {
       id: 1,
       setup: "Why don’t scientists trust atoms?",
       punchline: "Because they make up everything!",
     },
     {
       id: 2,
       setup: "Why did the computer go to the doctor?",
       punchline: "Because it caught a virus!",
     },
     {
       id: 3,
       setup: "Why don’t skeletons fight each other?",
       punchline: "They don’t have the guts.",
     },
     {
       id: 4,
       setup: "Why did the math book look sad?",
       punchline: "Because it had too many problems.",
     },
     {
       id: 5,
       setup: "Why was the JavaScript developer sad?",
       punchline: "Because he didn’t know how to ‘null’ his feelings.",
     },
   ];

    res.json(jokes);
})
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})