import "./App.css";
import Navbar from "./components/Navbar";
import picOne from "./pics/picOne.jpeg";
import picTwo from "./pics/picTwo.jpeg";
import picThree from "./pics/picThree.jpg";
import picFour from "./pics/picFour.png";
import picSix from "./pics/picSix.jpg";
import picFive from "./pics/picFive.jpeg";

function App() {
  return (
    <div>
      <header className="App-header">
        <Navbar />
      </header>
      <div className="App">
        <div className="homepage-pics">
          <img src={picOne} className="picOne" />
          <div className="middle-pics">
            <img src={picTwo} className="picTwo" />
            <img src={picThree} className="picThree" />
          </div>
          <div className="middle-pics-secondGroup">
            <img src={picSix} className="picSix" />
            <img src={picFour} className="picFour" />
          </div>
          <img src={picFive} className="picFive" />
        </div>
        <div className="footer">
          <div
            className="instagram"
            onClick={() =>
              (window.location.href =
                "https://instagram.com/sh_ramziiii?igshid=ZDdkNTZiNTM=")
            }
          >
            <ion-icon name="logo-instagram" size="large"></ion-icon>
          </div>
          <p>MADE BY RAMZI</p>
        </div>
      </div>
    </div>
  );
}

export default App;
