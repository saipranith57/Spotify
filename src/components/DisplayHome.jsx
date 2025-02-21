import React from 'react';
import NavBar from './NavBar'; // Import the NavBar component
import { albumsData, songsData } from '../assets/assets';
import AlbumItems from './AlbumItems';
import SongsItemcd  from './SongsItem';
const DisplayHome = () => {
  return (
    <>
      <NavBar /> {/* Correct way to include NavBar */}
      <div className='mb-4'>
        <h1>Featured Charts</h1>  
        <div className='flex overflow-auto'>
        {albumsData.map((item,idx)=>(<AlbumItems key={idx} name={item.name} desc={item.desc} image={item.image}/>))}
        </div> 
      </div>
      <div className='mb-4'>
        <h1>To Days Biggest hits</h1>  
        <div className='flex overflow-auto'>
        {songsData.map((item,idx)=>(<SongsItem key={idx} name={item.name} desc={item.desc} image={item.image}/>))}
        </div> 
      </div>
   
    </>
  );
};

export default DisplayHome; 
