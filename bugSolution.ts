function greeter(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(", ");
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane Doe", "John Smith"];
console.log(greeter(user)); // This will now work correctly

let singleUser = "Jane Doe";
console.log(greeter(singleUser)); // This also works correctly