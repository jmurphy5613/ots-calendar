import './App.css';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";



function App() {

  const events = [{ title: "today's event", date: new Date(2022, 6, 19) }];

  return (
    <div className="App">
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
      />
    </div>
  );
}

export default App;
