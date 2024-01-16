export const SummaryMetricIds = [
  'sales',
  'newCustomerSales',
  'netSales',
  'rcRevenue',
  'paymentGateways',
  'cogs',
  'handlingFees',
  'customSpends',
  'totalCustomAdSpends',
  'inventoryItems',
  'inventoryItemsMissing',
  'totalInventoryCost',
  'totalInventoryValue',
  'shopifyAov',
  'shopifyCpa',
  'aov',
  'facebookAds',
  'googleAds',
  'googleAllCpa', // There was a reverse between googleCpa/googleAllCpa. Its too complex to fix since it requires reimport for all the shops so I just reverse here.
  'googleBounceRate',
  'googleConversionValue',
  'snapchatAds',
  'snapchatRoas',
  'snapchatImpressions',
  'snapchatSwipes',
  'snapchatCpm',
  'snapchatCpa',
  'snapchatConversionValue',
  'googleConversionRate',
  'googleSessions',
  'shopifyOrders',
  'totalNetProfit',
  'cashTurnover',
  'totalNetMargin',
  'totalCpa',
  'googleRps',
  'totalRefunds',
  'facebookRoas',
  'googleRoas',
  'totalGoogleAdsCtr',
  'totalGoogleAdsCpm',
  'googleCpc',
  'totalGoogleAdsClicks',
  'totalGoogleAdsImpressions',
  'ga_transactions_adGroup',
  'ga_all_transactions_adGroup',
  'ga_all_transactionsRevenue_adGroup',
  'ga_all_transactions_adGroup',
  'totalAllRoas',
  'googleCpa', // There was a reverse between googleCpa/googleAllCpa. Its too complex to fix since it requires reimport for all the shops so I just reverse here.
  'facebookCpc',
  'facebookCpm',
  'facebookCtr',
  'facebookCpoc',
  'facebookConversionValue',
  'facebookRevenuePerClick',
  'facebookCpa',
  'facebookViewThrough',
  'facebookViewThroughRoas',
  'facebookViewThroughCpa',
  'facebookPurchases',
  'facebookWebPurchases',
  'facebookMetaPurchases',
  'facebookWebConversionValue',
  'facebookMetaConversionValue',
  'newCustomersCpa',
  'klaviyoSalesPercent',
  'klaviyoFlowsSalesPercent',
  'klaviyoCampaignsSalesPercent',
  'klaviyoEmailOpenRate',
  'klaviyoUnsubscribed',
  'klaviyoPlacedOrderTotalPriceFlows',
  'klaviyoPlacedOrderTotalPriceFlowsPercent',
  'klaviyoPlacedOrderTotalPriceCampaigns',
  'klaviyoPlacedOrderTotalPriceCampaignsPercent',
  'klaviyoNewSubscribed',
  'klaviyoEmailsClicked',
  'klaviyoReceivedEmail',
  'klaviyoSmsClicked',
  'klaviyoCVR',
  'klaviyoRevenuePerEmail',
  'klaviyoNetNewSubscribers',
  'klaviyoPlacedOrderSales',
  'attentivePlacedOrderSales',
  'totalAttentivePlacedOrder',
  'tiktokAds',
  'tiktokRoas',
  'tiktokImpressions',
  'tiktokCpm',
  'tiktokCpc',
  'tiktokCtr',
  'tiktokCpa',
  'tiktokConversionValue',
  'uniqueCustomerSales',
  'customerFrequency',
  'ltvCpa',
  'mer',
  'totalReturns',
  'orders',
  'taxes',
  'newCustomersPercent',
  'oldCustomersPercent',
  'newCustomersOrders',
  'uniqueCustomers',
  'shipping',
  'googleAnalyticsUsers',
  'gorgiasTotalTicketsCreated',
  'gorgiasTotalTicketsReplied',
  'gorgiasAverageResponseTime',
  'gorgiasAverageResolutionTime',
  'totalVariantsSold',
  'blendedAds',
  'roas',
  'newCustomersRoas',
  'blendedAttributedRoas',
  'poas',
  'pinterestAds',
  'pinterestRoas',
  'pinterestCpc',
  'pinterestCpm',
  'pinterestConversionValue',
  'pinterestPurchases',
  'pinterestImpressions',
  'pinterestCtr',
  'pixelVisitors',
  'pixelOrders',
  'pixelSales',
  'pixelAddToCarts',
  'pixelRoasFacebook',
  'pixelCpaFacebook',
  'pixelAovFacebook',
  'pixelConversionValueFacebook',
  'pixelOrdersFacebook',
  'blendedSales',

  // sources
  'web',
  'pos',
  'shopify_draft_order',
  'iphone',
  'android',

  // benchmarks
  'benchmarksCPM',
  'benchmarksCPC',
  'benchmarksCTR',
  'benchmarksNCROAS',
  'benchmarksNCPA',
  'benchmarksBlendedROAS',
  'benchmarksTotalSpendAvg',
  'benchmarksNewCustomersAvg',
  'benchmarksSize',
  'benchmarksOrdersAvg',
  'benchmarksNewCustomersTotalPriceAvg',
  'benchmarksTotalPriceUSDAvg',
  'benchmarksFBAdsSpendAvg',
  'benchmarksFBAdsImpressionsAvg',
  'benchmarksFBAdsClicksAvg',

  // attentive
  'attentiveNewSubscribed',
  'attentiveNetNewsubscribers',
  'attentiveUnsubscribed',
  'attentiveSalesPercent',
  'attentivePlacedOrderTotalPriceFlows',
  'attentivePlacedOrderTotalPriceFlowsPercent',
  'attentivePlacedOrderTotalPriceCampaigns',
  'attentivePlacedOrderTotalPriceCampaignsPercent',

  // enquirelabs
  'totalFacebookEnq',
  'totalGoogleEnq',
  'totalSnapchatEnq',
  'totalTiktokEnq',
  'totalPinterestEnq',
  'totalInstagramEnq',
  'responsesPrecent',

  // kno
  'totalFacebookKno',
  'totalGoogleKno',
  'totalSnapchatKno',
  'totalTiktokKno',
  'totalPinterestKno',
  'totalInstagramKno',
  'responsesPrecentKno',

  // recharge
  'rechargeNewSub', //remove this??
  'rechargeTotalNewSubscriptions',
  'rechargeCanceledSub',
  'rechargeExpiredSub',
  'rechargeTotalActiveSubsribers',
  'rechargeTotalNetSales',
  'rechargeItemsCount',
  'rechargeTransactionCount',
  'rechargeChurnRate',
  'rechargeMRR',
  'rechargeTotalActiveCustomers',
  'rechargeTotalChurnedCustomers',

  // social
  'facebookLikes',
  'facebookComments',
  'facebookShares',
  'facebookPosts',
  'facebookFollowers',
  'facebookSocialImpressions',
  'facebookSocialAvg',
  'facebookReach',
  'facebookProfileView',
  'facebookWebsiteClicks',
  'instagramLikes',
  'instagramComments',
  'instagramShares',
  'instagramPosts',
  'instagramFollowers',
  'instagramImpressions',
  'instagramAvg',
  'instagramAvgImpressionsFollowers',
  'instagramReach',
  'instagramProfileView',
  'instagramWebsiteClicks',

  //influencers
  'influencerConversionValue',
  'influencerPurchases',
  'influencerSpend',
  'influencerRoas',
  'influencerNcConversionValue',
  'influencerNcPurchases',

  //amazon-sales
  'amazonSales',
  'amazonSalesTaxes',
  'amazonOrders',
  'amazonItems',
  'amazonFees',
  'amazonSalesAFN',
  'amazonSalesTaxesAFN',
  'amazonOrdersAFN',
  'amazonItemsAFN',
  'amazonFeesAFN',
  'amazonSalesMFN',
  'amazonSalesTaxesMFN',
  'amazonOrdersMFN',
  'amazonItemsMFN',
  'amazonFeesMFN',

  'canceledAmazonSales',
  'canceledAmazonSalesTaxes',
  'canceledAmazonOrders',
  'canceledAmazonItems',
  'canceledAmazonFees',
  'canceledAmazonSalesAFN',
  'canceledAmazonSalesTaxesAFN',
  'canceledAmazonOrdersAFN',
  'canceledAmazonItemsAFN',
  'canceledAmazonFeesAFN',
  'canceledAmazonSalesMFN',
  'canceledAmazonSalesTaxesMFN',
  'canceledAmazonOrdersMFN',
  'canceledAmazonItemsMFN',
  'canceledAmazonFeesMFN',

  // amazon-ads
  'amazonAds',
  'amazonROAS',
  'amazonCPC',
  'amazonClicks',
  'amazonPurchases',
  'amazonTACos',
  'amazonAdsConversionValue',

  // amazon-ads
  'amazonNetSales',
  'amazonNetProfit',
  // 'amazonROAS',
  'amazonMER',
  'amazonAOV',
  'amazonCPA',
  'amazonExpenses',
  // ...FinanceMetricIds,
] as const

