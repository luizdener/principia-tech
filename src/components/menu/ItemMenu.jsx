import {Link} from "react-scroll"

const ItemMenu = ({text}) => {
    return (
        <li>
            <Link to={text} spy={true} smooth={true} offset={20} duration={150}>{text}</Link>
        </li>
    )
}

export default ItemMenu