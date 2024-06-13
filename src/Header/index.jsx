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
    background-color: #96C5D7;
    width: 100vw;
    height: auto;
    max-height: 200px;
    img{
        width: 100%;
        max-width: 300px;

    }

    @media (max-width: 500px){
        img{
            max-width: 200px
        }
    }
`