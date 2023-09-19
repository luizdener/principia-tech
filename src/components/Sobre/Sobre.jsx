import ItemValors from "./ItemValors"

import "./sobre.scss"

const Sobre = () => {
    return (
        <div className="sobre" id="Sobre">
            <h1>Sobre nós</h1>

            <p>Somos uma empresa especializada em automações, manutenções e instalações elétricas prediais! Nosso objetivo é entregar um serviço de qualidade visando a segurança e satisfação de nossos clientes, para isso contamos com uma equipe de 10 funcinários qualificados e capacitados!</p>

            <section className="valors">
                <ItemValors valor={"Seriedade"} description={"Sempre realizamos nossos serviços visando o conforto e satisfação dos nossos clientes"}/>
                <ItemValors valor={"Compromisso"} description={"Além da ótima qualidade do serviço, somos pontuais em nossos prazos!"} />
                <ItemValors valor={"Segurança"} description={"Nossos serviços são executados visando sempre a segurança de nossos clientes e colaboradores"} />
            </section>
        </div>
    )
}

export default Sobre