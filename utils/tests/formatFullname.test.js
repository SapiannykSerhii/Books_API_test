const formatFullname = require('../formatFullname')
const expect = require('chai').expect

describe('FormatFullname', () => {

  it('TASK - should return an error if "fullName" arg lenght is 0', () => {

    expect(formatFullname()).to.equal('Error');
  });

  it('TASK - should return an error if "fullName" is not a string', () => {

    expect(formatFullname(undefined,20)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error')
    expect(formatFullname(function() {})).to.equal('Error')
  });

  it('TASK - should return error if "fullName" is not a <firstName> <lastName>' , () => {

    expect(formatFullname('John Doe Task')).to.equal('Error')
    expect(formatFullname('John')).to.equal ('Error')
  });

  it('TASK - should return correct name', () => {

    expect(formatFullname('jOhN dOe')).to.equal('John Doe')
    expect(formatFullname('john doe')).to.equal('John Doe')
    expect(formatFullname('JOHN DOE')).to.equal('John Doe')
  });

});