import fetchSummaryData from '@/helpers/fetchSummaryData'

const origins = {
  'Access-Control-Allow-Origin': '*', // Required for CORS support to work
  'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
}

export async function handler(event) {
  try {
    const token = event?.queryStringParameters?.token ?? event?.body?.split('token=')[1] ?? null
    const shop = event?.queryStringParameters?.shop ?? event?.body?.split('shop=')[1] ?? null
    if (!token || !shop) throw new Error('Missing token or shop')

    const data = await fetchSummaryData(token, shop)

    const response = {
      statusCode: 200,
      body: JSON.stringify(data),
    }

    return response
  } catch (error) {
    const response = {
      statusCode: 500,
      headers: {
        ...origins,
      },
      body: error.message,
    }

    return response
  }
}
