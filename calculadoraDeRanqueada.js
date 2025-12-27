calcular (37, 73)

function calcular (derrotas, vitorias){
let xpDeRanque = vitorias - derrotas
let ranque = undefined

switch (true){
    case (xpDeRanque < 10):
    ranque = "ferro"
    break
   case (xpDeRanque  <= 11):
    ranque = "Bronze"
    break
    case (xpDeRanque  < 21):
    ranque = "Prata"
    break
   case (xpDeRanque  < 51):
    ranque = "Ouro"
    break
   case (xpDeRanque  < 81):
    ranque = "diamante"
    break
   case (xpDeRanque  < 91):
    ranque = "lendario"
    break
   case (xpDeRanque  >= 101):
    ranque = "Imortal"
    break
}
console.log("Você esta no ranque " + ranque + ".")
console.log("Agora vai jogar contra pessoas do mesmo ranque que o seu.")
}
