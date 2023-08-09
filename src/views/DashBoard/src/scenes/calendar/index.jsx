import { useState } from "react";
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {Box,List,ListItem,ListItemText,Typography,useTheme} from '@mui/material'
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { formatDate } from "@fullcalendar/core";

const Calendar =() =>{

    const theme=useTheme()
    const colors= tokens(theme.palette.mode)
    const [currentEvents, setCurrentEvents] = useState([])

    const handleDateClick = (selected) =>{
        const title = prompt('Please enter a new title for your event')
        const calendarApi = selected.view.calendar
        calendarApi.unselect()

        if (title) {
            calendarApi.addEvent({
                id:`${selected.dateStr} - ${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,

            })
            
        }
    }
        const handleEventClick =(selected) => {
            if(
                window.confirm(
                    `Are you sure you want  to delete the event '${selected.event.title}'`
                )
            ){
                selected.event.remove()
            }
        }

        return (
            <Box marginTop="70px">
                <Header title='CALENDAR' subtitle='Full Calendar Interactive Calendar' />
                <Box display='flex' justifyContent='space-between'>

                    {/*Calendar SideBar */}
                    <Box flex='1 1 20%'
                     backgroundColor={colors.primary[400]} 
                     padding='15px'
                     borderRadius='4px'>

                        <Typography variant="h5">
                            Events
                        </Typography>
                        <List>
                            {currentEvents?.map((event)=>(
                                <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: '10px 0',
                                    borderRadius: '2px',
                                }}
                                >
                                    <ListItemText
                                        primary={event.title}
                                        secondary={
                                            <Typography>
                                                 {formatDate(event.start,{
                                        year:'numeric',
                                        month:'short',
                                        day:'numeric'
                                    })}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    {/*CALENDAR */}
                    <Box flex='1 1 100%' ml='15px'>
                        <FullCalendar 
                        height='75vh'
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        headerToolbar={{
                            left: 'prev, next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick} //run the event handler
                         eventClick={handleEventClick}
                         eventsSet={(events)=> setCurrentEvents(events)} // save the event
                         initialEvents={[
                            {id:'1234',title:'All-day event',date:'2022-09-14'},
                            {id:'1235',title:'Timed event',date:'2023-07-26'}, 
                         ]}
                        />
                    </Box>
                </Box>
            </Box>
        )

}

export default Calendar