//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Timer from "./Timer";

const App = props => {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);

  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(4);
  const [ballOn, setBallOn] = useState(21);
  const [quarter, setQuarter] = useState(1);

  const homeName = "Lions";
  const awayName = "Tigers";

  const teamScore = (team, score) => {
    if (team === homeName){
      setHome(home + score);
    } else {
      setAway(away + score);
    };
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <Timer />
          <div className="away">
            <h2 className="away__name">{awayName}</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        {/* <BottomRow /> */}
        <div className="bottomRow">
          <div className="down">
            <h3 className="down__title">Down</h3>
            <div className="down__value">{down}</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">To Go</h3>
            <div className="toGo__value">{toGo}</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Ball on</h3>
            <div className="ballOn__value">{ballOn}</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{quarter}</div>        
          </div>       
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => teamScore(homeName, 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => teamScore(homeName, 3)}>Home Field Goal</button>
        </div>
        <div className="quarterButton">
        <button className="quarterButton__change" onClick={() => {
          if (quarter === 4) {
            setQuarter(1);
            setHome(0);
            setAway(0);
          } else {
            setQuarter(quarter + 1);
          };
        }}>Change Quarter</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => teamScore(awayName, 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => teamScore(awayName, 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
