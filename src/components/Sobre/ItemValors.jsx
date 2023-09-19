const ItemValors = ({valor, description}) => {
    return (
        <div className="card-valor">
            <h2>{valor}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ItemValors