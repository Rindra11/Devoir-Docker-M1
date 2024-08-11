import React from 'react'
import Widget from './Widget'
import { LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts';


const data = [
    { name: 'Jan', uv: 400 },
    { name: 'Feb', uv: 300 },
    { name: 'Mar', uv: 200 },
    // etc.
    ];


function Dashboard() {
    return (
        <div className='dashboard'>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
            <Widget title="Users" value="1,234" />
            <Widget title="Users" value="$12,345" />
        </div>
    )
    }

    export default Dashboard



