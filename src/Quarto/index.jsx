import styled from "styled-components"

import Informacoes from "../Informacoes"

export default function Quarto({padrao}){
    const numeros = ['1', '2', '3', '4', '5', '6']
    return(


        <ContainerCategoria>
            <h1>Quarto {padrao}</h1>
            <ContainerFotos>
                {numeros.map((numero)=>{
                    return <img src={`./assets/${padrao}/${padrao}${numero}.jpg`} alt="" />
                })}
            </ContainerFotos>

            <Informacoes padrao={padrao}>
            </Informacoes>


        </ContainerCategoria>
    )
}

const ContainerFotos = styled.div`
    display: flex;
    max-width: 500px;
    overflow-x: scroll;
    img{
        padding: 10px;
        max-width: 500px;
    }

`

const ContainerCategoria = styled.div`

`