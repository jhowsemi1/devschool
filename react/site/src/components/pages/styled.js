import styled  from "styled-components";

const Conteiner = styled.div`
display: flex;
flex-direction: row;
background-color: #F5F5F5;
height: 100vh;
position: sticky;

.segu-1{
display: flex;
flex-direction: row;

margin-left: 2.6em;
}

.segu-2{
display: flex;
flex-direction: row;

padding-top: 1em;
margin-left: 1.2em;
}

.botao-alu button {
    background-color: #E911C6;
    color: white;
    border-radius: 25px;
    border: none;
    padding: 6px 15px 8px 15px;
}

.botao-alu{
    margin-left: 20px;
}

.aluno-novo{
display: flex;
flex-direction: column;

padding-top: 0em;
margin-top: 2em;

background-color: white;
width: 55em;

padding-left: 1.5em;
height: 11em;

margin-left: 0em;
}
     
.forms{ 
   display: flex;
   flex-direction: row;
}

.curso {
    margin-left: 4.3em;
    padding-right: 6px
}

.turma{
    margin-left: 4em;
    padding-right: 6px;
}

.nome{
    padding-right: 6px;
}

.chamada{
    padding-right: 6px;
}

input {
    width: 15em;
    height: 2em;
}

.barra-alu {
    padding-top: 1.2em;
    padding-right: 1em;
}

.segu-barra{
  display: flex;
  flex-direction: row;
}

.matriculados {
    margin-top: 2em;
    padding-left: 2em;

    width: 55em;
    height: 53vh;

    background-color: white;
    overflow: hidden;

        overflow-y: scroll;
        height: 2500px;

        max-height: 300px;
       

   
}

.al{
    display: flex;
    flex-direction: row;
}

.barrin {
    margin-top: 1.3em;
    margin-right: 1em;
}

th,td {
    padding: 1em;
}

.tabela {
    margin-left: 2em;
    margin-right: 2em;

    width: calc(100% - 4em);
    border-collapse: collapse;
    text-align: left;
}

.seguran {
    margin-left: 3em;
}

.linha-primeira{
    align-items: center;
    justify-content: space-between;

    background-color: #986CDF;
    color: white;
    height: 3em;
}

.botoes {
    background-color: #565656;
    border-radius: 50%;

    border: none;
    height: 30px;

   display: flex;
   flex-direction: row;
  padding-left: em;
}


.but1{
    padding-right: 10px;
}

.titulo span{
    color:#EA10C7;
}

.alterna{
    background-color: #F5F5F5;
}

.visu > button {
  visibility: hidden;
}





tr:hover{
    .visu > button{
        visibility: visible;
    }
}
        
`

export {Conteiner}