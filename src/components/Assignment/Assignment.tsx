import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestData } from './AssignmentActions';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { stat } from 'fs';
import { renderToString } from 'react-dom/server'
import './Assignment.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

type stateType = {
    dashboard: {
        data: {
            data: any
        }
    }
};
type datapointType = {
    thmBaseline: number[],
    thmActual: number[],
    BaselineCost: number[],
    ActualCost: number[]
}
type AssigmentProps={
    store:any;
}
function Assignment() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requestData());
    }, [])

    const state = useSelector((state: any) => state.dashboard?.data?.data);
    // console.log({state});
    let monthdata = state?.regions[0]?.facilities[0]?.monthwiseAggregations;
    const overallData=state?.regions[0]?.facilities[0]?.totalAggregations;
    let rowData: datapointType = {
        thmBaseline: [],
        thmActual: [],
        BaselineCost: [],
        ActualCost: []
    };
    monthdata?.forEach((consumtnData: any) => {
        rowData.thmBaseline.push(consumtnData.baselineConsumption);
        rowData.thmActual.push(consumtnData.actualConsumption);
        rowData.BaselineCost.push(consumtnData.baselineCost);
        rowData.ActualCost.push(consumtnData.actualCost);
    });

    // console.log({ monthdata }, { rowData })

    const yxisFormating = (value: number) => {
        return value / 1000;
    }
    const header = () => {
        let header = renderToString(
            <div className='wrapper'>
                <div style={{ marginBottom: '5px' }}>Gas Performance
                <InfoOutlinedIcon style={{fontSize:'22px',marginLeft:'5px',verticalAlign:'sub'}}></InfoOutlinedIcon>
                </div>
                <div className='dashboard-stats'>
                    <div className='stat-div' style={{padding:'0'}}>
                        <div>{overallData?.totalActualConsumption}thm</div>
                        <div className='stat-text'>Actual</div>
                    </div>
                    <div className='stat-div'>
                        <div>{overallData?.totalBaselineConsumption}thm</div>
                        <div className='stat-text'>Baseline</div>
                    </div>
                    <div className='stat-div'>
                        <div>{overallData?.totalConsumptionSavings}thm 
                            <span className='green-text'>
                                <span className="green-dot"></span>
                                <span>{overallData?.totalConsumptionSavingsPercentage}%</span>
                            </span></div>
                            <div className='stat-text'>Saving</div>
                    </div>
                    <div className='separator'></div>
                    <div className='stat-div'>
                        <div>${overallData?.totalActualCost}</div>
                        <div className='stat-text'>Actual Cost</div>
                    </div>
                    <div className='stat-div'>
                        <div>${overallData?.totalBaselineCost}</div>
                        <div className='stat-text'>Baseline Cost</div>
                    </div>
                    <div className='stat-div'>
                        <div>${overallData?.totalCostSavings} 
                            <span className='green-text'>
                                <span className="green-dot"></span>
                                <span>{overallData?.totalCostSavingsPercentage}%</span>
                            </span></div>
                            <div className='stat-text'>Savings</div>

                    </div>
                </div>
            </div>
        );
        return header;

    }
    const options: Highcharts.Options = {
        chart: {
            backgroundColor: '#303030',
        },
        title: {
            text: header(),
            align: 'left',
            useHTML: true
        },
        plotOptions: {
            series: {
                borderColor: 'none'
            }
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June']
        },
        yAxis: [{
            // max: 3200,
            // maxRange:3,
            // floor:0,
            // ceiling:3200,
            className: 'highcharts-color-0',
            title: {
                text: ''
            },
            labels: {
                format: '{value}thm',
            },
            tickAmount: 3,
            // tickInterval: 1600,
        }, {
            // max: 9600,
            // maxRange:10,
            // floor:0,
            // ceiling:9600,
            className: 'highcharts-color-1',
            opposite: true,
            title: {
                text: ''
            },
            labels: {
                formatter: function () {
                    // var label = this.axis.defaultLabelFormatter.call(this);
                    var label = '$' + (parseInt(this.value.toString()) / 1000).toString() + 'K';
                    return label;
                    // Use thousands separator for four-digit numbers too
                }
            },

            tickAmount: 3,
            // tickInterval: 4800,
        }],
        series: [

            {
                name: 'thm Baseline',
                type: 'column',
                data: rowData.thmBaseline,
                color: '#606062',
                yAxis: 0,
            },
            {
                name: 'thm Actual',
                type: 'column',
                color: '#1372b2',
                data: rowData.thmActual,
                yAxis: 0
            },
            {
                name: '$ Baseline Cost',
                type: 'line',
                data: rowData.BaselineCost,
                color: '#a97521',
                yAxis: 1,
                dashStyle: 'Dash',
                marker: {
                    symbol: 'circle'
                }
            },
            {
                name: '$ Actual Cost',
                type: 'line',
                data: rowData.ActualCost,
                color: '#f8b231',
                yAxis: 1,
                marker: {
                    symbol: 'circle'
                }
            }
        ],
        legend: {
            itemStyle: {
                color: '#66665F'
            },

        }
    };

    return (
        <div data-test="Assignment-Dashboard">
            <span className='test'>
                test
            </span>
            {/* <HighchartsReact
                highcharts={Highcharts}
                options={options}
            /> */}
        </div>
    )
}

export default Assignment
