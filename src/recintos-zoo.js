class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        var animalEscolhido = animais[animal]
        var recintosDisponiveis = recintos

        for (const i in recintos) {
            const recinto = recintos[i];
            
            // Regra 1
            if (recinto.bioma in animalEscolhido.bioma && animalEscolhido.tamanho <= recinto.tamanhoDisponivel()) {
                recintosDisponiveis = recintos.filter((r) => r.bioma in animalEscolhido.bioma &&  animalEscolhido.tamanho <= r.tamanhoDisponivel())
                return recintosDisponiveis
            }
        }
        
        
    }

}

var recintos = [
    {
        numero: 1,
        bioma: "savana", 
        tamanhoTotal: 10,
        animaisExistentes: ['macaco', 'macaco', 'macaco'],
        tamanhoDisponivel: function () {
            return this.tamanhoTotal - this.animaisExistentes.length
        }
    },
    {
        numero: 2,
        bioma: "floresta", 
        tamanhoTotal: 5,
        animaisExistentes: [],
        tamanhoDisponivel: function () {
            return this.tamanhoTotal - this.animaisExistentes.length
        }
    },
    {
        numero: 3,
        bioma: "savana e rio", 
        tamanhoTotal: 7,
        animaisExistentes: ['gazela'],
        tamanhoDisponivel: function () {
            return this.tamanhoTotal - this.animaisExistentes.length
        }    
    },
    {
        numero: 4,
        bioma: "rio", 
        tamanhoTotal: 8,
        animaisExistentes: [],
        tamanhoDisponivel: function () {
            return this.tamanhoTotal - this.animaisExistentes.length
        }
    },
    {
        numero: 5,
        bioma: "savana",
        tamanhoTotal: 9,
        animaisExistentes: ['leao'],
        tamanhoDisponivel: function () {
            return this.tamanhoTotal - this.animaisExistentes.length
        }
    }
]

var animais = {
    LEAO: {
        tamanho: 3, 
        bioma: ["savana"],
    },
    LEOPARDO: {
        tamanho: 2, 
        bioma: ["savana"],
    },
    CROCODILO: {
        tamanho: 3, 
        bioma: ["rio"],
    },
    MACACO: {
        tamanho: 1, 
        bioma: ["savana", "floresta"],
    },
    GAZELA: {
        tamanho: 2, 
        bioma: ["savana"],
    },
    HIPOPOTAMO: {
        tamanho: 4, 
        bioma: ["savana", "rio"],
    },
}

export { RecintosZoo as RecintosZoo };
