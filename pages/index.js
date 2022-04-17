import React from 'react';
import EventList from '../components/EventList';
import { getFeaturedEvents } from '../dummy-data';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return <EventList items={featuredEvents} />;
};

export default HomePage;
