import styled from "styled-components"
import LogoTambau from "./../assets/imagens/posadatambau_white.png"


export default function Header(){
    return(
        <Cabecalho>
            <img src={LogoTambau} alt="Pousada Tambaú - logo" />
        </Cabecalho>
    )
}

const Cabecalho = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    width: 100vw;
    height: auto;
    img{
        width: 100%;
        max-width: 500px;
    }
`