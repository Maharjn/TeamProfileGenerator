const Engineer = require("../src/employees/Engineer");

test("Can create a github.", () => {
    const testGithub = "MahaLakshmi";
    const employeeInstance = new Engineer(2, "MahaLakshmi@gmail.com","Maha",testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "MahaLakshmi";
    const employeeInstance = new Engineer(2, "MahaLakshmi@gmail.com","Maha" ,testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer(2, "MahaLakshmi@gmail.com", "MahaLakshmi","Maharjn");
    expect(employeeInstance.getRole()).toBe(returnValue);
});