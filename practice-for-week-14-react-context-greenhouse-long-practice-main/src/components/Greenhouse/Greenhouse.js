import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import { useContext } from 'react';
import './Greenhouse.css';
import { ThemeContext } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const {themeName} = useContext(ThemeContext)
  const image = themeName === "day" ? (
    <>
      <img  className='greenhouse-img'
      src={dayImage}
      alt='greenhouse'></img> 
    </>
  ) : (
    <>
      <img className='greenhouse-img'
      src={nightImage}
      alt='greenhouse' 
      />    
    </>
    )
    
    
    return (
      <section>
      {image}
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;