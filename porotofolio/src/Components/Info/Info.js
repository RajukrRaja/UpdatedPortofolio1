import React from 'react';
import './Info.css';

function Info() {
  return (
    <div className="info-container">
      <div className="info-section">
        <div className="image-section">
          <img
            src="https://media.istockphoto.com/id/1271958351/photo/im-a-big-boy-now.jpg?s=612x612&w=0&k=20&c=dsKUyWI9g_vwgH94Bl7EtifPAREloHKfxgG5UOsDBjo="
            alt="My Achievement"
          />
        </div>
        <div className="content-section">
          <h1>My Achievements</h1>
          <div className="achievement-group">
            <div className="achievement-subgroup">
              <h3>Certification</h3>
              <ul>
                <li>5 times Topper in My College</li>
                <li>Selected in Hackathon at My College</li>
                {/* Add more achievements here */}
              </ul>
            </div>
            <div className="achievement-subgroup">
              <h3>B.Tech</h3>
              <ul>
                <li>5 times Topper in My College</li>
                <li>Selected in Hackathon at My College</li>
                {/* Add more achievements here */}
              </ul>
            </div>
            <div className="achievement-subgroup">
              <h3>Diploma</h3>
              <ul>
                <li>Your Diploma achievements go here</li>
                <li>You can add more achievements here</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;

export { Info }; // Export the Info component

// In another file where you want to use the same component, import it like this:
// import { Info } from './Info'; // Adjust the import path as needed
