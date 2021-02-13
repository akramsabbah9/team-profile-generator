const Manager = require("../lib/Manager");

test("create manager object", () => {
    const manager = ("Smith", "1657", "testm@test.com", "777");

    expect(manager.name).toBe("Smith");
    expect(manager.id).toBe("1657");
    expect(manager.email).toBe("testm@test.com");
    expect(manager.officeNumber).toBe("777");
});