import React from 'react';
import Main from '../../Components/Main';
import Rows from '../../Components/Rows/Rows';
import requests from '../../Requests';

const Home = () => {
  return (
    <div>
      <Main />
      <Rows rowID='1'  title='UpComing' fetchURL={requests.requestUpcoming} />
      <Rows rowID='2'  title='Popular' fetchURL={requests.requestPopular} />
      <Rows rowID='3'  title='Trending' fetchURL={requests.requestTrending} />
      <Rows rowID='4'  title='Top Rated' fetchURL={requests.requestTopRated} />
      <Rows rowID='5' title='Horror' fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
