const failRate = parseFloat(process.argv[2]);
const roll = Math.random();
console.log(`fail rate ${failRate}, roll ${roll.toFixed(2)}`);
if (roll < failRate) {
  console.error("Error: element not found within timeout");
  process.exit(1);
}
console.log("test passed");
