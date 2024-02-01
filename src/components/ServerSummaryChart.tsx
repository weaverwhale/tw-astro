import { formatSparkChartData } from '@/helpers/chartHelpers'
import RenderIfVisible from 'react-render-if-visible'
import { PolarisVizProvider } from '@shopify/polaris-viz'
import { SparkChart } from '@/components/Charts'

import '@shopify/polaris-viz/build/esm/styles.css'

export const ServerSummaryChart = ({
  item,
  plainTextService,
}: {
  item: any
  plainTextService: string
}) => {
  if (!item) return null

  return (
    <PolarisVizProvider>
      <RenderIfVisible defaultHeight={40} stayRendered={true}>
        <SparkChart accessibilityLabel={plainTextService} data={formatSparkChartData(item)} />
      </RenderIfVisible>
    </PolarisVizProvider>
  )
}

export default ServerSummaryChart
