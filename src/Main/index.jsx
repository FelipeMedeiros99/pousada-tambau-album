import styled from "styled-components"
import { useRef } from "react"

import Quarto from "../Quarto"

export default function Main(){
    const padroes = ["standard", "luxo", "frente-mar"]
    const contador = useRef({"standard": 0, "luxo": 0, "frente-mar": 0})
    const elementoDeNavegacao = useRef({"standard": [], "luxo": [], "frente-mar": []})

    return(
        <Menu>
            {padroes.map((padrao)=>{
                return <Quarto 
                            key={padrao}
                            padrao={padrao} 
                            contador={contador} 
                            elementoDeNavegacao={elementoDeNavegacao}/>
            })}
        </Menu>
    )
}

const Menu = styled.main`   
`