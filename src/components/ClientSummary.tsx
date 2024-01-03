import { useState, useRef, Fragment } from 'react'
import { formatNumber, groupByKey, formatValue, groupData, toNumber } from '@/helpers/chartHelpers'

import type { DictatedData, IServiceMap } from '@/types/Types'
import { ServiceMap } from '@/types/Types'
// import { SourceIcons } from '@/components/SourceIcons'
import fetchSummaryData from '@/helpers/fetchSummaryData'

export const ClientSummary = ({ token, shop }: { token: string; shop: string }) => {
  if (!token || !shop) return null

  const [loading, setLoading] = useState(false)
  const [dictatedData, setDictatedData] = useState({} as DictatedData)

  const fetchSummaryPage = async () => {
    setLoading(true)

    const data = await fetchSummaryData(token, shop).catch(() => setLoading(false))

    if (data?.metrics) {
      setDictatedData(groupData(data.metrics))
    }

    setLoading(false)
  }

  const initialized = useRef(false)
  if (!initialized.current) {
    fetchSummaryPage()
    initialized.current = true
  }

  return loading ? (
    <>loading...</>
  ) : (
    Object.keys(dictatedData).map((g: any) => {
      // @ts-ignore
      const group = dictatedData[g] as DictatedData[IServiceMap]
      const filteredGroup = group.filter((item) => item.values?.current !== 0 && item.delta)
      const plainTextService = ServiceMap[g as IServiceMap]

      return (
        filteredGroup.length > 0 && (
          <div className="mt-4">
            <div>
              <h3 className="mb-4 mt-10 flex items-center gap-2 text-xl capitalize">
                {/* <SourceIcons source={g as IServiceMap} client:load /> {plainTextService} */}
                {plainTextService}
              </h3>
            </div>
            <div className="grid w-full flex-wrap items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {group.map((item) => {
                const delta = toNumber(item.delta)
                const deltaIsPositive =
                  (delta > 0 && (item.positiveComparison > 0 || !item.positiveComparison)) ||
                  (delta < 0 && item.positiveComparison < 0)

                return delta ? (
                  <div className="w-full rounded border p-4 shadow-md">
                    <div className="mb-4">
                      <div className="flex justify-between">
                        <div>
                          <strong>{item.title}</strong>
                        </div>

                        <div className="flex items-center gap-1">
                          <div className={deltaIsPositive ? 'text-[green]' : 'text-[red]'}>
                            {delta === 0 ? '-' : delta > 0 ? '↑' : '↓'}
                          </div>
                          <span>{formatNumber(item.delta)}%</span>
                        </div>
                      </div>
                      {item.tip && <p className="text-xs">{item.tip}</p>}
                      <p className="my-2 text-xl font-black">{formatValue(item)}</p>
                    </div>
                    {/* item.charts?.current?.length > 0 && <pre>CHART GOES HERE</pre> */}
                  </div>
                ) : (
                  ''
                )
              })}
            </div>
          </div>
        )
      )
    })
  )
}

export default ClientSummary
