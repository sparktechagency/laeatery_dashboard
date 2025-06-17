/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { useGetUserGrowthQuery } from '../../redux/features/dashboard/dashboardApi';
import UserGrowthLoading from '../loader/UserGrowthLoading';




const yearOptions = [
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030"
]

const UserGrowthChart = () => {
  const date = new Date();
  const currentYear = date.getFullYear().toString();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [barData, setBarData] = useState([])
  const {data, isLoading} = useGetUserGrowthQuery(selectedYear);

  useEffect(() => {
    if (!isLoading && data) {
      const result = data?.data?.data;
      const formatted = result?.map((item:any) => ({
        month: item.month,
        users: item.count,
      }));
      setBarData(formatted)
    }
  }, [data, isLoading]);


  if(isLoading){
    return <UserGrowthLoading/>
  }



  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">User Growth</h2>
        <select
          className="border rounded px-2 py-1"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}

        </select>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barData}
            margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis
              domain={[0, 1000]}
              ticks={[0, 200, 400, 600, 800, 1000]}
              tickFormatter={(value) =>
                new Intl.NumberFormat('en').format(value)
              }
            />
            <Tooltip
              formatter={(value) => [
                new Intl.NumberFormat('en').format(value as number),
                'users',
              ]}
              cursor={{ fill: '#f0f0f0' }}
            />
            <Bar dataKey="users" fill="#0A0A0A" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowthChart;
