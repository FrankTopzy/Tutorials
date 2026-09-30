function processString(value: string, callback: (value: string) => string): string {
  return callback(value);
}

const result = processString("frank", value => value.toUpperCase());

console.log(result);