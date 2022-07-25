const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "MahaLakshmi";
    const employeeInstance = new Engineer("Maha", 2, "MahaLakshmi@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "MahaLakshmi";
    const employeeInstance = new Engineer("Maha", 2, "MahaLakshmi@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Maha", 2, "MahaLakshmi@gmail.com", "MahaLakshmi");
    expect(employeeInstance.getRole()).toBe(returnValue);
});