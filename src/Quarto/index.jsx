import styled from "styled-components"
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

import Informacoes from "../Informacoes"

export default function Quarto({padrao}){
    const numeros = ['1', '2', '3', '4', '5', '6']
   
    return(

        <ContainerCategoria>
            <div className="container-icone esquerda">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div className="container-icone direita">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
            
            <h1>Quarto {padrao}</h1>

            <ContainerFotos>
                {numeros.map((numero)=>(
                    <img id={`${padrao}${numero}`} src={`./assets/${padrao}/${padrao}${numero}.jpg`} alt="" />        
                    ))}
            </ContainerFotos>

            <Informacoes padrao={padrao}>
            </Informacoes>
        </ContainerCategoria>
    )
}



const ContainerCategoria = styled.div`  
    background-color: #37124d;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 10px;

    ion-icon{
        font-size: 40px;
        color: #ffffff9b;
        background-color: #bdbdbd5c;
        border-radius: 5px;
    }
    
    .container-icone{
        position: absolute;
        display: flex;
        align-items: center;
        z-index: 3;
        top: 40%
    }

    .container-icone:hover{
        cursor: pointer;
    }
        
    .esquerda{
        left: 30px;
    }

    .direita{
        right: 30px;
    }


    h1{
        /* background-color: red; */
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        width: 100%;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    @media (max-width: 547px) {
        .esquerda{
            left: 15px;
        }
        .direita{
            right:15px;
        }
    }
`

const ContainerFotos = styled.div`
    display: flex;
    width: 100vw;
    overflow-x: scroll;
    overflow-y: hidden;
    position: relative;
    padding: 10px;
    
    img{
        padding: 10px;
        border-radius: 10px;
        width: 100%;
        height: auto;
        box-shadow: 0 0 5px;
    }
`