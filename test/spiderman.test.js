const spiderman = require("./../app/spiderman");

// prueba erronea
describe("Unit Test for spiderman class", () => {
        test('Case 1: creating an object for the class', () => {
            //   codigo a utilizar para comprobar su estado
            const Andrew = new spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
                // Validaciones que se esperan
            expect(Andrew.name).toBe("Spiderman Sony");
            expect(Andrew.age).toBe(31);
            expect(Andrew.actor).toBe("Andrew Garfield");
            expect(Andrew.movies).toBe(4);
            expect(Andrew.studio).toBe("Sony");
        });
    })
    // prueba correcta
    // describe("Test Suite Dummy Description", () => {
    //     test('Case 1 Dummy', () => {
    //         const resultOfSomething = 1 + 2
    //         expect(resultOfSomething).toBe(3);
    //     });
    // })