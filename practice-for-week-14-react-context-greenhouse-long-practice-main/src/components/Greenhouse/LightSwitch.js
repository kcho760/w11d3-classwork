import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext.js';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  const handleClick = (e) => {
    if (themeName === 'day') {
      let day = document.getElementsByClassName('on');
      let night = document.getElementsByClassName('off');
      day.className = 'off';
      night.className = 'on';
      setThemeName('night');
    } else {
      let day = document.getElementsByClassName('off');
      let night = document.getElementsByClassName('on');
      day.className = 'on';
      night.className = 'off';
      setThemeName('day');
    }
  }




  return (
    <div className={`light-switch${themeName}`}>
      <div className="on" onClick={handleClick}>DAY</div>
      <div className="off" onClick={handleClick}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;