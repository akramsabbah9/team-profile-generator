const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Benjamin", 940, "test@test.com");

    expect(employee.name).toBe("Benjamin");
    expect(employee.id).toBe(940);
    expect(employee.email).toBe("test@test.com");
});

test("gets employee's name", () => {
    const employee = new Employee("Benjamin", 940, "test@test.com");

    expect(employee.getName()).toBe("Benjamin");
});

test("gets employee's ID", () => {
    const employee = new Employee("Benjamin", 940, "test@test.com");

    expect(employee.getId()).toBe(940);
});

test("gets employee's email", () => {
    const employee = new Employee("Benjamin", 940, "test@test.com");

    expect(employee.getEmail()).toBe("test@test.com");
});

test("employee's role is 'employee'", () => {
    const employee = new Employee("Benjamin", 940, "test@test.com");

    expect(employee.getRole()).toBe("Employee");
});