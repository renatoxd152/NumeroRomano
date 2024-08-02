import { useState } from "react";
import '../App.css';

export const TelaConversor = () => {
    const [numero, setNumero] = useState("");
    const [resultado, setResultado] = useState("");
    const [modoRomano, setModoRomano] = useState(true);

    const converter = async () => {
        try {
            let response;
            if (modoRomano) {
                response = await fetch('http://localhost:4000/api/numeros/romanos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ numero: parseInt(numero) })
                });
            } else {
                response = await fetch('http://localhost:4000/api/numeros', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ numero })
                });
            }

            const data = await response.json();
            if (response.ok) {
                setResultado(modoRomano ? data.romano : data.numero);
            } else {
                setResultado(data.romano || data.numero);
            }
        } catch (error) {
            setResultado('Erro na conversão');
        }
    };

    const alternarModo = () => {
        setModoRomano(!modoRomano);
        setResultado("");
    };

    return (
        <>
            <div className="container">
                <h1>Conversor de Números Romanos</h1>
                <div className="input-container">
                    <p>{modoRomano ? "Número:" : "Número Romano:"}</p>
                    <input
                        type={modoRomano ? "number" : "text"}
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        placeholder={modoRomano ? "Digite um número" : "Digite um número romano"}
                        className="input-field"
                    />
                    <button onClick={converter} className="button">
                        {modoRomano ? "Converter para Romano" : "Converter para Número"}
                    </button>
                </div>
                <div className="mode-switch">
                    <button onClick={alternarModo} className="button">
                       Alternar
                    </button>
                </div>
                <div className="result-container">
                    <p>Resultado: {resultado}</p>
                </div>
            </div>
        </>
    );
};
