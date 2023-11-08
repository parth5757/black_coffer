import "./chart.scss"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
// import { BarChart, Bar, Cell, Legend,} from 'recharts';  //XAxis, YAxis, CartesianGrid, Tooltip, 
const data = [
  {name: "Jan", Total: 100,
  Day: [
    {name: 1, Total: 600},
    {name: 2, Total: 600},
  ]
  },
  {name: "Feb", Total: 1200},
  {name: "Mar", Total: 140},
  {name: "Apr", Total: 1200},
  {name: "May", Total: 2200},
  {name: "June", Total: 1120},
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Last 6 Month (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart width={730} height={400} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
export default Chart;