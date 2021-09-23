import axios from 'axios'
const api = axios.create({
    baseURL: 'https://schooldevjo.herokuapp.com/'
})

export default class Api {
    async listar() {
    let r = await api.get("/matricula");
    return r.data;

    }

    async inserir( aluno, chamada, curso, turma) {
        let r = await api.post("/matricula", {aluno, chamada, curso, turma});
        return r.data;
    }

    

    async alterar(id, aluno, chamada, curso, turma) {
        let r = await api.put("/matricula/" + id, { aluno, chamada, curso, turma});
        return r.data;
    }

    async remover(id) {
        let r = await api.delete("/matricula/" + id);
        return r.data;
    }





}