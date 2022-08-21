
import { Routes, Route} from "react-router-dom";
import Carde from "./pages/login/index";



export default function routes(){
    return (
      
       <Routes>
          <Route path="/"  element= {<Carde/>}/>
        </Routes>
    
    );

}