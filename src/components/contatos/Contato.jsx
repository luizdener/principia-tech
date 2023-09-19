import {AiOutlineWhatsApp} from "react-icons/ai"
import {FiMail} from "react-icons/fi"

import "./contatos.scss"

const Contatos = () => {
    return (
        <div className="contatos" id="Contatos">
            <h1>Contatos</h1>

            <section>
                    <p><AiOutlineWhatsApp/> Whatsapp Comercial: 75 99196-3484</p>
                    <p><AiOutlineWhatsApp/> Whatsapp Técnico: 75 98819-8742</p>
                    <p><FiMail/> Email: principiatech.eletric@gmail.com</p>
                    <p className="links">
                        <a href="https://wa.me/5575991963484?text=Ola%20gostaria%20de%20adquirir%20seus%20serviços" target="_blank">Envie-nos uma mensagem</a>
                        <a href="mailto:principiatech.eletric@gmail.com">Envie-nos um email</a>
                    </p>
            </section>

            <section className="logo">
                <img src="./logo-branca.png" alt="logo principia tech" />
            </section>
        </div>
    )
}

export default Contatos