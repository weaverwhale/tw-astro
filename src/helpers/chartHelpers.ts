import type { formattedDictatedService } from '@/types/Types'

export const groupByKey = (list: any, key: any) =>
  list.reduce(
    (hash: any, obj: any) => ({
      ...hash,
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    }),
    {},
  )

export const groupData = (data: any) => {
  data.map((item: any) => {
    item.service = (item.services?.length > 0 && item.services[0]).toString().toLowerCase()
    ;['current', 'previous'].map((period: string) => {
      item.charts[period] = item.charts[period]?.map((metric: any) => ({
        key: metric.x,
        value: metric.y,
      }))
    })
  })

  return groupByKey(data, 'service')
}

export const toNumber = (num: number | string) => (typeof num == 'number' ? num : parseFloat(num))
export const toCurrency = (num: string) =>
  parseFloat(num).toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace('.00', '')

export const formatNumber = (num: number | string) => {
  return toNumber(num).toFixed(2).replace('.00', '')
}

export const formatValue = (item: formattedDictatedService) => {
  return `${
    item.type === 'currency'
      ? `${toCurrency(formatNumber(item.values.current))}`
      : formatNumber(item.values.current)
  }${item.type === 'percent' ? '%' : ''}`
}

export const formatSparkChartData = (item: formattedDictatedService) => {
  return [{ data: item.charts.current }, { isComparison: true, data: item.charts.previous }]
}
