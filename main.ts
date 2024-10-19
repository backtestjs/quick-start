import {
  findHistoricalData,
  findHistoricalDataSets,
  findHistoricalDataNames,
  downloadHistoricalData,
  importFileCSV,
  exportFileCSV,
  deleteHistoricalData,
  findResultNames,
  findResults,
  deleteResults,
  saveResults,
  findMultiResultNames,
  findMultiResults,
  deleteMultiResults,
  saveMultiResults,
  findStrategieNames,
  findStrategies,
  runStrategy,
  scanStrategies,
  debug,
} from "@backtestjs/core";

import { StrategyResult, StrategyResultMulti } from "@backtestjs/core";

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

  const runStrategyResult = await runStrategy({
    strategyName: "demo",
    historicalMetaData: ["BTCEUR-8h"],
    params: {},
    startingAmount: 1000,
    startTime: new Date("2024-01-14").getTime(),
    endTime: new Date("2024-10-14").getTime(),
  });
  console.log(runStrategyResult.runMetaData);
}

main();