export const SummaryMetricsStatsSelectors = [
  'totalSales',
  'newCustomerSales',
  'netSales',
  'rcRevenue',
  'totalPaymentGatewayCosts',
  'totalProductCosts',
  'totalHandlingFees',
  'totalCustomSpends',
  'totalCustomAdSpends',
  'totalInventoryItems',
  'totalInventoryItemsMissing',
  'totalInventoryCost',
  'totalInventoryValue',
  'shopifyAov',
  'shopifyCpa',
  'averageGaRevenuePerTransaction',
  'fb_ads_spend',
  'ga_adCost',
  'googleAllCpa',
  'googleBounceRate',
  'googleConversionValue',
  'totalSnapchatSpend',
  'totalSnapchatRoas',
  'snapchatImpressions',
  'snapchat_swipes',
  'snapchatCpm',
  'snapchatCpa',
  'totalSnapchatConversionPurchasesValue',
  'averageGaTransactionsPerSession',
  'totalGoogleAnalyticsSessions',
  'totalOrders',
  'totalNetProfit',
  'cashTurnover',
  'totalNetMargin',
  'totalCpa',
  'totalRevenuePerSession',
  'totalRefunds',
  'fb_ads_purchase_roas',
  'ga_ROAS',
  'totalGoogleAdsCtr',
  'totalGoogleAdsCpm',
  'googleCpc',
  'totalGoogleAdsClicks',
  'totalGoogleAdsImpressions',
  'ga_transactions_adGroup',
  'ga_all_transactions_adGroup',
  'ga_all_transactionsRevenue_adGroup',
  'ga_all_transactions_adGroup',
  'totalAllRoas',
  'googleCpa',
  'averageFacebookCpc',
  'averageFacebookCpm',
  'facebookCtr',
  'facebookCostPerOutboundClick',
  'facebookConversionValue',
  'facebookRevenuePerClick',
  'facebookCpa',
  'facebookViewThrough',
  'facebookViewThroughRoas',
  'facebookViewThroughCpa',
  'facebookPurchases',
  'facebookMetaPurchases',
  'facebookWebPurchases',
  'facebookWebConversionValue',
  'facebookMetaConversionValue',
  'newCustomersCpa',
  'totalKlaviyoPlacedOrderSalesPercent',
  'totalKlaviyoPlacedOrderSalesPercentFlows',
  'totalKlaviyoPlacedOrderSalesPercentCampaigns',
  'klaviyoEmailOpenRate',
  'totalKlaviyoUnsubscribed',
  'totalKlaviyoPlacedOrderTotalPriceFlows',
  'totalKlaviyoPlacedOrderSalesPercentFlows',
  'totalKlaviyoPlacedOrderTotalPriceCampaigns',
  'totalKlaviyoPlacedOrderSalesPercentCampaigns',
  'totalKlaviyoSubscribedToList',
  'totalKlaviyoClickedEmail',
  'totalKlaviyoReceivedEmail',
  'totalKlaviyoClickedSms',
  'klaviyoCVR',
  'klaviyoRevenuePerEmail',
  'totalKlaviyoNetNewSubscribers',
  'klaviyoPlacedOrderSales',
  'attentivePlacedOrderSales',
  'totalAttentivePlacedOrder',
  'tiktok_spend',
  'tiktok_complete_payment_roas',
  'tiktokImpressions',
  'averageTiktokCpm',
  'averageTiktokCpc',
  'tiktokCtr',
  'tiktokCpa',
  'tiktokConversionValue',
  'uniqueCustomerLifetimeValue',
  'customerFrequency',
  'ltvCpa',
  'mer',
  'totalReturns',
  'totalOrders',
  'totalTaxes',
  'newCustomersPercent',
  'oldCustomersPercent',
  'newCustomersOrders',
  'getUniqueCustomerCount',
  'totalShippingCosts',
  'totalGoogleAnalyticsUsers',
  'totalGorgiasTicketsCreated',
  'totalGorgiasTicketsReplied',
  'averageGorgiasResponseTime',
  'averageGorgiasResolutionTime',
  'totalVariantsSold',
  'blendedAds',
  'totalRoas',
  'newCustomersRoas',
  'blendedAttributedRoas',
  'poas',
  'pinterestSpend',
  'pinterestRoas',
  'pinterestCpc',
  'pinterestCpm',
  'pinterestConversionValue',
  'pinterestPurchases',
  'pinterestImpressions',
  'pinterestCtr',
  'pixelVisitors',
  'pixelOrders',
  'pixelSales',
  'pixelAddToCarts',
  'pixelRoasFacebook',
  'pixelCpaFacebook',
  'pixelAovFacebook',
  'pixelConversionValueFacebook',
  'pixelOrdersFacebook',
  'blendedSales',

  // dynamic
  'order_tags',
  'sources',
  'customMetrics',
  'externalApps',

  // benchmarks
  'totalBenchmarksCPM',
  'totalBenchmarksCPC',
  'totalBenchmarksCTR',
  'totalBenchmarksNCROAS',
  'totalBenchmarksNCPA',
  'totalBenchmarksBlendedROAS',
  'totalBenchmarksTotalSpendAvg',
  'totalBenchmarksNewCustomersAvg',
  'totalBenchmarksSize',
  'totalBenchmarksOrdersAvg',
  'totalBenchmarksNewCustomersTotalPriceAvg',
  'totalBenchmarksTotalPriceUSDAvg',
  'totalBenchmarksFBAdsSpendAvg',
  'totalBenchmarksFBAdsImpressionsAvg',
  'totalBenchmarksFBAdsClicksAvg',

  // attentive
  'totalAttentiveNewSubscribed',
  'totalAttentiveNetNewsubscribers',
  'totalAttentiveUnsubscribed',
  'totalAttentivePlacedOrderSalesPercent',
  'totalAttentivePlacedOrderTotalPriceFlows',
  'totalAttentivePlacedOrderSalesPercentFlows',
  'totalAttentivePlacedOrderTotalPriceCampaigns',
  'totalAttentivePlacedOrderSalesPercentCampaigns',

  // enquirelabs
  'totalFacebookEnq',
  'totalGoogleEnq',
  'totalSnapchatEnq',
  'totalTiktokEnq',
  'totalPinterestEnq',
  'totalInstagramEnq',
  'responsesPrecent',

  // kno
  'totalFacebookKno',
  'totalGoogleKno',
  'totalSnapchatKno',
  'totalTiktokKno',
  'totalPinterestKno',
  'totalInstagramKno',
  'responsesPrecentKno',

  // recharge
  'rechargeNewSub',
  'rechargeTotalNewSubscriptions',
  'rechargeCanceledSub',
  'rechargeExpiredSub',
  'rechargeTotalActiveSubsribers',
  'rechargeTotalNetSales',
  'rechargeItemsCount',
  'rechargeTransactionCount',
  'rechargeChurnRate',
  'rechargeMRR',
  'rechargeTotalActiveCustomers',
  'rechargeTotalChurnedCustomers',

  // social
  'facebookLikes',
  'facebookComments',
  'facebookShares',
  'facebookPosts',
  'facebookFollowers',
  'facebookSocialImpressions',
  'facebookSocialAvg',
  'facebookReach',
  'facebookProfileView',
  'facebookWebsiteClicks',
  'instagramLikes',
  'instagramComments',
  'instagramShares',
  'instagramPosts',
  'instagramFollowers',
  'instagramImpressions',
  'instagramAvg',
  'instagramAvgImpressionsFollowers',
  'instagramReach',
  'instagramProfileView',
  'instagramWebsiteClicks',

  // influencers
  'influencerConversionValue',
  'influencerPurchases',
  'influencerSpend',
  'influencerRoas',
  'influencerNcPurchases',
  'influencerNcConversionValue',

  // amazon-sales
  'totalAmazonSales',
  'totalAmazonSalesTaxes',
  'totalAmazonOrders',
  'totalAmazonItems',
  'totalAmazonFees',
  'totalAmazonSalesAFN',
  'totalAmazonSalesTaxesAFN',
  'totalAmazonOrdersAFN',
  'totalAmazonItemsAFN',
  'totalAmazonFeesAFN',
  'totalAmazonSalesMFN',
  'totalAmazonSalesTaxesMFN',
  'totalAmazonOrdersMFN',
  'totalAmazonItemsMFN',
  'totalAmazonFeesMFN',

  'totalCanceledAmazonSales',
  'totalCanceledAmazonSalesTaxes',
  'totalCanceledAmazonOrders',
  'totalCanceledAmazonItems',
  'totalCanceledAmazonFees',
  'totalCanceledAmazonSalesAFN',
  'totalCanceledAmazonSalesTaxesAFN',
  'totalCanceledAmazonOrdersAFN',
  'totalCanceledAmazonItemsAFN',
  'totalCanceledAmazonFeesAFN',
  'totalCanceledAmazonSalesMFN',
  'totalCanceledAmazonSalesTaxesMFN',
  'totalCanceledAmazonOrdersMFN',
  'totalCanceledAmazonItemsMFN',
  'totalCanceledAmazonFeesMFN',

  // amazon-ads
  'amazonAds',
  'amazonROAS',
  'amazonCPC',
  'amazonClicks',
  'amazonPurchases',
  'amazonTACos',
  'amazonAdsConversionValue',

  // amazon-ads
  'amazonNetSales',
  'amazonNetProfit',
  // 'amazonROAS',
  'amazonMER',
  'amazonAOV',
  'amazonCPA',
  'amazonExpenses',
  // ...FinanceMetricsStatsSelectors,
] as const

