import styled from "styled-components"

import Informacoes from "../Informacoes"



export default function Quarto({padrao, contador, setContador}){
    const numeros = ['1', '2', '3', '4', '5', '6']
    
    function Navegacao(valor, padrao){
        setContador((prevContador)=>{
            const novoContador = {...prevContador, [padrao]: prevContador[padrao] + valor}
            
            if(novoContador[padrao] >= (numeros.length)){
                return {...prevContador, [padrao]: 0}
            }else if (novoContador[padrao] < 0){
                return {...prevContador, [padrao]: numeros.length-1} 
            }

            return novoContador
        })
        
        document.getElementById(`${padrao}${numeros[contador[padrao]]}`).scrollIntoView({
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
                <div className="container-icone direita" onClick={()=>Navegacao(1, padrao)}>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>
                
                <ContainerFotos>
                    {numeros.map((numero, contador)=>(
                            <img id={`${padrao}${numero}`} key={contador} src={`./assets/${padrao}/${padrao}${numero}.jpg`} alt="" />        
                        ))}
                </ContainerFotos>
            </div>

            <Informacoes padrao={padrao}>
            </Informacoes>
        </ContainerCategoria>
    )
}



const ContainerCategoria = styled.div`  
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