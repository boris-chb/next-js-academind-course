import React from 'react';
import EventList from '../../components/EventList';
import { getAllEvents } from '../../dummy-data';

const EventsListPage = () => {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default EventsListPage;