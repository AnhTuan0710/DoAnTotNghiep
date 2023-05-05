import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

function Dashboard() {

  const data = [
    {
      name: 'Tháng 1',
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Tháng 2',
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Tháng 4',
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Tháng 5',
      pv: 2400,
      amt: 2290,
    },
    {
      name: 'Tháng 6',
      pv: 2400,
      amt: 2290,
    },
    {
      name: 'Tháng 7',
      pv: 3453,
      amt: 2290,
    },
    {
      name: 'Tháng 3',
      pv: 2343,
      amt: 2290,
    },
    {
      name: 'Tháng 8',
      pv: 4545,
      amt: 2290,
    },
    {
      name: 'Tháng 9',
      pv: 4653,
      amt: 2290,
    },
    {
      name: 'Tháng 10',
      pv: 0,
      amt: 2290,
    },

  ];

  return (
    <div>
      <LineChart width={800} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="pv" stroke="green" strokeWidth={2} dot={{ strokeWidth: 2 }} activeDot={{ r: 6 }}/>
        <Tooltip labelStyle={{ color: '#333' }} />
      </LineChart>
    </div>
  );
}

export default Dashboard;
