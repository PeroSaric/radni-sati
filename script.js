function main() {

  function baseSalary() {
    let hourlyRate = parseInt(document.getElementById("hourlyRate").value);
    let wHours = parseInt(document.getElementById("wHours").value);
    let sum = hourlyRate * wHours;
    return document.getElementById("paraBaseSalary").innerText = "Your base salary is:" + sum;
  }
  baseSalary();


  function overtimeSalary() {
    let overtime = parseInt(document.getElementById("overtimeSalary").value);
    let hourlyRate = parseInt(document.getElementById("hourlyRate").value);
    let overtimeHourlyRate = hourlyRate * (25 / 100);
    let sumOvertimeSalary = (overtimeHourlyRate * overtime) + (hourlyRate * overtime); 
    return document.getElementById("paraOvertimeSalary").innerText = "Your ovetime salary is: " + sumOvertimeSalary;
  }
  overtimeSalary();


  function travelExpenses() {
    let numberOfWorkingDays = parseInt(document.getElementById("numberOfWorkingDays").value);
    let travelExpPerDay = parseInt(document.getElementById("travelExpPerDay").value);
    let sumOfTravelExp = numberOfWorkingDays * travelExpPerDay; 
    return document.getElementById("paraTravelExpences").innerText = "Your travel expences are: " + sumOfTravelExp;  
  }
  travelExpenses();


  function totalSalary() {
    let baseSalary = baseSalary();
    let overtimeSalary = overtimeSalary();
    let travelExpences = travelExpenses();
    let totalSum = baseSalary + overtimeSalary + travelExpences;
    return document.getElementById("paraTotalSum").innerText = "Your total salary is: " + totalSum;
  }
  totalSalary();
  
}

