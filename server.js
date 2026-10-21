import express from "express";
const app = express();

app.use(express.json)

let alunos = [
    {id: 1, nome: "Felipe", idade: 18},
    {id: 2, nome: "Amanda",idade: 17},
    {id: 3, nome: "Laura", idade: 10},
];

app.get ("/alunos", (req, res)=>{
    res.send(alunos);
});

app.post("/alunos", (req, res)=>{
    const aluno = req.body;
    alunos.push(aluno);
    res.send(alunos)
});

app.delete("/alunos/:id", (req, res)=>{
    const id = number (req. params.id);
    alunos = alunos.filter(aluno => aluno.id !== id);
    res.send(alunos);
});

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000")
});