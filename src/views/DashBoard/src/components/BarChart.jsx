import { useTheme } from "@mui/material"
import { ResponsiveBar } from "@nivo/bar"
import { tokens } from "../theme"
//import { mockBarData as data} from "../data/mockData"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSalesByGenre } from "../../../../Redux/actions"

const BarChart = ({isDashboard = false}) =>{

    const dispatch = useDispatch();

    const genreStats = useSelector(state => state.LocalPersist.genreStats);
    console.log(genreStats)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    useEffect(() => {
        dispatch(getSalesByGenre())  
    }, [dispatch])  

    const data = genreStats?.map((item, index) => ({
        id: item.genre,
        genre: item.genre,
        sales: item.sales,
        color: colors[index % colors?.length],
    }));
    console.log(data)

    return (
        <ResponsiveBar
        data={data}
        theme={{
            axis:{
                domain:{
                    line:{
                        stroke: colors.grey[100]
                    }
                },
                legend:{
                    text:{
                        fill:colors.grey[100]
                    }
                },
                ticks:{
                    line:{
                        stroke:colors.grey[100],
                        strokeWidth:1
                    },
                    text:{
                        fill: colors.grey[100]
                    }
                }
            },
            legends:{
                text:{
                    fill: colors.grey[100],
                }
            }
        }}
        keys={["sales"]}
        indexBy="genre"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear", min: 0, max: "auto" }}
        indexScale={{ type: 'band', round: true }}
        colorBy={bar => bar.data.color}
        // defs={[
        //     {
        //         id: 'dots',
        //         type: 'patternDots',
        //         background: 'inherit',
        //         color: '#38bcb2',
        //         size: 4,
        //         padding: 1,
        //         stagger: true
        //     },
        //     {
        //         id: 'lines',
        //         type: 'patternLines',
        //         background: 'inherit',
        //         color: '#eed312',
        //         rotation: -45,
        //         lineWidth: 6,
        //         spacing: 10
        //     }
        // ]}
        // fill={[
        //     {
        //         match: {
        //             id: 'fries'
        //         },
        //         id: 'dots'
        //     },
        //     {
        //         match: {
        //             id: 'sandwich'
        //         },
        //         id: 'lines'
        //     }
        // ]}
        // borderColor={{
        //     from: 'color',
        //     modifiers: [
        //         [
        //             'darker',
        //             1.6
        //         ]
        //     ]
        // }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'genre',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'sales',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        // legends={[
        //     {
        //         dataFrom: 'keys',
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 120,
        //         translateY: 0,
        //         itemsSpacing: 2,
        //         itemWidth: 100,
        //         itemHeight: 20,
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 0.85,
        //         symbolSize: 20,
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in genre: "+e.indexValue}
    />
    )
}

export default BarChart