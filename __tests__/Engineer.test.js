const Engineer = require("../lib/Engineer");

test("creates engineer object", () => {
    const engineer = new Engineer("John", 4437, "teste@test.com", "john3ngineer");

    expect(engineer.name).toBe("John");
    expect(engineer.id).toBe(4437);
    expect(engineer.email).toBe("teste@test.com");
    expect(engineer.github).toBe("john3ngineer");
});

test("gets engineer's name, ID, and email", () => {
    const engineer = new Engineer("John", 4437, "teste@test.com", "john3ngineer");

    expect(engineer.getName()).toBe("John");
    expect(engineer.getId()).toBe(4437);
    expect(engineer.getEmail()).toBe("teste@test.com");
});

test("get engineer's GitHub username", () => {
    const engineer = new Engineer("John", 4437, "teste@test.com", "john3ngineer");

    expect(engineer.getGithub()).toBe("john3ngineer");
});

test("get engineer's role", () => {
    const engineer = new Engineer("John", 4437, "teste@test.com", "john3ngineer");

    expect(engineer.getRole()).toBe("Engineer");
});