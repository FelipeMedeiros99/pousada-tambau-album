import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header"
import Main from "./Main";

import "./assets/css/reset.css"
import "./assets/css/index.css"


function App(){
    return(
        <BrowserRouter>  
            <Routes>
                <Route path="/" element={<Main />}/>
            </Routes>
        </BrowserRouter>
    )
}


const root = createRoot(document.querySelector('.root'))

root.render(<App />)