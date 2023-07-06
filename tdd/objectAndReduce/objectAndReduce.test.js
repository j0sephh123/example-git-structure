const {
  basicReduce,
  reduceWithInitialValue,
  findMinUsingReduce,
  flattenArrayUsingReduce,
  countOccurrencesUsingReduce,
  concatenateStringsUsingReduce,
  productOfArrayUsingReduce,
  groupByPropertyUsingReduce,
  arrayToObjectUsingReduce,
  convertKeysToArray,
  convertValuesToArray,
  convertEntriesToArray,
  createStringArrayFromEntries,
  filterEvenAndConvertToArray,
  swapKeysAndValues,
  mergeObjectsImmutably,
  findKeysWithSpecificValue,
  countProperties,
  filterObject,
} = require("./objectAndReduce.js");

describe("reduce", () => {
  test("basic reduce operation", () => {
    const result = basicReduce([1, 2, 3, 4, 5]);
    expect(result).toBe(15);
  });

  test("reduce with initial value", () => {
    const result = reduceWithInitialValue([1, 2, 3, 4, 5], 10);
    expect(result).toBe(25);
  });

  test("finds the minimum number in an array", () => {
    const result = findMinUsingReduce([5, 12, 3, 7, 10]);
    expect(result).toBe(3);
  });

  test("flattens a 2D array", () => {
    const result = flattenArrayUsingReduce([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("counts occurrence of each element in an array", () => {
    const result = countOccurrencesUsingReduce([
      "apple",
      "banana",
      "apple",
      "orange",
      "banana",
      "banana",
    ]);
    expect(result).toEqual({ apple: 2, banana: 3, orange: 1 });
  });

  test("concatenates strings in an array", () => {
    const result = concatenateStringsUsingReduce(["Hello", "World", "!"]);
    expect(result).toBe("HelloWorld!");
  });

  test("calculates product of an array elements", () => {
    const result = productOfArrayUsingReduce([1, 2, 3, 4, 5]);
    expect(result).toBe(120);
  });

  test("groups objects by a property", () => {
    const data = [
      { name: "Alice", age: 20 },
      { name: "Bob", age: 20 },
      { name: "Charlie", age: 30 },
    ];
    const result = groupByPropertyUsingReduce(data, "age");
    expect(result).toEqual({
      20: [
        { name: "Alice", age: 20 },
        { name: "Bob", age: 20 },
      ],
      30: [{ name: "Charlie", age: 30 }],
    });
  });

  test("transforms array into an object", () => {
    const data = ["Alice", "Bob", "Charlie"];
    const result = arrayToObjectUsingReduce(data);
    expect(result).toEqual({ 0: "Alice", 1: "Bob", 2: "Charlie" });
  });
});

describe("object", () => {
  test("converts object keys to an array", () => {
    const data = { a: 1, b: 2, c: 3 };
    const result = convertKeysToArray(data);
    expect(result).toEqual(["a", "b", "c"]);
  });

  test("converts object values to an array", () => {
    const data = { a: 1, b: 2, c: 3 };
    const result = convertValuesToArray(data);
    expect(result).toEqual([1, 2, 3]);
  });

  test("converts object entries to an array of arrays", () => {
    const data = { a: 1, b: 2, c: 3 };
    const result = convertEntriesToArray(data);
    expect(result).toEqual([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]);
  });

  test("creates an array of strings from object entries", () => {
    const data = { a: 1, b: 2, c: 3 };
    const result = createStringArrayFromEntries(data);
    expect(result).toEqual(["a: 1", "b: 2", "c: 3"]);
  });

  test("filters out entries with even values and converts to array", () => {
    const data = { a: 1, b: 2, c: 3, d: 4 };
    const result = filterEvenAndConvertToArray(data);
    expect(result).toEqual(["a", "c"]);
  });

  test("swaps keys and values of an object", () => {
    const input = { a: "1", b: "2", c: "3" };
    const expected = { 1: "a", 2: "b", 3: "c" };
    const result = swapKeysAndValues(input);
    expect(result).toEqual(expected);
  });

  test("merges two objects without mutating the original ones", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const expected = { a: 1, b: 2, c: 3, d: 4 };
    const result = mergeObjectsImmutably(obj1, obj2);
    expect(result).toEqual(expected);
    expect(obj1).toEqual({ a: 1, b: 2 });
    expect(obj2).toEqual({ c: 3, d: 4 });
  });

  test("finds all keys in an object that have a specific value", () => {
    const input = { a: "apple", b: "banana", c: "apple", d: "date" };
    const expected = ["a", "c"];
    const result = findKeysWithSpecificValue(input, "apple");
    expect(result).toEqual(expected);
  });

  test("counts the number of properties in an object", () => {
    const input = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const expected = 5;
    const result = countProperties(input);
    expect(result).toBe(expected);
  });

  test("filters an object based on a predicate function", () => {
    const input = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const expected = { b: 2, d: 4 };
    const isEven = (n) => n % 2 === 0;
    const result = filterObject(input, isEven);
    expect(result).toEqual(expected);
  });
});
