import express from 'express';
import NumeroRomano from '../models/ConverterRomano';

const numeros = express.Router();

numeros.post('/numeros/romanos', async (req, res) => {
    try {
        const { numero } = req.body;
        if (numero > 3999 || numero < 1) {
            return res.status(400).json({ romano: "Número inválido" });
        }

        const numeroRomano = new NumeroRomano(numero);
        const resultado = numeroRomano.converterNumero();
        res.status(200).json({ romano: resultado });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
});

numeros.post('/numeros', async (req, res) => {
    try {
        const { numero } = req.body;

        const numeroRomano = new NumeroRomano(numero);
        const resultado = numeroRomano.converterParaNumero();
        res.status(200).json({ numero: resultado });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
});

export default numeros;
