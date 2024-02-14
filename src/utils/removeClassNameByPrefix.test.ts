import { removeClassNameByPrefix } from './addRemoveSlash';

describe('removeClassNameByPrefix function', () => {
  let element: HTMLElement;

  beforeEach(() => {
    // Create a new HTMLElement before each test
    element = document.createElement('div');
  });

  test('should remove the class that matches the given prefix from the element', () => {
    // Add classes to the element
    element.className = 'prefixClass anotherClass';

    // Call our function to remove className that starts with prefix
    removeClassNameByPrefix(element, 'prefix');

    // Now, the element className should only contain 'anotherClass'
    expect(element.className).toBe('anotherClass');
  });

  test('should return the same element if no class matched the prefix', () => {
    element.className = 'testClass anotherClass';
    
    removeClassNameByPrefix(element, 'prefix');

    expect(element.className).toBe('testClass anotherClass');
  });

  test('should return the same element if it has no class', () => {
    removeClassNameByPrefix(element, 'prefix');

    expect(element.className).toBe('');
  });
});