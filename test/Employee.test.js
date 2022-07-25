const Employee = require("../src/employees/Employee")


describe("Employee Test", () => {




  test("getName() will return the name property", () => {

    // Arrange -- prepare the env
    const name = 'Maha';

    const dummy = new Employee(1, 'test@gmail.com', name);

    // act
    const result =dummy.getName();


    // assert
    expect(result).toStrictEqual(name);

  });




})

test("Can create an new employee.", () => {
  const employeeInstance = new Employee();
  expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
  const name = "Maha";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
  const id = 2;
  const employeeInstance = new Employee("Maha", id);
  expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
  const email = "test@gmail.com";
  const employeeInstance = new Employee("Maha", 2, email);
  expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
  const testName = "Maha";
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
  const testID = 2;
  const employeeInstance = new Employee("MAha", testID);
  expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
  const testEmail = "test@gmail.com";
  const employeeInstance = new Employee("Maha", 2, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee("Maha", 2, "test@gmail.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
})
