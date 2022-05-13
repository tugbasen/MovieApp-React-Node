import React from 'react'

import MovieList from '../components/MovieList';
import MovieFilters from '../components/MovieFilters';

const MainScreen = () => {

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <MovieFilters/>
            </div>
            <div className='col-10'>
                <MovieList />
            </div>
        </div>
    </div>
  )
}

export default MainScreen;