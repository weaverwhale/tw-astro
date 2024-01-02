import moment from 'moment'

export async function fetchSummaryData(key: string, shop: string) {
  if (!key) throw new Error('No key provided')
  if (!shop) throw new Error('No shop provided')

  const url = 'https://api.triplewhale.com/api/v2/summary-page/get-data'

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': key,
    },
    body: JSON.stringify({
      shopDomain: shop,
      period: {
        start: moment().startOf('day'),
        end: moment().endOf('day'),
      },
    }),
  }

  const response = await fetch(url, options)

  if (!response.ok) {
    throw new Error(`Failed to fetch data. Server responded with status: ${response.status}`)
  }

  return response.redirected ? response.url : null // Include URL if redirected
}

export default fetchSummaryData
