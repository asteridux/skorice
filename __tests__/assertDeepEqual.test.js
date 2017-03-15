import { assertDeepEqual } from '../src/assertDeepEqual';

describe('assertDeepEqual', () => {
  it('should correctly compare two objects', () => {
    var obj = {
      name: '1',
      foo: 'bar'
    };

    var obj2 = {
      name: '1',
      foo: 'bar'
    };

    expect(assertDeepEqual(obj, obj2)).toBeTruthy();
  });
});
