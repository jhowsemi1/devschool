import styled from "styled-components"

const Menu = styled.div`
    width: 18em;
    height: 100vh;
    position: sticky;

    background-color: #2B3031;
    padding-top: 2em;

    .titu{
    display: flex;
    flex-direction: row;
    margin-left: 4em;
    margin-bottom: 1em;
   }
    .titulo{
        color: white;
        padding-top: 0.5em;

    } 

    .back{
    background-color: #262626;
    height: 3em;
    color: #262626;
}

    .geren-1{
        display: flex;
        flex-direction: row;

        justify-content: space-evenly;
        padding-top: 2em;
    }

    .geren{
        color: white;
        margin-right: 1em;
    }

    .geren-alu{
    margin-top: 1em;
    padding-top: 1em;

    padding-left: 3em;
    width: 18em;

    height: 3em;
    background-color: white;
    
    color: black;
}
`
export {Menu}