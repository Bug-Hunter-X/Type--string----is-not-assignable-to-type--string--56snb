# Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: assigning an array of strings to a variable expecting a single string.  The `greeter` function expects a single string argument, but it receives an array.  This results in a type error.

The solution involves either modifying the `greeter` function to accept an array or modifying the `user` variable to provide a single string.