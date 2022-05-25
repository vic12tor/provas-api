import { useState } from 'react'

import axios from 'axios'

export default function Index() {

    const [text, setTexto] = useState('');
    const [caractere, setCaractere] = useState('');
    const [resposta, setResposta] = useState('');

    async function verificarFrequencia(){
        const resp = await axios.get(`http://localhost:5000/dia2/caracter/${text}/${caractere}`);
        setResposta(resp.data.freq)
    }

    return(
        <main>
            <h1> Frequencia </h1>

            <div>
                Texto : <input type='text' value={text} onChange={e => setTexto(e.target.value)} />
            </div>

            <div>
                Caractere : <input type='text' value={caractere} onChange={e => setCaractere(e.target.value)} />
            </div>

            <div>
                <button onClick={(verificarFrequencia)}> Verificar Frequencia </button>
            </div>

            <div>
                Frequencia: {resposta}
            </div>
        </main>
    )
}