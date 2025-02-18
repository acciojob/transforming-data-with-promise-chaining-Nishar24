//your JS code here. If required.
// Function to create a promise with a delay
function createPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

// Function to handle button click
document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("ip");
  const outputDiv = document.getElementById("output");

  // Get the input value
  const number = parseFloat(input.value);

  // Clear the output div
  outputDiv.textContent = "";

  // Initial Promise (2 seconds)
  createPromise(number, 2000)
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return createPromise(result * 2, 2000); // Multiply by 2
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return createPromise(result - 3, 1000); // Subtract 3
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return createPromise(result / 2, 1000); // Divide by 2
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return createPromise(result + 10, 1000); // Add 10
    })
    .then((result) => {
      outputDiv.textContent = `Final Result: ${result}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});