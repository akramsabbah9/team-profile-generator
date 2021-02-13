const Engineer = require("../lib/Engineer");

test("create engineer object", () => {
    const manager = new Engineer("John", "4437", "teste@test.com", "john3ngineer");

    expect(manager.name).toBe("John");
    expect(manager.id).toBe("4437");
    expect(manager.email).toBe("teste@test.com");
    expect(manager.github).toBe("john3ngineer");
});