const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Benjamin", "0940", "test@test.com");

    expect(employee.name).toBe("Benjamin");
    expect(employee.id).toBe("0940");
    expect(employee.email).toBe("test@test.com");
});