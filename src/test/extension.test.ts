import * as assert from 'assert';
import { removeComments } from '../extension';

suite('Remove Comments Function Test Suite', () => {
  // JavaScript/TypeScript Tests
  test('Remove single line comments from JavaScript', () => {
    const input = `const x = 1; // this is a comment\nlet y = 2; // another comment`;
    const expectedOutput = `const x = 1; \nlet y = 2; `;
    const output = removeComments(input, 'javascript');
    assert.strictEqual(output, expectedOutput);
  });

  test('Remove multi-line comments from JavaScript', () => {
    const input = `const x = 1; /* this is a \n multi-line comment */ let y = 2;`;
    const expectedOutput = `const x = 1;  let y = 2;`;
    const output = removeComments(input, 'javascript');
    assert.strictEqual(output, expectedOutput);
  });

  // Python Tests
  test('Remove single line comments from Python', () => {
    const input = `x = 1  # this is a comment\ny = 2  # another comment`;
    const expectedOutput = `x = 1  \ny = 2  `;
    const output = removeComments(input, 'python');
    assert.strictEqual(output, expectedOutput);
  });

  test('Remove multi-line comments from Python', () => {
    const input = `x = 1  ''' this is a \n multi-line comment '''\ny = 2`;
    const expectedOutput = `x = 1  \ny = 2`;
    const output = removeComments(input, 'python');
    assert.strictEqual(output, expectedOutput);
  });

  // CSS Tests
  test('Remove comments from CSS', () => {
    const input = `body { color: red; /* this is a comment */ }`;
    const expectedOutput = `body { color: red;  }`;
    const output = removeComments(input, 'css');
    assert.strictEqual(output, expectedOutput);
  });

  // C/C++ Tests
  test('Remove single line comments from C/C++', () => {
    const input = `int x = 1; // this is a comment\nint y = 2; // another comment`;
    const expectedOutput = `int x = 1; \nint y = 2; `;
    const output = removeComments(input, 'c');
    assert.strictEqual(output, expectedOutput);
  });

  test('Remove multi-line comments from C/C++', () => {
    const input = `int x = 1; /* this is a \n multi-line comment */ int y = 2;`;
    const expectedOutput = `int x = 1;  int y = 2;`;
    const output = removeComments(input, 'c');
    assert.strictEqual(output, expectedOutput);
  });

  // C# Tests
  test('Remove single line comments from C#', () => {
    const input = `int x = 1; // this is a comment\nint y = 2; // another comment`;
    const expectedOutput = `int x = 1; \nint y = 2; `;
    const output = removeComments(input, 'csharp');
    assert.strictEqual(output, expectedOutput);
  });

  test('Remove multi-line comments from C#', () => {
    const input = `int x = 1; /* this is a \n multi-line comment */ int y = 2;`;
    const expectedOutput = `int x = 1;  int y = 2;`;
    const output = removeComments(input, 'csharp');
    assert.strictEqual(output, expectedOutput);
  });

  // Java Tests
  test('Remove single line comments from Java', () => {
    const input = `int x = 1; // this is a comment\nint y = 2; // another comment`;
    const expectedOutput = `int x = 1; \nint y = 2; `;
    const output = removeComments(input, 'java');
    assert.strictEqual(output, expectedOutput);
  });

  test('Remove multi-line comments from Java', () => {
    const input = `int x = 1; /* this is a \n multi-line comment */ int y = 2;`;
    const expectedOutput = `int x = 1;  int y = 2;`;
    const output = removeComments(input, 'java');
    assert.strictEqual(output, expectedOutput);
  });

  // HTML Tests
  test('Remove comments from HTML', () => {
    const input = `<div><!-- this is a comment -->Hello</div>`;
    const expectedOutput = `<div>Hello</div>`;
    const output = removeComments(input, 'html');
    assert.strictEqual(output, expectedOutput);
  });

  // No Comments Test
  test('No comments in text', () => {
    const input = `const x = 1;\nlet y = 2;`;
    const expectedOutput = `const x = 1;\nlet y = 2;`;
    const output = removeComments(input, 'javascript');
    assert.strictEqual(output, expectedOutput);
  });
});
