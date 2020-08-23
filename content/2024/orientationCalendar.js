import { Calendar } from "@fullcalendar/core"
import timeGridPlugin from "@fullcalendar/timegrid"
import React, { Component } from "react"
import styles from "./orientationCalendar.module.scss"
import events from "../../src/data/events_parsed.json"

class OrientationCalendar extends Component {
  constructor(props) {
    super(props)

    this.cal = React.createRef()
  }

  componentDidMount() {
    const calEl = this.cal.current;

    if (!calEl) {
      console.error("calendar element is null")
      return
    }

    const cal = new Calendar(calEl, {
      plugins: [ timeGridPlugin ],
      slotMinTime: "07:00:00T-4:00",
      slotMaxTime: "22:59:00T-4:00",
      initialView: "timeGridWeek",
      headerToolbar: {
        center: `timeGridWeek,timeGridDay`
      },
      footerToolbar: {
        start: `title`,
        center: `timeGridWeek,timeGridDay`,
        end: 'today prev,next'
      },
      height: 1500,
      stickyHeaderDates: true,
      nowIndicator: true,
      events: events,
      expandRows: true,
      eventBackgroundColor: "#7b7b7b",
      eventBorderColor: "#555",
      eventClick: function(info) {
        info.jsEvent.preventDefault(); // don't let the browser navigate

        if (info.event.url) {
          window.open(info.event.url);
        }
      }
    })

    cal.render()
  }

  render() {
    return (
      <div className={styles.calendar}>
        <div ref={this.cal}></div>
      </div>
    )
  }
}

export default OrientationCalendar