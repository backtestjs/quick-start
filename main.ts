import {
  parseRunResultsStats,
  findHistoricalDataNames,
  downloadHistoricalData,
  runStrategy,
  scanStrategies,
  printInfo
} from '@backtestjs/core'

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
    historicalMetaData: ['BTCEUR-8h'],
    params: {
      lowSMA: 10,
      highSMA: 50
    },
    startingAmount: 1000,
    startTime: new Date('2024-01-14').getTime(),
    endTime: new Date('2024-10-14').getTime()
  })

  const parsed = await parseRunResultsStats(strategyResult)
  console.log(parsed)
}

main()
