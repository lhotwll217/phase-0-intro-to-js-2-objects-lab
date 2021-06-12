const employee = { name: 'Paul Moody', streetAddres: '1 Main Street' };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeUpdate = Object.assign({}, employee, { [key]: value });

    return employeeUpdate;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeUpdate2 = Object.assign(employee, { [key]: value });
    return employeeUpdate2;
}

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee3 = Object.assign({}, employee);

    delete updatedEmployee3.[key];

    return updatedEmployee3;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.[key];
    return employee;
}