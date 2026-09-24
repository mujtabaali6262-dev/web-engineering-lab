function greet(name) {
  return `Hello, ${name}!`;
}

// Update DOM heading in browser
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    if (heading) {
      heading.textContent = greet("World");
    }
  });
}

// Export function for Node.js test runner
if (typeof module !== "undefined" && module.exports) {
  module.exports = { greet };
}
