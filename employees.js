var Employee = function() {
this.firstName = "";
this.lastName = "";
this.department = "";
this.role = "";
}

var Clinician = function() {
this.areaOfExpertise = "";
this.department = "clinician";
}

var Operations = function() {
this.areaOfResponsibility = "";
this.department = "operations specialist";
}

Clinician.prototype = new Employee();

Operations.prototype = new Employee();

var Department = function () {
this.name = "";
}

var FieldOffice = function() {
this.location = "";
}

var Headquarters = function() {
this.location = "";
}

FieldOffice.prototype = new Department();
Headquarters.prototype = new Department();

var Employee01 = new Employee();
Employee01.firstName = 'Beverly'
Employee01.lastName = 'Farr'
var Expertise01 = new Clinician();
Expertise01.areaOfExpertise = 'physical therapy'
Employee01.department = Expertise01.department;
Employee01.role = Expertise01.areaOfExpertise;
Employee01.location = "Baltimore Field Office"

console.log(Employee01.firstName + " " + Employee01.lastName + " is a " + Employee01.department + " specializing in " + Employee01.role + ", located in the " + Employee01.location + ".")


var Employee02 = new Employee();
Employee02.firstName = 'Jack';
Employee02.lastName = 'Cunningham';
var Expertise02 = new Clinician();
Expertise02.areaOfExpertise = 'occupational therapy';
Employee02.department = Expertise02.department;
Employee02.role = Expertise02.areaOfExpertise;
Employee02.location = "Nashville Field Office";

console.log(Employee02.firstName + " " + Employee02.lastName + " is a " + Employee02.department + " specializing in " + Employee02.role + ", located in the " + Employee02.location + ".")


var Employee03 = new Employee();
Employee03.firstName = 'Mona';
Employee03.lastName = 'Shahgoli';
var Expertise03 = new Operations();
Expertise03.areaOfResponsibility = 'project management';
Employee03.department = Expertise03.department;
Employee03.role = Expertise03.areaOfResponsibility;
Employee03.location = "Pittsburgh headquarters";

console.log(Employee03.firstName + " " + Employee03.lastName + " is an " + Employee03.department + ", specializing in " + Employee03.role + ", located in the " + Employee03.location + ".")



var Employee04 = new Employee();
Employee04.firstName = 'Chris';
Employee04.lastName = 'Watkins';
var Expertise04 = new Operations();
Expertise04.areaOfResponsibility = 'network security';
Employee04.department = Expertise04.department;
Employee04.role = Expertise04.areaOfResponsibility;
Employee04.location = "Pittsburgh headquarters";

console.log(Employee04.firstName + " " + Employee04.lastName + " is an " + Employee04.department + ", specializing in " + Employee04.role + ", located in the " + Employee04.location + ".")





