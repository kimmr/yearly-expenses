import Bar from './Bar';
import './Graph.css';

const Graph = (props) => {
  const arrayValues = props.datas.map(data => data.value);
  const totalMaxValue = Math.max(...arrayValues); // 12 arguments than an array
  
  return <div className="graph">
    {props.datas.map(data => (
      <Bar
        key={data.label}
        value={data.value}
        maxValue={totalMaxValue}
        label={data.label}
      />
    ))}
  </div>;
};

export default Graph;
