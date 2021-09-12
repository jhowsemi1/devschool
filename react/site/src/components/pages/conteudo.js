import {Conteiner} from "./styled"
import Cabe from "../cabecalho/index"
import Men from "../menu/index"
import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from "react";
import Api from "../../service/api";

const api = new Api(); 

export default function Home() {
    const loading = useRef(null);
    const [aluno, setAlunos] = useState([]);
    const [nome, setNome] = useState("");
    const [chamada, setChamada] = useState("");
    const [turma, setTurma] = useState("");
    const [curso, setCurso] = useState("");
    const [idAlterando, setIdAlterando] = useState(0);
    
    async function listar() {
        let r = await api.listar();
        setAlunos(r);
    }

    async function inserir() {

        if( idAlterando == 0) {
            let r = await api.inserir(aluno, chamada, curso, turma);
            if (r.erro) 
              toast.dark(r.erro);
            
            else 
              toast.dark(" ✅aluno inserido!");
        } else { 
        let r = await api.alterar(idAlterando, aluno, chamada, curso, turma);
        if (r.erro) 
              alert.dark(r.erro);
        else 
          toast.dark("✳️ aluno alterado!");

      }  
       limparCampos();
        listar();
    }

    function limparCampos(){
        setNome("");
        setChamada("");
        setCurso("");
        setTurma("");
        setIdAlterando(0);

    }

    async function remover(id) {
        let r = await api.remover(id);
        toast.dark("❌ aluno removido");

        listar();
    }

    async function alterar (item) {
        setNome(item.nm_aluno);
        setChamada(item.nr_chamada);
        setCurso(item.nm_curso);
        setTurma(item.nm_turma);
        setIdAlterando(item.id_matricula);

    }

  useEffect(() => {
      listar();
  },[])

  return (
    <Conteiner>
        <ToastContainer/>
        <LoadingBar color="red" ref={loading} />
       <Men/> 
          <div> 
            <Cabe/>
            <div className="seguran"> 
                   <div className="aluno-novo"> 
                       <div className="segu-barra"> 
                            <div className="barra-alu"> <img src="/assests/imagem/barra.svg" alt=""/> </div>
                            <h2> {idAlterando == 0 ? "Novo Aluno" :"Alterando Aluno " + idAlterando} </h2>
                          </div>
                     <div className="segu-1"> 
                            <div className="forms">
                                <div className="nome" > Nome: </div>
                                <input type="text" value={nome} onChange={e => setNome(e.target.value)}/> 
                            </div>

                            <div className="forms">
                                <div className="curso" > Curso: </div>
                                <input type="text" value={curso} onChange={e => setCurso(e.target.value)}/>   
                            </div>
                         </div>
                       
                         <div className="segu-2">
                        <div className="forms">
                            <div className="chamada" > Chamada: </div>
                            <input type="text" value={chamada} onChange={e => setChamada(e.target.value)}/>  
                        </div>
                            
                        <div className="forms">
                            <div className="turma" > Turma: </div>
                            <input type="text" value={turma} onChange={e => setTurma(e.target.value)}/>
                        </div>
                   <div className="botao-alu">   
                     <button onClick={inserir}> {idAlterando == 0 ? "Cadastrar" : "alterar"} </button> 
                    </div>
                  </div>
                  </div>
            <div class="matriculados"> 
                <div class="al"> 
                    <div class="barrin"> <img src="/assests/imagem/barra.svg" alt=""/> </div>
                    <h2> Alunos Matriculados </h2>
                 </div>
                 
                 <table class="tabela"> 
                    <thead> 
                        <tr class="linha-primeira">
                            <th> ID </th>
                            <th> Nome </th>  
                            <th> Chamada </th>  
                            <th> Turma </th> 
                            <th> Curso </th>
                            <th>  </th>      
                            <th>  </th>
                            
                        </tr>
                    </thead>
                    
                    <tbody> 
                        
                        {aluno.map((item, i) => 
                            
                            <tr className={ i % 2 == 0 ? "alterna" : ""}> 
                                <td> {item.id_matricula} </td>
                                <td title={item.nm_aluno}> {item.nm_aluno != null && item.nm_aluno.length >= 25 
                                    ? item.nm_aluno.substr(0, 25) + "..." 
                                    : item.nm_aluno} 
                                  </td>
                                <td> {item.nr_chamada} </td>
                                <td> {item.nm_turma} </td>
                                <td> {item.nm_curso} </td>

                                <td className="visu">   <button className="botoes" onClick={() => alterar(item)}> <img src="/assests/imagem/editar.svg" alt=""/> </button> </td> 
                                <td className="visu">  <button className="botoes" onClick={() => remover(item.id_matricula)} > <img src="/assests/imagem/excluir.svg" alt=""/> </button> </td>
                                    
                            </tr>
                            )}

                        </tbody>
                            </table> 
                            
                         
                        
                       </div>
               
             </div>
           </div>
       </Conteiner>
  )
}