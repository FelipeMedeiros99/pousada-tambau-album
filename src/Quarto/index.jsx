import styled from "styled-components"

export default function Quarto({padrao}){
    const numeros = ['1', '2', '3', '4', '5', '6']
    return(
        <Container>
            {numeros.map((numero)=>{
                return <img src={`./assets/${padrao}/${padrao}${numero}.jpg`} alt="" />
                
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 500px;
    overflow-x: scroll;
    img{
        width: 500px;
    }

`