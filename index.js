// Write your solution in this file!

const employee = {name: ["David", "Sam"], address: "Richmond"};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const erase = { ...employee } 
    delete erase[key]
    return erase
}


function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key], value
    return employee
}

  
  
    

