import LogoTambau from "./../assets/imagens/posadatambau_white.png"

import "./index.css"

export default function Header(){
    return(
        <header>
            <img src={LogoTambau} alt="Pousada Tambaú - logo" />
        </header>
    )
}