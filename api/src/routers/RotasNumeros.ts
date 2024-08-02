import express from 'express';
import NumeroRomano from '../models/ConverterRomano';
const numeros = express.Router()

numeros.post('/numeros/romanos', (req, res) => {
    const { numero } = req.body;
    if (numero > 3999 || numero < 1) {
        return res.status(404).json({romano:"Número inválido"});
    }
    
    const numeroRomano = new NumeroRomano(numero);
    const resultado = numeroRomano.converterNumero();
    res.status(200).json({romano: resultado});
});


numeros.post('/numeros', (req, res) => {
    const { numero } = req.body;
    
    const numeroRomano = new NumeroRomano(numero);
    const resultado = numeroRomano.converterParaNumero()
    res.status(200).json({numero: resultado});
});

export default numeros;
