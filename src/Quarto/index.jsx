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
    width: 70%;
    overflow-x: scroll;
    img{
        padding: 10px;
        width: 100%;
    }

`

const ContainerCategoria = styled.div`  
    display: flex;
    position: relative;
    background-color: cyan;
    width: 100%;
    max-width: 700px;

    h1{
        background-color: yellow;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;

    }
`