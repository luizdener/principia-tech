import "./servicos.scss"

const Servicos = () => {
    return (
        <div className="servicos" id="Serviços">
            <h1>Nossos serviços</h1>
            <div>
                <h2>Projetos <strong>elétricos</strong></h2>
                <p>Elaboramos seu projeto de instalação elétrica conforme as normas vigentes onde realizamos todo o dimensionamento dos componetes elétricos, entregamos a lista completa com materiais, memorial descritivo e especificações técnicas.
                </p>
                <p>O projeto é importe para garantir uma melhor distribuição de energia e consequentemente prover menor consumo, além de reduzir o risco de falhas que coloquem os residentes em risco!</p>

                <h2><strong>Automações</strong> residenciais</h2>
                <p>Para você que deseja ter mais conforto e a praticidade na sua residência, o processo de automação residencial permite que equipamentos e iluminações sejam controlados por meio de aplicativos em seu smartphone ou até mesmo através de gestos. </p>

                <h2>Manutenção <strong>elétrica</strong></h2>
                <p>Realizamos serviços de manutenção preventiva e corretiva em instalações e equipamentos, reduzindo ou sanando riscos de falhas e garantindo mais segurnaça a nossos clientes!</p>
            </div>
        </div>
    )
}

export default Servicos