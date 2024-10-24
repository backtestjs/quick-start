import {
  parseRunResultsStats,
  findHistoricalDataNames,
  downloadHistoricalData,
  runStrategy,
  scanStrategies,
  printInfo
} from '@backtestjs/framework'

async function main() {
  printInfo()

  const downloaded = await downloadHistoricalData('BTCEUR', {
    interval: '8h',
    startDate: '2024-01-01',
    endDate: '2024-10-15'
  })
  console.log(downloaded)

  const allNames = await findHistoricalDataNames()
  console.log(allNames)

  const scan = await scanStrategies()
  console.log(scan)

  const strategyResult = await runStrategy({
    strategyName: 'demo',
    historicalData: ['BTCEUR-8h'],
    params: {
      lowSMA: 10,
      highSMA: 50
    },
    startingAmount: 1000,
    startTime: new Date('2024-01-14').getTime(),
    endTime: new Date('2024-10-14').getTime()
  })

  const parsed = await parseRunResultsStats(strategyResult)
  console.log(parsed?.totals[0], parsed?.totals[1]) // just to show somethings (probably, you need to look parsed or strategyResult)
}

main()
