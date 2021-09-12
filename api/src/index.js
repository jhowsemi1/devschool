import db from "./db.js";
import express from "express"
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());


app.get("/matricula", async (req, resp) => {
  try { 
        let matri = await db.tb_matricula.findAll({order: [[ "id_matricula", "desc"]]});
        resp.send(matri);
  } catch (e) {
      resp.send({ erro: "ocorreu um erro!"})
  }
})

app.put("/matricula/:id", async (req, resp) => {
   try {
       let id = req.params.id;
       let b = req.body;
    //    let aluno = req.body.aluno;
    //    let curso = req.body.curso;
    //    let turma = req.body.turma;
    //    let chamada = req.body.chamada;

    let r = await db.tb_matricula.update (
        {
            nm_aluno: b.aluno,
            nm_curso: b.curso,
            nm_turma: b.turma,
            nr_chamada: b.chamada

        },
        {
            where: {id_matricula: id}
        });
        resp.sendStatus(200);
    } catch (e) {
        resp.send({erro: e.toString()});
    }

})

app.post("/matricula/", async (req, resp) => {
    try {
        let id = req.params.id;
        let g = req.body;
        // let aluno = req.body.aluno;
        // let curso = req.body.curso;
        // let turma = req.body.turma;
        // let chamada = req.body.chamada;
 
     let r = await db.tb_matricula.create (
         {
             nm_aluno: g.aluno,
             nm_curso: g.curso,
             nm_turma: g.turma,
             nr_chamada: g.chamada
         },
         {
             where: {id_matricula: id}
         });
         resp.send(r);
     } catch (e) {
         resp.send({erro: e.toString()});
     }
 
 })
 app.delete("/matricula/:id", async (req, resp) => {
    try {
        let {id} = req.params;

       let r = await db.tb_matricula.destroy (
           {where: {id_matricula: req.params.id}}
       )
       resp.sendStatus(200); 
    } catch (e) {
        resp.send({erro: e.toString()})
    }
 })
app.listen(process.env.PORT,
    x => console.log(`A PORT ${process.env.PORT} subiu!! `));


