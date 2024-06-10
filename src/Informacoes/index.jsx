import styled from "styled-components"
import { LuRefrigerator } from "react-icons/lu";
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";

export default function Informacoes({padrao}){
    
    if(padrao==="frente-mar"){
        return(
            <Ul>  
                <li>
                    <ion-icon name="bed-outline"></ion-icon> 
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
                    <p>Chuveiro quente</p>
                </li>      
                <li>
                    <p>Guarda-roupa</p>
                </li>
                <li>
                    <p>Mesa de trabalho</p>
                </li>
                <li>
                    <p>Vista para o Mar</p>
                </li>
            </Ul>
        )
    }
}

const Ul = styled.ul`
    li{
        display: flex;
    }
    
`