import { assertLike } from '../src/assertLike';

describe('assertLike', () => {
  it('should match simple objects correctly', () => {
    const template = {
      name: ''
    };

    const testObj = {
      randomProp: 'random prop',
      otherProp: 'other prop',
      name: 'Test name'
    };

    expect(assertLike(template, testObj)).toBeTruthy();
  });

  it('should throw error when there is no match', () => {
    const template = {
      name: ''
    };

    const testObj = {
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
    const template = {
      user: {
        name: ''
      }
    };

    const testObj = {
      randomProp: 'random prop',
      otherProp: 'other prop',
      user: {
        name: 'Test Name'
      }
    };

    expect(assertLike(template, testObj)).toBeTruthy();
  });

  it('should match against deeper properties', () => {
    const template = {
      user: {
        name: ''
      }
    };

    const testObj = {
      randomProp: 'random prop',
      otherProp: 'other prop',
      name: 'Test Name'
    };

    expect(() => {
      assertLike(template, testObj);
    }).toThrow('Objects do not match at');
  });

  it('should match with non-empty template', () => {
    const template = {
      user: {
        name: 'very long user name that would normally throw'
      },
      randomProp: 'another very long property value',
      otherProp: 1223345566
    };

    const testObj = {
      randomProp: 'random prop',
      otherProp: 'other prop',
      user: {
        name: 'Test Name'
      }
    };

    expect(assertLike(template, testObj)).toBeTruthy();
  });

});
