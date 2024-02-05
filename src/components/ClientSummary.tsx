import { useState, useRef, Suspense } from 'react'
import {
  formatNumber,
  formatSparkChartData,
  formatValue,
  groupData,
  toNumber,
} from '@/helpers/chartHelpers'
import RenderIfVisible from 'react-render-if-visible'
import { PolarisVizProvider } from '@shopify/polaris-viz'
import type { DictatedData, IServiceMap } from '@/types/Types'
import { ServiceMap } from '@/types/Types'
import { SparkChart } from '@/components/Charts'
import { SourceIcons } from '@/components/SourceIcons'
import { SummaryLoading } from '@/components/SummaryLoading'
import { summaryData } from '../../summary-data'

import '@shopify/polaris-viz/build/esm/styles.css'

export const ClientSummary = ({ token, shop }: { token: string; shop: string }) => {
  if (!token || !shop) return null

  const [loading, setLoading] = useState(true)
  const [dictatedData, setDictatedData] = useState({} as DictatedData)

  const fetchSummaryPage = async () => {
    setLoading(true)

    // const data = await fetch(`/.netlify/functions/summary?token=${token}&shop=${shop}`)
    //   .then((res) => res.json())
    //   .catch((err) => {
    //     console.error(err)
    //     setLoading(false)
    //   })

    const data = summaryData

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
    <SummaryLoading />
  ) : (
    <Suspense fallback={<SummaryLoading />}>
      <PolarisVizProvider>
        {Object.keys(dictatedData).map((g: any) => {
          // @ts-ignore
          const group = dictatedData[g] as DictatedData[IServiceMap]
          const filteredGroup = group.filter((item) => item.values?.current !== 0 && item.delta)
          const plainTextService = ServiceMap[g as IServiceMap]

          return (
            filteredGroup.length > 0 && (
              <div key={g} className="mt-4 w-full">
                <div>
                  <h3 className="mb-4 mt-10 flex items-center gap-2 text-xl capitalize">
                    <SourceIcons source={g as IServiceMap} /> {plainTextService}
                  </h3>
                </div>
                <div className="grid w-full flex-wrap items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {group.map((item, i) => {
                    const delta = toNumber(item.delta)
                    const deltaIsPositive =
                      (delta > 0 && (item.positiveComparison > 0 || !item.positiveComparison)) ||
                      (delta < 0 && item.positiveComparison < 0)

                    return delta ? (
                      <div key={i} className="w-full rounded border p-4 shadow-md">
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
                        {item.charts?.current?.length > 0 && (
                          <RenderIfVisible defaultHeight={40} stayRendered={true}>
                            <SparkChart
                              accessibilityLabel={plainTextService}
                              data={formatSparkChartData(item)}
                            />
                          </RenderIfVisible>
                        )}
                      </div>
                    ) : (
                      ''
                    )
                  })}
                </div>
              </div>
            )
          )
        })}
      </PolarisVizProvider>
    </Suspense>
  )
}

export default ClientSummary
