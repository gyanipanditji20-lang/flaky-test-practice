const failRate = parseFloat(process.argv[2]);
const roll = Math.random();
console.log(`fail rate ${failRate}, roll ${roll.toFixed(2)}`);

const errors = [
  "Error: element not found within timeout",
  "Error: connect ECONNRESET api.example.com:443",
  "Error: user test@example.com already exists (duplicate record)",
  "Error: browser process crashed - out of memory"
];

if (roll < failRate) {
  console.error(errors[Math.floor(Math.random() * errors.length)]);
  process.exit(1);
}
console.log("test passed");
