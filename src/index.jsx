import { createRoot } from "react-dom/client";

import Header from "./Header"

import "./assets/css/reset.css"
import "./assets/css/index.css"


function App(){
    return(
        <>
            <Header></Header>
            <Main></Main>

        </>
    )
}

const root = createRoot(document.querySelector('.root')).render(<App />)