import { useEffect, useState } from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function App() {
  const [animeRecs, setAnimeRecs] = useState({})
  useEffect(() => {
    async function data() {
      const res = await fetch('https://wt2-backend.onrender.com')
        .then(res => res.json())
        .then(animeData => {

          setAnimeRecs({
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

        })
    }

    data()
  }, [])

  const fakeData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  console.log(animeRecs)
  return (
    <div className="App">
      HELLLLLLO
      <Bar data={fakeData} />
    </div>
  );
}

export default App;
