import { createRoot } from "react-dom/client";

import Header from "./Header"
import Main from "./Main";

import "./assets/css/reset.css"
import "./assets/css/index.css"


function App(){
    return(
        <>
            <Header />
            <Main />
        </>
    )
}

const root = createRoot(document.querySelector('.root')).render(<App />)