function test(rex, bob, oli) {
    // Calcula a distancia de cada cachorro ate o gato
    const rexDistance = Math.abs(oli - rex);
    const bobDistance = Math.abs(oli - bob);
  
    // Compara as distancias
    if (rexDistance < bobDistance) {
      return "Rex"; // Retorna "Rex" se a distancia de Rex for menor que a distancia de Bob
    } else if (bobDistance < rexDistance) {
      return "Bob"; // Retorna "Bob" se a distancia de Bob for menor que a distancia de Rex
    } else {
      // Se as distancias forem iguais, verifica se algum cachorro esta na mesma posição do gato
      if (rex === oli || bob === oli) {
        return rex === oli ? "Rex" : "Bob"; // Retorna "Rex" se Rex estiver na mesma posição do gato, caso contrario, retorna "Bob"
      } else {
        return "Oli"; // Retorna "Oli" se nenhum cachorro estiver na mesma posição do gato
      }
    }
  }

console.log(test(2, 4, 6)); // -R-B-O [Bob Ganha]
console.log(test(3, 10, 6)); // --R--O---B [Rex Ganha]
console.log(test(4, 8, 6)); // ---R-O-B [Olie escapa]
