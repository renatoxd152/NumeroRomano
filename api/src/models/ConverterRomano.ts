class NumeroRomano {
    numero: string;

    constructor(param: string) {
        this.numero = param;
    }

    static romanoValores: { letra: string, valor: number }[] = [
        { letra: "M", valor: 1000 }, { letra: "CM", valor: 900 }, { letra: "D", valor: 500 }, { letra: "CD", valor: 400 },
        { letra: "C", valor: 100 }, { letra: "XC", valor: 90 }, { letra: "L", valor: 50 }, { letra: "XL", valor: 40 },
        { letra: "X", valor: 10 }, { letra: "IX", valor: 9 }, { letra: "V", valor: 5 }, { letra: "IV", valor: 4 },
        { letra: "I", valor: 1 }
    ];

    converterNumero(): string {
        let numeroInt = parseInt(this.numero);
        let stringRomano = '';

        for (let i = 0; i < NumeroRomano.romanoValores.length; i++) {
            while (numeroInt >= NumeroRomano.romanoValores[i].valor) {
                stringRomano += NumeroRomano.romanoValores[i].letra;
                numeroInt -= NumeroRomano.romanoValores[i].valor;
            }
        }

        return stringRomano;
    }

    converterParaNumero(): number {
        let numero = 0;
        const romanNum = this.numero.toUpperCase();

        for (let i = 0; i < romanNum.length; i++) {
            const current = NumeroRomano.romanoValores.find(item => item.letra === romanNum[i])?.valor || 0;
            const next = NumeroRomano.romanoValores.find(item => item.letra === romanNum[i + 1])?.valor || 0;

            if (next && current < next) {
                numero += next - current;
                i++;
            } else {
                numero += current;
            }
        }

        return numero;
    }
}

export default NumeroRomano;
