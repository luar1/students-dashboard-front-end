import React, { useState } from 'react';
import { Calendar, Badge,Space} from 'antd';
import './HomePage.css';
function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  
const CalendarHome = () => {
    return (
      <Space direction="vertical">
        <div className="cal-home">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>

      <div className="cal-legend">
        <Badge status="success" text="Week Start" />
        <br />
        <Badge status="error" text="Mentor Session" />
        <br />
        <Badge status="default" text="Due Day" />
        <br />
        <Badge status="processing" text="Holiday" />
      </div>
      </Space>
  );
}



export default CalendarHome;