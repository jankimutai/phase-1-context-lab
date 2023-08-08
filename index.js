/* Your Code Here */
let employeeRecord = [];
function createEmployeeRecord (array){
   
  const employeeRecord = {
        firstName :array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
return employeeRecord;
}
function createEmployeeRecords(array){
    return array.map(createEmployeeRecord);
}
function createTimeInEvent(dateStamp){
  const [date , hour] = dateStamp.split(" ");
  this.timeInEvents.push({
    type:"TimeIn",
    hour:parseInt(hour,10),
    date: date,
  })
  return this;
}
function createTimeOutEvent(dateStamp){
    const [date , hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
      type:"TimeOut",
      hour:parseInt(hour,10),
      date: date,
    })
    return this;
}
function hoursWorkedOnDate(date){
    let timeIn =this.timeInEvents.find((event) => event.date === date);
    let timeOut= this.timeOutEvents.find((event) => event.date === date);
    let hoursWorked = ((timeOut.hour-timeIn.hour)/100);
    return hoursWorked;
}
function wagesEarnedOnDate(date){
    let hoursWorked = hoursWorkedOnDate.call(this ,date);
    let payOwed = ((this.payPerHour)* hoursWorked);
    return payOwed;
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function findEmployeeByFirstName(collection, firstNameString){
   return collection.find(function (employeeRecord){
    return employeeRecord.firstName === firstNameString
   });

}
function calculatePayroll(employeeRecord){
    const totalPayroll = employeeRecord.reduce((total, employee) => {
        return total + allWagesFor.call(employee);
    }, 0);
    return totalPayroll;
  

}
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

