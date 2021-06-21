import './Bar.css';

const Bar = (props) => {
  let barFill = '0%';

  if (props.maxValue > 0) {
    barFill = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="bar">
      <div className="bar__inner">
        <div className="bar__fill" style={{ height: barFill }}></div>
        </div>
        <div className="bar__label">{props.label}</div>
      </div>
    
  );
};

export default Bar;
