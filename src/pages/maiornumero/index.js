
import { useState } from 'react'

import axios from 'axios';

export default function Index() {
    const [numeros, setNumeros] = useState([]);
    const [numero, setNumero] = useState(0);
    const [resposta, setResposta] = useState('');

    function adicionar () {
        setNumeros([...numeros, numero])
        setNumero('');
    }

    async function verificarMaior(){
        const resp = await axios.post('http://localhost:5000/dia2/maiorNumero', numeros);
        setResposta(resp.data.maior)
    }

    return(
        <main>
            <h1> Maior Numero </h1>

            <div>
                Numero :<input type='text' value={numero} onChange={e => setNumero(Number(e.target.value))} />
                <button onClick={adicionar}> Adicionar Numero</button>
            </div>
                {numeros.map(item =>
                    <div> {item} </div>
                )}
            <div>
                <button onClick={verificarMaior} >Verificar</button> Maior Numero é {resposta}
            </div>
        </main>

        
    )
}