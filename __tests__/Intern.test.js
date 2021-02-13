const Engineer = require("../lib/Engineer");

test("create intern object", () => {
    const intern = new Engineer("Timmy", "7599", "testi@test.com", "Fake School of Forgery");

    expect(intern.name).toBe("Timmy");
    expect(intern.id).toBe("7599");
    expect(intern.email).toBe("testi@test.com");
    expect(intern.school).toBe("Fake School of Forgery");
});