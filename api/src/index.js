import db from "./db.js";
import express from "express"
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());


app.get("/matricula", async (req, resp) => {
  try { 
        let matri = await db.tb_matricula.findAll();
        resp.send(matri);
  } catch (e) {
      resp.send({ erro: "ocorreu um erro!"})
  }
})

app.put("/matricula/:id", async (req, resp) => {
   try {
       let id = req.params.id;
       let aluno = req.body.aluno;

    let r = await db.tb_matricula.update (
        {
            nm_aluno: aluno 
        },
        {
            where: {id_matricula: id}
        });
        resp.sendStatus(200);
    } catch (e) {
        resp.send({erro: e.toString()});
    }

})

app.listen(process.env.PORT,
    x => console.log(`A PORT ${process.env.PORT} subiu!! `));


