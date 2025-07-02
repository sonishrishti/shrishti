import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './App.css'
import timelineElements from './timelineElements';

function App() {
  let IconStyle = {background: "white"}

  return (
    <>
      <div className="app-container">
        <div className="intro">
          <h1>Jai Shri Krishna</h1>
          <p className="name">I am Shrishti Soni.</p>
        </div>
      </div>

      <div className="second-section">
        <div className="education">
          <h1>Education</h1>
          {/*Outer {} tells React you’re injecting JavaScript. 
          Inner { textAlign: "center" } is the actual JavaScript object */}
          <VerticalTimeline>
            {
              timelineElements.map(element => {
                return (
                  <VerticalTimelineElement
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={IconStyle}
                  >
                    <h3 className="vertical-timeline-element-title">{element.name}</h3>
                    <h5 className="vertical-timeline-element-subtitle">
                      {element.location}
                    </h5>

                  </VerticalTimelineElement>
                )
              })
            }
          </VerticalTimeline>
        </div>
        <div className = "workex">
          max
        </div>
      </div>
        

      <div className = "aboutme">
        <h1>About me</h1>
      </div>
    </>

  );
}

export default App
