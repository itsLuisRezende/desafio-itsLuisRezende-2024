class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        var animalEscolhido = animais[animal]

        if (!animalEscolhido) {
            return { erro: "Animal inválido" }
        }

        if (quantidade <= 0) {
            return { erro: "Quantidade inválida"}
        }

        var espacoNecessario = animalEscolhido.tamanho * quantidade
        var recintosDisponiveis = recintos
        var recintosViaveis = [] // Array com strings dos recintos viáveis seguindo esse modelo: "Recinto 1 (espaço livre: 5 total: 10)"

        for (const i in recintos) {
            const recinto = recintos[i];
            
            // Regra - o recinto inclui o bioma aceito pelo animal?
            if (!animalEscolhido.bioma.includes(recinto.bioma)) {
                continue; // Pular pro próximo recinto
            }

            // Regra - validar o epaço disponível neste recinto
            var espacoLivre = recinto.tamanhoDisponivel()

            if (espacoNecessario > espacoLivre) {
                continue; // Pular pro próximo recinto
            }

            // Regra - animais carnívoros só convivem com sua própria especie
            var temCarnivoro = false
            recinto.animaisExistentes.forEach(animalExistente => {
                if (animais[animalExistente].carnivoro) {
                    temCarnivoro = true; // Se encontrar um carnívoro, muda o valor para true
                }
            });

            if (animalEscolhido.carnivoro && temCarnivoro && !recinto.animaisExistentes.includes(animal)) {
                continue; // Pula se for carnívoro e o recinto tiver outras espécies
            }
            
            // Regra ...
            
            // Regra ...


            // Se passou em todas as verificações, o recinto é viável
            recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoLivre - espacoNecessario} total: ${recinto.tamanhoTotal})`);
        }

            //Se nao houver recintos viaveis (nao houver espaço no recinto para o animal/lote)
            if (recintosViaveis.length === 0) {
                return { erro: "Não há recinto viável" }
            }

        // Se tudo correu bem, retorna os recintos viaveis e retorna sem erros
        return {
            recintosViaveis: recintosViaveis,
            erro: false
        }
        
        
    }

}

function calculaTamanhoDisponivel(tamanhoTotal, animaisExistentes) {
    let espacoOcupado = 0
    animaisExistentes.forEach(animalExistente => {
        // Soma o tamanho de cada animal ao acumulador
        espacoOcupado += animais[animalExistente].tamanho;
    });
    
    let espacoDisponivel = tamanhoTotal - espacoOcupado
    return espacoDisponivel
}

var recintos = [
    {
        numero: 1,
        bioma: "savana", 
        tamanhoTotal: 10,
        animaisExistentes: ['MACACO', 'MACACO', 'MACACO'],
        tamanhoDisponivel: function () { return calculaTamanhoDisponivel(this.tamanhoTotal, this.animaisExistentes)}
    },
    {
        numero: 2,
        bioma: "floresta", 
        tamanhoTotal: 5,
        animaisExistentes: [],
        tamanhoDisponivel: function () { return calculaTamanhoDisponivel(this.tamanhoTotal, this.animaisExistentes)}
    },
    {
        numero: 3,
        bioma: "savana e rio", 
        tamanhoTotal: 7,
        animaisExistentes: ['GAZELA'],
        tamanhoDisponivel: function () { return calculaTamanhoDisponivel(this.tamanhoTotal, this.animaisExistentes)} 
    },
    {
        numero: 4,
        bioma: "rio", 
        tamanhoTotal: 8,
        animaisExistentes: [],
        tamanhoDisponivel: function () { return calculaTamanhoDisponivel(this.tamanhoTotal, this.animaisExistentes)}
    },
    {
        numero: 5,
        bioma: "savana",
        tamanhoTotal: 9,
        animaisExistentes: ['LEAO'],
        tamanhoDisponivel: function () { return calculaTamanhoDisponivel(this.tamanhoTotal, this.animaisExistentes)}
    }
]

var animais = {
    LEAO: {
        tamanho: 3, 
        bioma: ["savana"],
        carnivoro: true
    },
    LEOPARDO: {
        tamanho: 2, 
        bioma: ["savana"],
        carnivoro: true
    },
    CROCODILO: {
        tamanho: 3, 
        bioma: ["rio"],
        carnivoro: true
    },
    MACACO: {
        tamanho: 1, 
        bioma: ["savana", "floresta"],
        carnivoro: false
    },
    GAZELA: {
        tamanho: 2, 
        bioma: ["savana"],
        carnivoro: false
    },
    HIPOPOTAMO: {
        tamanho: 4, 
        bioma: ["savana e rio"],
        carnivoro: false
    },
}

export { RecintosZoo as RecintosZoo };

console.log(new RecintosZoo().analisaRecintos('MACACO', 2))