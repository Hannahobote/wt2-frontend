import { useEffect, useState } from 'react';
//import { Bar } from "react-chartjs-2";
//import { Chart as ChartJS } from "chart.js/auto";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, ReferenceLine, Line, LineChart} from 'recharts';

function App() {
  const [animeRecs, setAnimeRecs] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [planToWatchData, setPlanToWatchData] = useState([])


  useEffect(() => {
    async function data() {
      await fetch('https://wt2-backend.onrender.com')
        .then(res => res.json())
        .then(animeData => {
          let tempData = []
          let tempPlanData = []
          animeData.map(anime => {
            tempPlanData.push({ 'English name': Object.values(anime._source)[0], 'Plan to watch': Object.values(anime._source)[1] })
            tempData.push({ 'English name': Object.values(anime._source)[0], 'Score': anime._source.Score })
          })

          setAnimeRecs(tempData.slice(0, 10))
          setPlanToWatchData(tempPlanData.slice(0,10))
          setLoading(false)
        })
    }

    data()
  }, [])

  const newData = [animeRecs[0], animeRecs[animeRecs.length - 1]]

  if (isLoading) return <p>Loading...</p>
  if (!animeRecs) return <p>No Anime data</p>

  // Make components??
  console.log(planToWatchData)
  return (
    <div className="App">
      HELLLLLLO

      <BarChart
        width={1500}
        height={300}
        data={animeRecs}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Enlish name" />
        <YAxis allowDecimals="true" dataKey="Score" domain={[8.5, 9.20]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="English name" fill="#8884d8" />
        <Bar dataKey="Score" fill="#82ca9d" />
      </BarChart>

      <BarChart
        width={500}
        height={300}
        data={newData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="English name" />
        <YAxis dataKey="Score" domain={[8.5, 9.5]} />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="English name" fill="#8884d8" />
        <Bar dataKey="Score" fill="#82ca9d" />
      </BarChart>

      <LineChart
        width={1500}
        height={500}
        data={planToWatchData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="English name" />
        <YAxis dataKey="Plan to watch" />
        <Tooltip />
        <Line dataKey="Plan to watch" connectNulls type="monotone" stroke="#8884d8" fill="#8884d8"  dot={true}/>
      </LineChart>

    </div>
  );
}

export default App;
