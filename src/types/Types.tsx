import type { SummaryMetricIdsTypes, SummaryMetricsStatsSelectorsNames } from '@/types/SummaryData'
import moment from 'moment'

// metrics from api
export interface metricData {
  metricId: string
  metricName: string
  type: string
  value: string | number
}

export enum metricEnum {
  'clicks',
  'spend',
}

export type metricKeys = keyof typeof metricEnum

export type EnumMetricKeys = {
  [key in metricKeys]: metricData
}

export interface metricsBreakdown {
  date: moment.Moment
  metrics: EnumMetricKeys
}

export interface formattedMetric {
  id: string
  metricsBreakdown: metricsBreakdown[]
}

export type metricsData = formattedMetric[]

// metrics in component
export interface metricsDynamicData {
  spendName: string
  spendValue: string
  spendDescription: string
  clicksName: string
  clicksValue: string
  clicksDescription: string
}

// spark chart
export interface sparkChartDataLineItem {
  key: number | string
  value: number | string
  date?: moment.Moment
}

export interface sparkChartObject {
  data: sparkChartDataLineItem[]
  name?: string
  isComparison?: boolean
}

export type sparkChartData = sparkChartObject[]

export interface formattedSparkChartInfo {
  value: number
  name: string
  chart: [sparkChartObject]
}

export type formattedSparkChartsData = {
  [key in metricKeys]: formattedSparkChartInfo
}

// annotations
export interface annotationsObject {
  axis: 'x' | 'y'
  label: string
  startKey: number
}

export type annotationsData = annotationsObject[]

// donut chart
export interface donutDataLineItemData {
  name: string
  data: sparkChartDataLineItem[]
}

export interface donutDataLineItemObject {
  name: string
  data: donutDataLineItemData[]
}

export enum donutDataEnum {
  'firstClick',
  'lastClick',
  'lastPlatformClick',
}

export type donutDataKeys = keyof typeof donutDataEnum

export type donutDataObject = {
  [key in donutDataKeys]?: donutDataLineItemObject
}

// data export
export interface dataExportProps {
  data: any
  title: string
  disabled: boolean
}

// summary page data
export type DatePickerOption = {
  value: {
    start: moment.Moment
    end: moment.Moment
    id: string
    todayHour?: number
    specialPeriod?: 'week' | 'month' | 'quarter' | 'year'
  }
  label: string | JSX.Element
}

interface Period {
  start: moment.Moment
  end: moment.Moment
}

export enum ShopifySegmentType {
  SOURCES = 'sources',
  PAYMENT_GATEWAY_COSTS = 'payment_gateway_costs',
  CUSTOMER_TAGS = 'customer_tags',
  ORDER_TAGS = 'order_tags',
}

export interface SummaryPageRequest {
  shopDomain: string
  periods: Period[]
  todayHour: number
}

export interface formattedDictatedService {
  id: SummaryMetricIdsTypes
  title: string
  tip?: string
  metricId: SummaryMetricsStatsSelectorsNames
  values: {
    current: string | number
    previous: string | number
  }
  delta: number
  charts: {
    current: sparkChartDataLineItem[]
    previous: sparkChartDataLineItem[]
  }
  type: string
  positiveComparison: number
}

export const ServiceMap = {
  amazon: 'Amazon',
  attentive: 'Attentive',
  benchmarks: 'Benchmarks',
  blended: 'Blended',
  enquirelabs: 'Fairing',
  facebook: 'Facebook',
  'facebook-ads': 'Facebook Ads',
  facebook_social: 'Facebook Social',
  finance: 'Finance',
  finance_total: 'Finance Totals',
  googleAds: 'Google Ads',
  old_google_ads: 'Google Ads (Old)',
  'google-ads': 'Google Ads',
  google_analytics: 'Google Analytics',
  googleAnalytics: 'Google Analytics',
  gorgias: 'Gorgias',
  influencers: 'Influencers',
  instagram: 'Instagram',
  klaviyo: 'Klaviyo',
  kno: 'Kno',
  pinterest: 'Pinterest',
  pixel: 'Pixel',
  recharge: 'Recharge',
  shopify: 'Shopify',
  snapchat: 'Snapchat',
  snapchat_ads: 'Snapchat Ads',
  tiktok: 'Tiktok',
  tripleWhale: 'Triple Whale',
  'triple-whale': 'Triple Whale',
}

export type IServiceMap = keyof typeof ServiceMap

export type DictatedData = {
  [key in keyof typeof ServiceMap]: formattedDictatedService[]
}

export type valueFormats = 'decimal' | 'percent' | 'currency' | 'string'

type MetricValues = {
  current: number
  previous: number
}

type ChartCoordinate = {
  x: number
  y: number
}

type ChartsValues = {
  current: ChartCoordinate[]
  previous: ChartCoordinate[]
}

export interface GetSummaryDTO {
  id: SummaryMetricIdsTypes
  title: string
  charts: ChartsValues
  metricId: string
  tip?: string
  services: (IServiceMap | string)[]
  delta: number
  type: valueFormats
  values: MetricValues
}

export type SummaryPageResponse = {
  metrics: any[]
}
