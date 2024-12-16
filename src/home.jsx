import { Link } from "react-router-dom"; // Import the Link component
import './home.css'; // Import the CSS file
import DogProfile from "./assets/picme.jpg"; // Import the image

function Home() {
  return (
    <>
      Background (before container)
      <div className="home-background"></div>

      <div className="home">
        {/* Left side content (scrollable) */}
        <div className="info">
          <div className="hero">
            <h1>Hi, I'm <span className="highlight">Justen San Gabriel</span></h1>
            <h2>A Computer Science Student at NCF</h2>
            <p>
              I'm a passionate computer science student at Naga College Foundation. I'm on a journey to explore the world of coding, AI, and everything tech.
              <br />
              In my free time, I love exploring new technologies and solving complex problems. My main focus is on building meaningful, scalable, and efficient applications.
            </p>
            <div className="hero-buttons">
              <Link to="/About" className="btn primary-btn">Learn More</Link>
              <Link to="/Contact" className="btn secondary-btn">Contact Me</Link>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="hero-image-container">
          <img src={DogProfile} alt="Justen Sangabriel's Dog" className="profile-pic" />
        </div>
      </div>
    </>
  );
}

export default Home;
