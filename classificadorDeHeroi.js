let nomeDoHeroi = "Cleiton"
let xp = 4235
let ranque = "nenhum"

switch (true){
    case (xp < 1001):
    ranque = "ferro"
    break
   case (xp  <= 2000):
    ranque = "Bronze"
    break
    case (xp  < 5001):
    ranque = "Prata"
    break
   case (xp  < 7001):
    ranque = "Ouro"
    break
   case (xp  < 8001):
    ranque = "Platina"
    break
   case (xp  < 9001):
    ranque = "Ascendente"
    break
   case (xp  < 10001):
    ranque = "Imortal"
    break
   case (xp  >= 10001):
    ranque = "Radiante"
    break
}
console.log("O heroi " + nomeDoHeroi + " esta no ranque " + ranque + " , com " + xp + " pontos de XP")
