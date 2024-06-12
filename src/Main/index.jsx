import styled from "styled-components"

import Quarto from "../Quarto"

export default function Main(){
    const padroes = ["standard", "luxo", "frente-mar"]

    return(
        <Menu>
            {padroes.map((padrao)=>{
                return <Quarto padrao={padrao} />
            })}
        </Menu>
    )
}

const Menu = styled.main`   
`