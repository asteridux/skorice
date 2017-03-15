import { assertLike } from '../src/assertLike';

describe('assertLike', () => {
  it('should match simple objects correctly', () => {
    var template = {
      name: ''
    };

    var testObj = {
      randomProp: 'random prop',
      otherProp: 'other prop',
      name: 'Test name'
    };

    expect(assertLike(template, testObj)).toBeTruthy();
  });

  it('should throw error when there is no match', () => {
    var template = {
      name: ''
    };

    var testObj = {
      randomProp: 'random prop',
      otherProp: 'other prop',
      user: {
        name: 'Test name'
      }
    };

    expect(() => {
      assertLike(template, testObj, (str) => console.log(str));
    }).toThrow('');
  });

  it('should match against deeper properties', () => {
    var template = {
      user: {
        name: ''
      }
    };

    var testObj = {
      randomProp: 'random prop',
      otherProp: 'other prop',
      user: {
        name: 'Test Name'
      }
    };

    expect(assertLike(template, testObj)).toBeTruthy();
  });

  it('should match against deeper properties', () => {
    var template = {
      user: {
        name: ''
      }
    };

    var testObj = {
      randomProp: 'random prop',
      otherProp: 'other prop',
      name: 'Test Name'
    };

    expect(() => {
      assertLike(template, testObj);
    }).toThrow('Objects do not match at');
  });

});
