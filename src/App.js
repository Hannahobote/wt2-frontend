import { useEffect, useState } from 'react';
//import { Bar } from "react-chartjs-2";
//import { Chart as ChartJS } from "chart.js/auto";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, ReferenceLine} from 'recharts';

function App() {
  const [animeRecs, setAnimeRecs] = useState([])
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    async function data() {
      const res = await fetch('https://wt2-backend.onrender.com')
        .then(res => res.json())
        .then(animeData => {
          let tempData = []
         animeData.map(anime =>{
          tempData.push({'English name': Object.values(anime._source)[0], 'Score': anime._source.Score})
         })

         setAnimeRecs(tempData)
         setLoading(false)
          // structre data for chart
          /*setAnimeRecs({
            lables: animeData.map(anime => anime._source.Score),
            datasets: [
              {
                lable: 'Top 10 scored animes',
                data: animeData.map(anime => Object.values(anime._source)[0]),
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
              }
            ]
          })

          // load page
          setLoading(false)*/
        })
    }

    data()
  }, [])

  if (isLoading) return <p>Loading...</p>
 // if (animeRecs) return <div> <Bar data={animeRecs} /> </div>
  if (!animeRecs) return <p>No Animedata</p>

  // compare avarage scorre????
  // compare avaregae anime lenth
  console.log(animeRecs[0], animeRecs[animeRecs.length - 1])
  const newData = [animeRecs[0], animeRecs[animeRecs.length - 1]]
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
          <YAxis allowDecimals="true" dataKey="Score" domain={[8.5,9.20]} />
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
          <YAxis dataKey="Score" domain={[8.5,9.5]} />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="English name" fill="#8884d8" />
          <Bar dataKey="Score" fill="#82ca9d" />
        </BarChart>

    </div>
  );
}

export default App;
