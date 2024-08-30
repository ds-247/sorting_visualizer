import BarChart from '../../bar-chart/BarChart';
import './viz.scss';

const data = [
  142, 23, 22, 23, 42, 43, 200, 122, 13, 42, 56, 127, 76, 54, 3, 142, 23, 22,
  23, 42, 43, 200, 122, 13, 42, 56, 127, 76, 54, 3, 142, 23, 22, 23, 42, 43,
  200, 122, 13, 42, 56, 127, 76, 54, 3
];

export default function Viz() {
    return (
        <div className='viz'>
            <BarChart  data={data}/>
        </div>
    )
}