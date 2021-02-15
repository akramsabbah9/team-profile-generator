const Manager = require("../lib/Manager");

test("creates manager object", () => {
    const manager = new Manager("Smith", 1657, "testm@test.com", "777");

    expect(manager.name).toBe("Smith");
    expect(manager.id).toBe(1657);
    expect(manager.email).toBe("testm@test.com");
    expect(manager.officeNumber).toBe("777");
});

test("gets manager's name, ID, and email", () => {
    const manager = new Manager("Smith", 1657, "testm@test.com", "777");

    expect(manager.getName()).toBe("Smith");
    expect(manager.getId()).toBe(1657);
    expect(manager.getEmail()).toBe("testm@test.com");
});

test("gets manager's office number", () => {
    const manager = new Manager("Smith", 1657, "testm@test.com", "777");

    expect(manager.getOfficeNumber()).toBe("777");
});

test("gets manager's role", () => {
    const manager = new Manager("Smith", 1657, "testm@test.com", "777");

    expect(manager.getRole()).toBe("Manager");
});