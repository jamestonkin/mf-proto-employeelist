'use strict';

var Employee = function() {
  this.firstName = null;
  this.lastName = null;
};

var Clinician = function(expertise) {
    this.expertise = null;
};

Clinician.prototype = new Employee();

var Operations = function(responsibility) {
  this.responsibility = null;
};

Operations.prototype = new Employee();

var Department = function() {
  this.deptName = null;

};

var FieldOffice = function(city) {
 this.city = null;
};

FieldOffice.prototype = new Department();

var Headquarters = function() {
 this.hq = 'Nashville HQ';
};

Headquarters.prototype = new Department();


let emp0001Job = new Clinician('physical therapist');
let emp0001Loc = new FieldOffice('Murfreesboro');

let emp0001 = new Employee();
