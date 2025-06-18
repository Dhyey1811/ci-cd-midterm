function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("CI/CD"));

// Export for testing
module.exports = { greet };
