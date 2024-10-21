import { findHistoricalDataNames, downloadHistoricalData, runStrategy, scanStrategies, debug } from "@backtestjs/core";

async function main() {
  debug();

  const downloaded = await downloadHistoricalData("BTCEUR", {
    interval: "8h",
    startDate: "2024-01-01",
    endDate: "2024-10-15",
  });
  console.log(downloaded);

  const allNames = await findHistoricalDataNames();
  console.log(allNames);

  const scan = await scanStrategies();
  console.log(scan);

  const strategyResult = await runStrategy({
    strategyName: "demo",
    historicalMetaData: ["BTCEUR-8h"],
    params: {},
    startingAmount: 1000,
    startTime: new Date("2024-01-14").getTime(),
    endTime: new Date("2024-10-14").getTime(),
  });
  console.log(strategyResult.runMetaData);
  console.log(strategyResult.allOrders?.length);
  console.log(strategyResult.allWorths?.length);
}

main();
