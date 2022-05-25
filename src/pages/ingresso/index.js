import { useState } from 'react'

import axios from 'axios';

export default function Index() {
    const [qtdInteiras, setQtdInteiras] = useState(0);
    const [qtdMeia, setQtdMeia] = useState(0);
    const [diaSemana, setDiaSemana] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [total, setTotal] = useState(0);

    async function Calcular(){
        const resp = await axios.post('http://localhost:5000/dia2/ingressocinema', {
            qtdinteiras: qtdInteiras,
            qtdmeias: qtdMeia,
            diasemana: diaSemana,
            nacional: nacionalidade
        })

        setTotal(resp.data.total);
    }

    return(
        <main>
            <h1> Ingresso </h1>

            <div>
                Qtd. de Inteira: <input type="text" value={qtdInteiras} onChange={e => setQtdInteiras(Number(e.target.value))} />
            </div>
            
            <div>
                Qtd. de Meias: <input type="text" value={qtdMeia} onChange={e => setQtdMeia(Number(e.target.value))} />
            </div>
            
            <div>
                Dia da Semana: <input type="text" value={diaSemana} onChange={e => setDiaSemana(e.target.value)} />
            </div>
            
            <div>
                Nacionalidade : <input type="text" value={nacionalidade} onChange={e => setNacionalidade(e.target.value)} />
            </div>

            <div>
                <button onClick={Calcular}> Calcular:</button>
            </div>

            <div>
                o Total é R$ {total}
            </div>
        </main>
    )
}