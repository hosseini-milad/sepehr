import { useState } from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import ServerStatus from './ServerStatus';
import mocks from './mocks.json';
import translation from '../../../translate/server-status';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const usageValues = ['Critical', 'High', 'Normal', 'Low', 'Idle'];
const sortOptions = ['usage', 'cpu_usage', 'ram_usage'];
const filterOptions = ['network1', 'network2'];

export default function ServerStatusPane({ data, className, lang }) {
  const [sortBy, setSortBy] = useState('usage');
  const [filterBy, setFilterBy] = useState([]);

  const sortServers = (data) => {
    return data.sort((server1, server2) => {
      const value1 = server1[sortBy];
      const value2 = server2[sortBy];

      return sortBy === 'usage'
        ? usageValues.indexOf(value1) - usageValues.indexOf(value2)
        : value2 - value1;
    });
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const filterByNetwork = (networks) => {
    return filterBy.length > 0
      ? /*data*/ mocks.filter((server) => filterBy.includes(server.network))
      : /*data*/ mocks;
  };

  const handleFilterByChange = (event) => {
    setFilterBy(event.target.value);
  };

  const Slides = sortServers(filterByNetwork(mocks)).map((status) => (
    <ServerStatus data={status} />
  ));

  return (
    <div className={`card ${className}`}>
      <div className="card-header pb-0">
        <h6>{translation.header[lang]}</h6>
      </div>

      <div className="card-body">

        <Carousel slides={Slides}></Carousel>
      </div>
    </div>
  );
}