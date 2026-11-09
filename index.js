import http from "http";

// courses
// auditories

const students = [
  { name: "Bayel", id: 1 },
  { name: "Emir", id: 2 },
  { name: "Elkhan", id: 3 },
];
const courses = [
  { name: "Devops", id: 1 },
  { name: "Front", id: 2 },
  { name: "Elkhan", id: 3 },
];

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    return res.end("Hello world, It's Dastan's Server");
  } else if (req.url === "/students" && req.method === "GET") {
    return res.end(JSON.stringify(students));
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`server is on ${port}`);
});
