import { useState } from "react";
import CardGrid from "./components/Card";
import Header from "./components/Header";
import frog1 from './frog1.png'
import frog2 from './frog2.jpg'
import frog3 from './frog3.png'
import frog4 from './frog4.png'
import frog5 from './frog5.png'
import frog6 from './frog6.jpg'
import frog7 from './frog7.png'
import frog8 from './frog8.jpg'
import frog9 from './frog9.png'
import frog10 from './frog10.png'
import frog11 from './frog11.jpg'
import frog12 from './frog12.png'
import frog13 from './frog13.jpg'
import frog14 from './frog14.jpeg'
import frog15 from './frog15.png'


function App() {

  const [items, setItems] = useState([
    {
      val: 1,
      title: "Sadie Croaker",
      img: frog1
    },
    {
      val: 2,
      title: "Anne Boonchuy",
      img: frog2
    },
    {
      val: 3,
      title: "Captain Grim",
      img: frog3
    },
    {
      val: 4,
      title: "Hop Pop Plantar",
      img: frog4
    },
    {
      val: 5,
      title: "Leopold Loggle",
      img: frog5
    },
    {
      val: 6,
      title: "Maddie Flour",
      img: frog6
    },
    {
      val: 7,
      title: "Polly Plantar",
      img: frog7
    },
    {
      val: 8,
      title: "Sasha",
      img: frog8
    },
    {
      val: 9,
      title: "Sprig Plantar",
      img: frog9
    },
    {
      val: 10,
      title: "Sylvia Sundew",
      img: frog10
    },
    {
      val: 11,
      title: "Mayor Toadstool",
      img: frog11
    },
    {
      val: 12,
      title: "Wally",
      img: frog12
    },
    {
      val: 13,
      title: "Trotonio Espada",
      img: frog13
    },
    {
      val: 14,
      title: "Frobo",
      img: frog14
    },
    {
      val: 14,
      title: "Frobo",
      img: frog15
    },

  ])

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const assignBestScore = (score, bestScore) => {
    if (score > bestScore) {
      setBestScore(score)
    } else {
      setBestScore(bestScore)
    }
  }

  const incrementScore = (currScore) => {
    setScore(currScore)
}

const resetScore = (currScore) => {
    setScore(currScore)
}


  return (

    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <CardGrid items={items} score={score} incrementScore={incrementScore} resetScore={resetScore} assignBestScore={assignBestScore} bestScore={bestScore} />
    </div>
  );
}

export default App;
