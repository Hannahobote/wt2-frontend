import { useEffect, useState } from 'react';
import MyBarChart from './components/MyBarChart';
import MyLineChart from './components/MyLineChart';

function App() {
  const [animeRecs, setAnimeRecs] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [planToWatchData, setPlanToWatchData] = useState([])


  useEffect(() => {
    async function data() {
      // Fetch data from backend.
      await fetch('https://wt2-backend.onrender.com')
        .then(res => res.json())
        .then(animeData => {
          let tempData = []
          let tempPlanData = []
          animeData.map(anime => {
            // set relevent data in the arrays.
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

  return (
    <div className="App">
      
      The data is obtained from MyAnimeList.net, which contains over 16000 animes with recommendation from over 320000 users. The graphs below consist of the top 10 highest-scoring animes. There were options to see how much each anime got from people who scored 10 stars, 9 stars, and so on.But for this app, we will only analyze the average total across all of these different scores.
      <br></br>
      <br></br>
      The bar chart represents the top 10 highest-scoring anime. On the y-axis is the score the anime received, and on the x-axis is the name of the anime. 
      <MyBarChart
        width={1000}
        heigth={500}
        data={animeRecs}
        domain={[8.5,9.5]}
        YAxisDataKey={"Score"}
        XAxisDataKey={"English name"}
      />


      <br></br>
      <br></br>
      This chart represents a visual difference between the average score between the 1st rank and 10th rank. According to this analysis, the difference is only 0.19.
      <MyBarChart
        width={500}
        heigth={300}
        data={newData}
        YAxisDataKey={"Score"}
        XAxisDataKey={"English name"}
        domain={[8.5,9.5]}
      />


      <br></br>
      <br></br>
      This line chart represents a visual difference between how many people have put this particular anime on their “plan to watch” list. This is sorted in the top 10 anime in descending order (based on their score and not the number of people that have “plan to watch” it).
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
