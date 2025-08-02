import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <nav>
            <h2>Comercial Zenobia</h2>
            <ul>
                <li><Link to= "/" >Home</Link></li>
                <li><Link to = "" > Shop </Link></li>
                <li><Link to="" >Sobre Nosotros</Link>  </li>
                <li><Link to="">Contacto </Link> </li>
            </ul>
            <ul>
                <li>👤</li>
                <li>🔍</li>
                <li>💗</li>
                <li>🛒</li>
            </ul>
        </nav>
    )
};