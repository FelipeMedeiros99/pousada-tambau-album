import styled from "styled-components"
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

import Informacoes from "../Informacoes"

export default function Quarto({padrao}){
    const numeros = ['1', '2', '3', '4', '5', '6']
   
    return(

        <ContainerCategoria>

            <h1>Quarto {padrao}</h1>
            <ContainerFotos>
                <>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    {numeros.map((numero)=>(
                        <img id={`${padrao}${numero}`} src={`./assets/${padrao}/${padrao}${numero}.jpg`} alt="" />
                        ))}
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </>
            </ContainerFotos>

            <Informacoes padrao={padrao}>
            </Informacoes>
        </ContainerCategoria>
    )
}



const ContainerCategoria = styled.div`  

    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        width: 100vw;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
`

const ContainerFotos = styled.div`
    padding: 20px;
    display: flex;
    width: 100vw;
    overflow: scroll;
    position: relative;

    ion-icon{
        font-size: 30px;
        color: red;
    }

    img{
        border-radius: 10px;
        width: 100vw;
        height: auto;
    }
`