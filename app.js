let nombre = 'Emilio';
let semaforo = 'gris';

if(semaforo == 'rojo'){
    console.log(`${nombre}, no puedes pasar`)
} else if (semaforo == 'ambar'){
    console.log(`${nombre}, Cuidado ten precaucion`)
} else if (semaforo == 'verde'){
    console.log (`${nombre}, Adelante, puede pasar`)
} else console.log (`${nombre},Ese color, no es un color del semaforo`);

