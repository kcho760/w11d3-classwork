import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from "../../context/ClimateContext";

function Thermometer() {

  const {temp, setTemp} = useClimate();
  let internalScopeTemp = temp;
  
  const interval = (val) => {
    
    if ( val > internalScopeTemp) {
      let id = setInterval(() => {
        setTemp((prevTemp) => {return prevTemp + 1});
        internalScopeTemp++;
        if (val === internalScopeTemp) {
          clearInterval(id);
        }
      }, 300);
    } else {
      let id = setInterval(() => {
        setTemp((prevTemp) => {return prevTemp - 1});
        internalScopeTemp--;
        if (val === internalScopeTemp) {
          clearInterval(id);
        }
      }, 300);    
    }
  }

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={temp}
        onAfterChange={(val) => {interval(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;