
import BarChart from '../../bar-chart/BarChart';
import './viz.scss';



export default function Viz({data, one, two}) {
    


    return (
        <div className='viz'>
            <BarChart  data={data} one={one} two={two}/>
        </div>
    )
}