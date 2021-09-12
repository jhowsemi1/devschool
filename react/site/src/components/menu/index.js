import { Menu } from "./styled.js";

export default function menu() {
    return (
        <Menu> 
           <div className="ladoesq"> 
              <div className="titu">
                 <div> <img src="/assests/imagem/book.svg" alt=""/></div>
                 <div className="titulo">  <span>Dev</span>School </div>
                </div>
                <div className="back">  </div>
                 <div className="geren-1"> 
                    <div className="geren"> Gerenciamento </div>
                    <div> <img src="/assests/imagem/geren.svg" alt=""/> </div> 
                  </div>
                 <div className="geren-alu"> Alunos </div>
             </div>

        </Menu>
    )
}











