import { useEffect, useState } from 'react';
//import { Bar } from "react-chartjs-2";
//import { Chart as ChartJS } from "chart.js/auto";
import MyBarChart from './components/MyBarChart';
import MyLineChart from './components/MyLineChart';

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
          setPlanToWatchData(tempPlanData.slice(0, 10))
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

      <MyBarChart
        width={2500}
        heigth={300}
        data={animeRecs}
        YAxisDataKey={"Score"}
        XAxisDataKey={"English name"}
      />

      <MyBarChart
        width={500}
        heigth={300}
        data={newData}
        YAxisDataKey={"Score"}
        XAxisDataKey={"English name"}
      />

      <MyLineChart
        width={1500}
        heigth={300}
        data={planToWatchData}
        YAxisDataKey={"Plan to watch"}
        XAxisDataKey={"English name"}
      />
    </div>
  );
}

export default App;
