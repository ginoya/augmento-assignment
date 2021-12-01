export const DashboardData = {
    data: {
        organizationId: 'id12be10fd-c679-476b-aeb2-2c719f594250',
        organizationName: 'ATS',
        aggregationsStartDate: '2021-01-01',
        aggregationsEndDate: '2021-06-30',
        utilityType: 'gas',
        utilityMeasurementUnit: 'thm',
        utilityCostCurrency: 'USD',
        regions: [
            {
                regionId: 'APAC',
                regionName: 'Asia Pacific',
                facilities: [
                    {
                        facilityId: 'EOM78238283292345',
                        facilityName: 'Green Heights',
                        totalAggregations: {
                            totalActualConsumption: 107,
                            totalBaselineConsumption: 96,
                            totalActualCost: 107,
                            totalBaselineCost: 96,
                            totalCostSavings: 11,
                            totalConsumptionSavingsPercentage: 20.7,
                            totalConsumptionSavings: 11,
                            totalCostSavingsPercentage: 20.7
                        },
                        monthwiseAggregations: [
                            {
                                actualConsumption: 2000,
                                actualCost: 2000,
                                baselineConsumption: 3000,
                                baselineCost: 3000,
                                monthStartDate: '2021-01-01',
                                monthEndDate: '2021-01-31',
                                isCompleted: true,
                                consumptionProcessedDays: 15
                            },
                            {
                                actualConsumption: 2000,
                                actualCost: 2000,
                                baselineConsumption: 3000,
                                baselineCost: 3000,
                                monthStartDate: '2021-02-01',
                                monthEndDate: '2021-02-28',
                                isCompleted: true,
                                consumptionProcessedDays: 15
                            },
                            {
                                actualConsumption: 2000,
                                actualCost: 3000,
                                baselineConsumption: 3000,
                                baselineCost: 1000,
                                monthStartDate: '2021-03-01',
                                monthEndDate: '2021-03-31',
                                isCompleted: true,
                                consumptionProcessedDays: 15
                            },
                            {
                                actualConsumption: 2000,
                                actualCost: 5000,
                                baselineConsumption: 3000,
                                baselineCost: 3000,
                                monthStartDate: '2021-04-01',
                                monthEndDate: '2021-04-30',
                                isCompleted: true,
                                consumptionProcessedDays: 15
                            },
                            {
                                actualConsumption: 2000,
                                actualCost: 3000,
                                baselineConsumption: 3000,
                                baselineCost: 3000,
                                monthStartDate: '2021-05-01',
                                monthEndDate: '2021-05-31',
                                isCompleted: false,
                                consumptionProcessedDays: 24
                            },
                            {
                                actualConsumption: 2000,
                                actualCost: 2000,
                                baselineConsumption: 3000,
                                baselineCost: 3000,
                                monthStartDate: '2021-06-01',
                                monthEndDate: '2021-06-30',
                                isCompleted: true,
                                consumptionProcessedDays: 15
                            }
                        ],
                        utilityMeters: [
                            {
                                meterId: '',
                                meterNumber: 'Meter1',
                                meterType: '',
                                aggregations: {
                                    actualConsumption: 2000,
                                    actualCost: 2000,
                                    baselineConsumption: 3000,
                                    baselineCost: 3000,
                                    totalCostSavings: 11,
                                    totalCostSavingsPercentage: 20.7,
                                    totalConsumptionSavings: 11,
                                    totalConsumptionSavingsPercentage: 20.7
                                }
                            },
                            {
                                meterId: '',
                                meterNumber: 'Meter2',
                                meterType: '',
                                aggregations: {
                                    actualConsumption: 2000,
                                    actualCost: 2000,
                                    baselineConsumption: 3000,
                                    baselineCost: 3000,
                                    totalCostSavings: 11,
                                    totalCostSavingsPercentage: 20.7,
                                    totalConsumptionSavings: 13.3,
                                    totalConsumptionSavingsPercentage: 10.5
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
}