import { Cabecalho } from "./styled.js";

export default function cabeca() {
    return (

        <Cabecalho> 
          
              <div className="mae-cab"> 
               <div className="cab"> 
                   <img src="/assests/imagem/usuario.svg" alt=""/>
                   <img src="/assests/imagem/bolinha.svg" alt=""/> 
                </div>
                <div className="part"> Olá, Bruno de Oliveira </div>
              </div>
                <div className="icones"> 
                    <div className="bola"> <button>  <img src="/assests/imagem/recarregar.svg" alt=""/> </button>  </div>
                    <div className="bola"> <button>  <img src="/assests/imagem/saindo.svg" alt=""/> </button> </div>

                 </div>
              
        </Cabecalho>
    )
}



