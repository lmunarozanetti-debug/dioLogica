class Heroi {
     constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
      
      switch (tipo) {
         case "mago":
            this.ataque = "magia"
            break
         case "ninja":
            this.ataque = "shuriken"
            break
         case "clerigo":
            this.ataque = "espantar mortos vivos"
            break
         case "guerreiro":
            this.ataque = "espada"
            break
      }
      }
      }
      let personagem = new Heroi("Cleiton" , "13" , "mago")
      console.log("O personagem " + personagem.nome + " atacou com " + personagem.ataque + "." )
