import styled from "styled-components"
import {useEffect, useRef} from "react"

import Informacoes from "../Informacoes"



export default function Quarto({padrao, contador, setContador, elementoDeNavegacao}){
    const numeros = ['1', '2', '3', '4', '5', '6']

    function addReferencia(elemento){
        elementoDeNavegacao.current[padrao].push(elemento)
    }

    async function navegacao(valor){
        
        await setContador((prevContador)=>{
            const novoContador = {...prevContador, [padrao]: prevContador[padrao] + valor}
            if(novoContador[padrao] >= (numeros.length)){
                return {...prevContador, [padrao]: 0}
            }else if (novoContador[padrao] < 0){
                return {...prevContador, [padrao]: numeros.length-1} 
            }

            return novoContador
        })
        
        elementoDeNavegacao.current[padrao][contador[padrao]]
        .scrollIntoView({
            behavior: 'smooth', 
            block: "nearest",
            inline: 'start'
        })
    }

    
    return(

        <ContainerCategoria>
            <h1>Quarto {padrao}</h1>
            <div className="fotos">
                <div className="container-icone esquerda" onClick={()=>Navegacao(-1, padrao)}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </div>
                <div className="container-icone direita" onClick={()=>navegacao(1)}>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div> */}
                
                <ContainerFotos>
                    {numeros.map((numero, contador)=>(
                            <img 
                                id={`${padrao}${numero}`} 
                                ref={addReferencia}
                                key={contador} 
                                src={`./assets/${padrao}/${padrao}${numero}.jpg`} 
                                alt={`foto do ${padrao}`} />        
                        ))}
                </ContainerFotos>
            </div>

            <Informacoes padrao={padrao}>
            </Informacoes>
        </ContainerCategoria>
    )
}



const ContainerCategoria = styled.div`  
    box-shadow: 0px 1px 4px #0000007d;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 10px;
    ion-icon{
        font-size: 30px;
        color: #ffffff9b;
        background-color: #bdbdbd5c;
        border-radius: 50px;
    }
    
    .fotos{
        position: relative;
        overflow: hidden;
    }

    .container-icone{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3; 
        height: 100%;
        width: 40px;
    }

    .container-icone:hover{
        cursor: pointer;
    }
        
    .esquerda{
        left: 0px;
    }

    .direita{
        right: 0px;
    }


    h1{
        /* background-color: red; */
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        width: 100%;
        font-weight: 400;
        color: rgb(86 155 181);
    }

    @media (max-width: 547px) {
        .esquerda{
            left: 15px;
        }
        .direita{
            right:15px;
        }

        h1{
            font-size: 30px;
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
        box-shadow: 0 0 3px;
    }
`