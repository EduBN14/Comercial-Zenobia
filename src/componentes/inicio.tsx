import { Link } from "react-router-dom"
import { Header } from "./header"

export const Inicio = () => {
    return (
        <>
        <Header/>
        <section>
            <div>
                <h2>Descubre Nuestros Productos </h2>
                <p>Colchones, Tarimas, Baules, y mas descuble aqui</p>
                <button><Link to="">Compra tu sueño</Link></button>
            </div>
        </section>
        <section>
            <article>  
                <h1>Secciones en tu cuarto</h1>
                <p>Elije que seccion de tu cuarto desea renovar hoy</p>
            </article>
            <article>
                
            </article>
        </section>
        </>
    )
} 