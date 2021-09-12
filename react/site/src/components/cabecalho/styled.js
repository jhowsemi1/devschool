import styled from "styled-components"

const Cabecalho = styled.div`
    display: flex;
    flex-direction: row;

    width: 67em;
    height: 3.5em;
    
    background-color: white;
    justify-content: space-between;

     
    .cab img:nth-child(2){
        width: 1em;
        position: absolute;

        top: 4px;
        left: 21.3em;
    }
    
    .cab img:nth-child(1) {
        width: 3em;
        padding-top: 5px;
    }

    
    .cab {
        margin-left: 1em;
    }

    .part{
    margin-top: 1em;
    margin-left: 1em;
   }

   .icones{
       padding: 1em;
     
   }

   .mae-cab{
    display: flex;
    flex-direction: row;
   }

   .bola {
    background-color: #986CDF;
    border-radius: 50%;

    width: px;
    height: 46px;
 }
.bola img{
    width: 31px;
    height: 40px;
}

.icones img{
    width: 2.7em;
    
}

.icones{ 
    display: flex;
    flex-direction: row;

    margin-top: -11px;
    justify-content: space-between;

    width: 8.5em;
    margin-right: 1em

}

.icones button {
    background-color: #986CDF ;
    border-radius: 50%;

    border: none;
    height: 46px;
        
}

.icones{
    padding-top: 15px;

}
 

`
export {Cabecalho}