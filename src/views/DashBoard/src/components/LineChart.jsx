import { ResponsiveLine } from "@nivo/line";
//import { mockLineData as data} from "../data/mockData";
import { tokens } from "../theme"
import { useTheme } from "@mui/material"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllSales } from "../../../../Redux/actions"

const LineChart = (isDashboard = false) =>{

    const dispatch = useDispatch();

    const allSalesStats = useSelector(state => state.LocalPersist.allSalesStats);
    console.log(allSalesStats)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    
    const transformedData = allSalesStats?.reduce((result, sale) => {
        const { user_country, book_genre, book_quantity } = sale;
       
        let countryEntry = result?.find((entry) => entry.id === user_country);
        if (!countryEntry) {
            const newColor = getRandomColor();
            countryEntry = { id: user_country, data: [], color: newColor };
            result?.push(countryEntry);
        }
        
        const existingDataPoint = countryEntry.data?.find(dataPoint => dataPoint.x === book_genre);
        if (existingDataPoint) {
            existingDataPoint.y += book_quantity;
        } else {
            countryEntry.data?.push({ x: book_genre, y: book_quantity, color: countryEntry.color }); 
        }    
        return result;
    }, []);
    console.log(transformedData)

    useEffect(() => {
        dispatch(getAllSales())  
    }, [dispatch])   
    

    return (
        <ResponsiveLine
        data={transformedData}
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
                        strokeWidth: 1
                    },
                    text:{
                        fill:colors.grey[100]
                    }
                }
            },
            legends:{
                text:{
                    fill: colors.grey[100]
                }
            },
            tooltip:{
                container:{
                    color: colors.primary[500],
                }
            }
        }}
        colors={(d) => d.color}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'genre',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient:'left',
            tickValues:5,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'quantity',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        />
    )
}

export default LineChart