const Intern =  require("../src/employees/Intern");

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern(2, "test@gmail.com","Maha" ,testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern(2, "test@gmail.com","Maha" ,testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern(2, "test@gmail.com","Maha" ,"Test School name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});