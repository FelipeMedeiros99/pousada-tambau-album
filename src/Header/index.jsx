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
    img{
        background-color: aqua;
    }
`