export const SummaryMetricsChartsSelectors = [
  'chartSales',
  'chartNewCustomerSales',
  'netSalesChart',
  'chartReturningCustomerSales',
  'totalPaymentGatewayCostsChart',
  'chartShopifyAov',
  'chartShopifyCpa',
  'chartGaRevenuePerTransaction',
  'chartFacebookInsights',
  'chartGoogleAds',
  'googleAdsClicksChart',
  'googleConversionValueChart',
  'chartSnapchatAds',
  'snapchatRoasChart',
  'snapchat_impressions_chart',
  'snapchat_swipes_chart',
  'snapchatCpmChart',
  'snapchatCpaChart',
  'chartSnapchatConversionPurchasesValue',
  'chartGaTransactionsPerSession',
  'chartGaUsers',
  'chartOrders',
  'chartTotalCpa',
  'chartRefunds',
  'chartFacebookPurchaseRoas',
  'googleAdsRoasChart',
  'googleAdsConversionsChart',
  'googleCpaChart',
  'totalGoogleAdsCpmChart',
  'googleCpcChart',
  'totalGoogleAdsImpressionsChart',
  'totalCustomSpendsChart',
  'merChart',
  'totalReturnsChart',
  'totalRevenuePerSessionChart',
  'googleAllConversionValueChart',
  'totalAllRoasChart',
  'googleAdsAllConversionsChart',
  'googleAllCpaChart',
  'totalGoogleAdsCtrChart',
  'chartFacebookCpc',
  'chartFacebookCpm',
  'facebookViewThroughChart',
  'facebookViewThroughRoasChart',
  'facebookViewThroughCpaChart',
  'chartFacebookCtr',
  'chartFacebookCostPerOutboundClick',
  'facebookConversionValueChart',
  'facebookRevenuePerClickChart',
  'facebookCpaChart',
  'facebookPurchasesChart',
  'facebookMetaPurchasesChart',
  'facebookWebPurchasesChart',
  'facebookWebConversionValueChart',
  'facebookMetaConversionValueChart',
  'chartNewCustomersCpa',
  'chartKlaviyoPlacedOrderSalesPercent',
  'chartKlaviyoPlacedOrderSalesPercentFlows',
  'chartKlaviyoPlacedOrderSalesPercentCampaigns',
  'chartKlaviyoUnsubscribed',
  'chartKlaviyoPlacedOrderTotalPriceFlows',
  'chartKlaviyoPlacedOrderTotalPriceFlows',
  'chartKlaviyoPlacedOrderTotalPriceCampaigns',
  'chartKlaviyoPlacedOrderTotalPriceCampaigns',
  'chartKlaviyoSubscribedToList',
  'chartKlaviyoClickedEmail',
  'chartKlaviyoReceivedEmail',
  'chartKlaviyoClickedSms',
  'chartKlaviyoCVR',
  'chartKlaviyoRevenuePerEmail',
  'chartKlaviyoNetNewSubscribers',
  'tiktokSpendChart',
  'tiktokRoasChart',
  'tiktokImpressionsChart',
  'chartTiktokCpm',
  'chartTiktokCpc',
  'chartTiktokCtr',
  'tiktokCpaChart',
  'tiktokConversionValueChart',
  'chartOrders',
  'chartTaxes',
  'chartCogs',
  'chartHandlingFees',
  'chartNewCustomersPercent',
  'chartOldCustomersPercent',
  'chartNewCustomersOrders',
  'totalShippingCostsChart',
  'chartGaUsers',
  'chartGorgiasTicketsCreated',
  'chartGorgiasTicketsReplied',
  'chartGorgiasResponseTime',
  'chartGorgiasResolutionTime',
  'chartGorgiasResolutionTime',
  'chartBlendedAds',
  'chartRoas',
  'chartNewCustomerRoas',
  'chartBlendedAttributedRoas',
  'chartBlendedAttributedRoas',
  'pinterestSpendChart',
  'pinterestRoasChart',
  'pinterestCpcChart',
  'pinterestCpmChart',
  'pinterestConversionValueChart',
  'pinterestPurchasesChart',
  'pinterestImpressionsChart',
  'pinterestCtrChart',
  'chartPixelUsers',
  'chartPixelOrders',
  'chartPixelSales',
  'chartPixelAddToCarts',
  'chartPixelAddToCarts',
  'chartPixelAddToCarts',
  'chartPixelAddToCarts',
  'chartPixelAddToCarts',
  'chartPixelAddToCarts',
  'orderTagsCharts',
  'sourcesCharts',
  'customMetricsCharts',
  'externalAppsChart',
  'chartBenchmarksCPM',
  'chartBenchmarksCPC',
  'chartBenchmarksCTR',
  'chartBenchmarksNCROAS',
  'chartBenchmarksNCPA',
  'chartBenchmarksBlendedROAS',
  'chartBenchmarksTotalSpendAAvg',
  'chartBenchmarksFBAdsNewCustomersAvg',
  'chartBenchmarksSize',
  'chartBenchmarksOrdersAvg',
  'chartBenchmarksNewCustomersTotalPriceAvg',
  'chartBenchmarksTotalPriceUSDAvg',
  'chartBenchmarksFBAdsSpendAvg',
  'chartBenchmarksFBAdsImpressionsAvg',
  'chartBenchmarksFBAdsClicksAvg',
  'chartAttentiveNewSubscribed',
  'chartAttentiveNetNewsubscribers',
  'chartAttentiveUnsubscribed',
  'chartAttentivePlacedOrderSalesPercent',
  'chartAttentivePlacedOrderTotalPriceFlows',
  'chartAttentivePlacedOrderTotalPriceFlows',
  'chartAttentivePlacedOrderTotalPriceCampaigns',
  'chartAttentivePlacedOrderTotalPriceCampaigns',
  'rechargeNewSubChart',
  'rechargeTotalNewSubscriptionsChart',
  'rechargeCanceledSubChart',
  'rechargeExpiredSubChart',
  'rechargeTotalActiveSubsribersChart',
  'rechargeTotalNetSalesChart',
  'rechargeItemsCountChart',
  'rechargeTransactionCountChart',
  'rechargeChurnRateChart',
  'rechargeMRRChart',
  'rechargeTotalActiveCustomersChart',
  'rechargeTotalChurnedCustomersChart',
  'chartFacebookLikes',
  'chartFacebookComments',
  'chartFacebookShares',
  'chartFacebookPosts',
  'chartFacebookFollowers',
  'chartFacebookImpressions',
  'chartFacebookSocialAvg',
  'chartFacebookReach',
  'chartFacebookProfileView',
  'chartFacebookWebsiteClicks',
  'chartInstagramLikes',
  'chartInstagramComments',
  'chartInstagramShares',
  'chartInstagramPosts',
  'chartInstagramFollowers',
  'chartInstagramImpressions',
  'chartInstagramAvg',
  'chartInstagramAvgImpressionsFollowers',
  'chartInstagramReach',
  'chartInstagramProfileView',
  'chartInstagramWebsiteClicks',
  'influencerConversionValueChart',
  'influencerSpendChart',
  'influencerRoasChart',
  'influencerPurchasesChart',
  'influencerNcPurchasesChart',
  'influencerNcConversionValueChart',
  'totalCustomAdSpendsChart',
  'chartBlendedSales',

  // amazon
  'chartAmazonSales',
  'chartAmazonSalesTaxes',
  'chartAmazonOrders',
  'chartAmazonItems',
  'chartAmazonFees',
  'chartAmazonSalesAFN',
  'chartAmazonSalesTaxesAFN',
  'chartAmazonOrdersAFN',
  'chartAmazonItemsAFN',
  'chartAmazonFeesAFN',
  'chartAmazonSalesMFN',
  'chartAmazonSalesTaxesMFN',
  'chartAmazonOrdersMFN',
  'chartAmazonItemsMFN',
  'chartAmazonFeesMFN',

  'chartCanceledAmazonSales',
  'chartCanceledAmazonSalesTaxes',
  'chartCanceledAmazonOrders',
  'chartCanceledAmazonItems',
  'chartCanceledAmazonFees',
  'chartCanceledAmazonSalesAFN',
  'chartCanceledAmazonSalesTaxesAFN',
  'chartCanceledAmazonOrdersAFN',
  'chartCanceledAmazonItemsAFN',
  'chartCanceledAmazonFeesAFN',
  'chartCanceledAmazonSalesMFN',
  'chartCanceledAmazonSalesTaxesMFN',
  'chartCanceledAmazonOrdersMFN',
  'chartCanceledAmazonItemsMFN',
  'chartCanceledAmazonFeesMFN',

  'chartAmazonAds',
  'chartAmazonClicks',
  'amazonRoasChart',
  'chartAmazonPurchases',
  'chartAmazonCPC',
  'amazonConversionValueChart',

  'chartAmazonNetSales',
  'cahrtAmazonNetProfit',
  'amazonMERChart',
  'amazonAOVChart',
  'amazonCPAChart',
  'amazonExpensesChart',

  //kno
  'totalFacebookKnoChart',
  'totalGoogleKnoChart',
  'totalSnapchatKnoChart',
  'totalTiktokKnoChart',
  'totalPinterestKnoChart',
  'totalInstagramKnoChart',

  //fairing
  'responsesPrecentChart',
  'totalFacebookEnqChart',
  'totalGoogleEnqChart',
  'totalSnapchatEnqChart',
  'totalTiktokEnqChart',
  'totalPinterestEnqChart',
  'totalInstagramEnqChart',
  // ...FinanceMetricsChartsSelectors,
] as const

export type SummaryMetricsStatsSelectorsNames = (typeof SummaryMetricsStatsSelectors)[number]
export type SummaryMetricIdsTypes = (typeof SummaryMetricIds)[number]
export type SummaryMetricsChartsSelectorsNames = (typeof SummaryMetricsChartsSelectors)[number]
