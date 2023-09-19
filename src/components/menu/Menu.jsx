import {AiOutlineMenu} from "react-icons/ai"
import {Link} from "react-scroll"
import ItemMenu from "./ItemMenu"

import "./menu.scss"

function mostrarMenu(){
    const lista = document.querySelector(".list-links")
    const listContainer = document.querySelector(".list")
    
    if(lista.style.display == "none"){
        lista.style.display = "flex"
        listContainer.style.display = "flex"
    } else {
        lista.style.display = "none"
        listContainer.style.display = "none"
    }
}

const Menu = () => {
    return (
        <header className="cabecalho">
            <div className="menu">
                <section>
                    <a href="#"><img src="./logo-branca.png"/></a>
                    <ul className="menu-links">
                        <ItemMenu text={"Home"}/>
                        <ItemMenu text={"Sobre"}/>
                        <ItemMenu text={"Serviços"}/>
                        <ItemMenu text={"Contatos"}/>
                    </ul>
                    <button onClick={mostrarMenu}>
                        <AiOutlineMenu className="icon"/>
                    </button>
                </section>

                <div className="list">
                    <img src="./logo.png" alt="" />
                    <ul className="list-links">
                        <ItemMenu text={"Home"}/>
                        <ItemMenu text={"Sobre"}/>
                        <ItemMenu text={"Serviços"}/>
                        <ItemMenu text={"Contatos"}/>
                    </ul>
                </div>
            
            </div>
        </header>
    )
}

export default Menu