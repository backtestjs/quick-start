import {
  parseRunResultsStats,
  findHistoricalData,
  findHistoricalDataNames,
  deleteHistoricalData,
  downloadHistoricalData,
  runStrategy,
  scanStrategies,
  printInfo
} from '@backtest/framework'

async function main() {
  printInfo()

  // historical data
  const startDate = new Date('2024-01-01').getTime()
  const endDate = new Date('2024-10-15').getTime()

  // analyzed period
  const startTime = new Date('2024-02-01').getTime()
  const endTime = new Date('2024-10-14').getTime()

  const found = await findHistoricalData('BTCEUR-8h')
  console.log('found:', found)

  if (found) {
    const deleted = await deleteHistoricalData('BTCEUR-8h')
    console.log('deleted:', deleted)
  }

  const downloaded = await downloadHistoricalData('BTCEUR', {
    interval: '8h',
    startDate: startDate,
    endDate: endDate
  })
  console.log('downloaded:', downloaded)

  const allNames = await findHistoricalDataNames()
  console.log('allNames:', allNames)

  const scan = await scanStrategies()
  console.log('scan:', scan)

  const strategyResult = await runStrategy({
    strategyName: 'demo',
    historicalData: ['BTCEUR-8h'],
    params: {
      lowSMA: 10,
      highSMA: 50
    },
    startingAmount: 1000,
    startTime: startTime,
    endTime: endTime
  })

  const parsed = await parseRunResultsStats(strategyResult)
  console.log('parsed:', parsed?.totals[0], parsed?.totals[1]) // just to show somethings (probably, you need to look parsed or strategyResult)
}

main()
