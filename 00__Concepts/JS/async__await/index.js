async function run() {
  return "runnning......";
}

// IMP: way 01
// run().then((res) => console.log(res));

// IMP: way 02
async function main() {
  const result = await run();
  console.log(result); // "running......"
}

main();
