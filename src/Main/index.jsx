import styled from "styled-components"
import { useState } from "react"

import Quarto from "../Quarto"

export default function Main(){
    const padroes = ["standard", "luxo", "frente-mar"]
    let [contador, setContador] = useState({"standard": 1, "luxo": 1, "frente-mar": 1})
    return(
        <Menu>
            {padroes.map((padrao)=>{
                return <Quarto padrao={padrao} contador={contador} setContador={setContador}/>
            })}
        </Menu>
    )
}

const Menu = styled.main`   
`