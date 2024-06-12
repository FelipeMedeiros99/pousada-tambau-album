import styled from "styled-components"
import { LuRefrigerator } from "react-icons/lu";
import { FaWifi, FaShower, FaBed, FaUmbrellaBeach } from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";
import { FcFilingCabinet } from "react-icons/fc";
import { MdTableRestaurant } from "react-icons/md";
import {  } from "react-icons/fa";


export default function Informacoes({padrao}){
    
    if(padrao==="frente-mar"){
        return(
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
        )
    }else if(padrao === 'luxo'){
        return(
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
        )
    } else if(padrao === 'standard'){
        return(
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
        )
    }
}

const Ul = styled.ul`
    width: 30%;
    background-color: red;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    li{
        display: flex;
    }
`