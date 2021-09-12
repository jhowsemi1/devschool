import { BrowserRouter , Switch, Route } from "react-router-dom"

import Dev from "../src/components/pages/conteudo";

export default function Routes(){
    return (
        <BrowserRouter> 
         <Switch> 
             <Route path="/" exact={true} component={Dev} />
         </Switch>
        </BrowserRouter>
    )
}