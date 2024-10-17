import { findHistoricalDataNames } from "@backtestjs/core";

async function main() {
  const dataNames = await findHistoricalDataNames();
  console.log(dataNames);
}

main();
