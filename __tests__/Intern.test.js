const Intern = require("../lib/Intern");

test("creates intern object", () => {
    const intern = new Intern("Timmy", "7599", "testi@test.com", "Fake School of Forgery");

    expect(intern.name).toBe("Timmy");
    expect(intern.id).toBe("7599");
    expect(intern.email).toBe("testi@test.com");
    expect(intern.school).toBe("Fake School of Forgery");
});

test("gets an intern's name, ID, and email", () => {
    const intern = new Intern("Timmy", "7599", "testi@test.com", "Fake School of Forgery");

    expect(intern.getName()).toBe("Timmy");
    expect(intern.getId()).toBe("7599");
    expect(intern.getEmail()).toBe("testi@test.com");
});

test("gets an intern's school", () => {
    const intern = new Intern("Timmy", "7599", "testi@test.com", "Fake School of Forgery");

    expect(intern.getSchool()).toBe("Fake School of Forgery");
});

test("gets an intern's role", () => {
    const intern = new Intern("Timmy", "7599", "testi@test.com", "Fake School of Forgery");

    expect(intern.getRole()).toBe("Intern");
});