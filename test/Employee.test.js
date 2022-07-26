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


test("Testing ID.", () => {
  const id = 2;
  const employeeInstance = new Employee(id,"maha@gmail.com","maha");
  expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
  const email = "test@gmail.com";
  const employeeInstance = new Employee(2,email,"Maha");
  expect(employeeInstance.email).toBe(email);
})




test("Can test email through getEmail method.", () => {
  const testEmail = "test@gmail.com";
  const employeeInstance = new Employee(2,testEmail,"Maha");
  expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee(2, "test@gmail.com","Maha");
  expect(employeeInstance.getRole()).toBe(returnValue);
})
