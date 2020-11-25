/** @format */

import React from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
class FullCalendarDashboard extends React.Component {
    state = {
        weekendsVisible: true,
        visible: false,
        currentEvents: [],
    };

    showModal = (selectInfo) => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleDateSelect = (selectInfo) => {
        let title = prompt("Please enter a new title for your event");
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });
        }
    };

    render() {
        return (
            <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}>
                <Modal
                    title="Add Event"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <form>
                        <label for="event">Event Name:</label>
                        <input type="text"></input>
                    </form>
                </Modal>
                {this.renderSidebar()}
                <div className="container-fluid">
                    <FullCalendar
                        theme={true}
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={this.state.weekendsVisible}
                        themeSystem="Lux"
                        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                        select={this.handleDateSelect}
                        eventContent={renderEventContent} // custom render function
                        eventClick={this.showModal}
                        eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                        /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
                    />
                </div>
            </div>
        );
    }

    renderSidebar() {
        return <div className="demo-app-sidebar"></div>;
    }

    handleWeekendsToggle = () => {
        this.setState({
            weekendsVisible: !this.state.weekendsVisible,
        });
    };

    handleDateSelect = (selectInfo) => {
        let title = prompt("Please enter a new title for your event");
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });
        }
    };

    handleEventClick = (clickInfo) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${clickInfo.event.title}'`
            )
        ) {
            clickInfo.event.remove();
        }
    };

    handleEvents = (events) => {
        this.setState({
            currentEvents: events,
        });
    };
}

function renderEventContent(eventInfo) {
    return (
        <>
            <div>
                <strong> {eventInfo.timeText} </strong>
                <span>
                    <em> {eventInfo.event.title} </em>
                </span>
            </div>
        </>
    );
}
function renderSidebarEvent(event) {
    return (
        <li key={event.id}>
            <strong>
                {formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}
            </strong>
            <em>{event.title}</em>
        </li>
    );
}
export default FullCalendarDashboard;
