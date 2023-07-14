const {ABiciesto} = require ( '../1-2.js');

test('Comprobar si el año es bisiesto', () => {
    expect(ABiciesto (2024)).toBe(true); 
    expect(ABiciesto (2021)).toBe(false);
    expect(ABiciesto (1984)).toBe(true); 
    expect(ABiciesto (2021)).toBe(false);
  });