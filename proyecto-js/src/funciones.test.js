const esMayorEdad = require('./funciones');

test('Debería retornar false para una edad de 17 (menor de edad)', () => {
    expect(esMayorEdad(17)).toBe(false);
});

test('Debería retornar true para una edad de 18 (valor en el límite)', () => {
    expect(esMayorEdad(18)).toBe(true);
});

test('Debería retornar true para una edad de 19 (mayor de edad)', () => {
    expect(esMayorEdad(19)).toBe(true);
});
