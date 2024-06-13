import styled from "styled-components"
import { LuRefrigerator } from "react-icons/lu";
import { FaWifi, FaShower, FaBed, FaUmbrellaBeach } from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";
import { FcFilingCabinet } from "react-icons/fc";
import { MdTableRestaurant } from "react-icons/md";
import {  } from "react-icons/fa";





export default function Informacoes({padrao}){
    const descricao = {
        "standard": "Quarto de tamanho médio, conta com cama casal. Apartamento completo com ar-condicionado, frigobar, tv e chuveiro elétrico (não conta com vista mar).",
        
        "luxo": "Quarto de tamanho médio, cama casal grande. Apartamento completo com ar-condicionado, frigobar, tv smart, escrivaninha, guarda-roupa e chuveiro elétrico (não conta com vista mar).",
        
        "frente-mar": "Suíte de tamanho grande, com varada privativa, vista para o mar e cama casal extragrande. Apartamento completo com ar-condicionado, frigobar, tv smart, escrivaninha, guarda-roupa e chuveiro elétrico (conta com vista mar)"
    }

    if(padrao==="frente-mar"){
        return(
            <Descricoes>
                <p className="descricao">{descricao[padrao]}</p>
                <Ul>  
                    <li>
                        <FaBed/>
                        <p>Cama box</p>
                    </li>
                    <li>
                        <LuRefrigerator />
                        <p>Frigobar</p>
                    </li>
                    <li>
                        <FaWifi />
                        <p>Internet wi-fi</p>
                    </li>
                    <li>
                        <PiTelevisionSimple />
                        <p>TV 32"</p>
                    </li>
                    <li>
                        <FaShower />
                        <p>Chuveiro quente</p>
                    </li>      
                    <li>
                        <FcFilingCabinet />
                        <p>Guarda-roupa</p>
                    </li>
                    <li>
                        <MdTableRestaurant />
                        <p>Mesa de trabalho</p>
                    </li>
                    <li>
                        <FaUmbrellaBeach />
                        <p>Vista para o Mar</p>
                    </li>
                </Ul>
            </Descricoes>       
        )
    }else if(padrao === 'luxo'){
        return(
            <Descricoes >
                <p className="descricao">{descricao[padrao]}</p>
                <Ul>  
                    <li>
                        <FaBed/>
                        <p>Cama box</p>
                    </li>
                    <li>
                        <LuRefrigerator />
                        <p>Frigobar</p>
                    </li>
                    <li>
                        <FaWifi />
                        <p>Internet wi-fi</p>
                    </li>
                    <li>
                        <PiTelevisionSimple />
                        <p>TV 32"</p>
                    </li>
                    <li>
                        <FaShower />
                        <p>Chuveiro quente</p>
                    </li>      
                    <li>
                        <FcFilingCabinet />
                        <p>Guarda-roupa</p>
                    </li>
                    <li>
                        <MdTableRestaurant />
                        <p>Mesa de trabalho</p>
                    </li>
                </Ul>
            </Descricoes>
        )
    } else if(padrao === 'standard'){
        return(
            <Descricoes> 
                <p className="descricao">{descricao[padrao]}</p>
                <Ul>  
                    <li>
                        <FaBed/>
                        <p>Cama box</p>
                    </li>
                    <li>
                        <LuRefrigerator />
                        <p>Frigobar</p>
                    </li>
                    <li>
                        <FaWifi />
                        <p>Internet wi-fi</p>
                    </li>
                    <li>
                        <PiTelevisionSimple />
                        <p>TV 32"</p>
                    </li>
                    <li>
                        <FaShower />
                        <p>Chuveiro quente</p>
                    </li>      
                </Ul>
            </Descricoes>
            
        )
    }
}

const Descricoes = styled.div`
    padding: 20px 10px 0px 10px;

    .descricao{
        text-align: justify;
        /* font-style: italic; */
        margin-bottom: 30px;
    }


`

const Ul = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    li{
        display: flex;
    }
`

