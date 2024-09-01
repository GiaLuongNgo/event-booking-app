import React, { useState } from 'react';
import { useEventBookingContext } from '@/contexts/EventBookingContext';
import SelectDate from '@/components/contents/SelectDate';
import SearchLocation from '@/components/contents/SearchLocation';
import CardEvent from '@/components/contents/CardEvent';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const HomePage: React.FC = () => {
  const { events } = useEventBookingContext();
  const [sort, setSort] = useState<'asc' | 'desc'>('asc');
  const [search, setSearch] = useState('');

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sort === 'asc' ? dateA - dateB : dateB - dateA;
  });

  const filteredEvents = sortedEvents.filter((event) =>
    event.location.toLowerCase().includes(search.toLowerCase())
  );

  const eventCount = events.length;

  return (
    <div className='home-page'>
      <div className='home-filter'>
        <h2>Filters</h2>
        <SearchLocation value={search} onChange={setSearch} />
      </div>
      <div className="home-content">
        <div className="home-content__header">
          <h2 className="home-content__header__title">{eventCount} Upcoming Events</h2>
          <SelectDate className="home-content__header__sort" value={sort} onChange={setSort} />
        </div>
        <section className="home-content__grid">
          {filteredEvents.map((event) => (
            <Link key={event.id} to={`/event/${event.id}`}>
              <CardEvent item={event} />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
};

export default HomePage;