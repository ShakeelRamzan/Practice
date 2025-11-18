// we usr property and methond one class to another class

class employe {
  constructor(name, age, salary) {
    this.empname = name;
    this.empage = age;
    this.empsalary = salary;
    console.log("constructor: Employee ");
  }
  info() {
    console.log(
      `Employe Name: ${this.empname} Age: ${this.empage} Salary: ${this.empsalary}`
    );
  }
}

class manager extends employe {
  info() {
    let ta = 1000;
    let pa = 300;
    let ttslry = this.empsalary + ta + pa;
    console.log(
      `Manager Name: ${this.empname} Age: ${this.empage} Salary: ${ttslry}`
    );
    // super.info();
  }
}
let a = new manager("Hassan", 25, 12000);
let b = new employe("Shakeel", 25, 12000);
a.info();
b.info();
