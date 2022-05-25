import { Link } from "react-router-dom"

export default function Index(){
    return(
        <main>
            <h1> Home</h1>
            <ul>
                <li> <Link to='/CorPrimaria'> Cor Primaria </Link> </li>
                <li> <Link to='/Ingressos'> Ingressos </Link> </li>
                <li> <Link to='/MaiorNumero'> Maior Numero </Link> </li>
                <li> <Link to='/Frequencia'> Frequencia </Link> </li>
            </ul>
        </main>
    )

}