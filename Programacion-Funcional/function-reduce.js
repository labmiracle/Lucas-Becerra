const characters = [
    { name: 'Luke Skywalker', 
        height: '172', 
        mass: '77', 
        eye_color: 'blue', 
        gender: 'male' 
    },
    { name: 'Darth Vader', 
        height: '202', 
        mass: '136', 
        eye_color: 'yellow', 
        gender: 'male' 
    },
    { name: 'Leia Organa', 
        height: '150',
        mass: '49', 
        eye_color: 'brown', 
        gender: 'female' 
    },
    { name: 'Anakin Skywalker', 
        height: '188', 
        mass: '84', 
        eye_color: 'blue', 
        gender: 'male' 
    }
  ];

//Obtener masa total de los personajes

const totalMass = characters.reduce ((total, character) => total + parseInt(character.mass), 0);

console.log (totalMass);

//Obtener la altura total de todos los personajes

const totalHeight = characters.reduce((total, character) => total + parseInt(character.height), 0);

console.log(totalHeight);

//Obtener el número total de caracteres en todos los nombres de los personajes

const totalCharNames = characters.reduce((total,character) => total + character.name.length, 0);

console.log (totalCharNames);

//Obtener el número total de caracteres por color de ojos (pista: un mapa de color de ojos para contar)

const charactersByEyeColor = characters.reduce((accumulator, character) => {
    const eyeColor = character.eye_color;
    accumulator[eyeColor] = (accumulator[eyeColor] || 0) + character.name.length;
    return accumulator;
  }, {});
  
  console.log(charactersByEyeColor);