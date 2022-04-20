const spiderman = require("./../app/spiderman");

// prueba 1
describe("Unit Test for spiderman class", () => {
        test('Case 1: creating an object for the class', () => {
            //   codigo a utilizar para comprobar su estado
            const Andrew = new spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
                // Validaciones que se esperan
            expect(Andrew.name).toBe("Spiderman Sony");
            expect(Andrew.age).toBe(31);
            expect(Andrew.actor).toBe("Andrew Garfield");
            expect(Andrew.movies).toBe(2);
            expect(Andrew.studio).toBe("Sony");
        });
    })
    // prueba 2
describe("Unit Test for spiderman Tom Holland", () => {
    test('Case 2: Getting info about spiderman', () => {
        //   codigo a utilizar para comprobar su estado
        const Holland = new spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
            // Validaciones que se esperan
        expect(Holland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio");
    });
})