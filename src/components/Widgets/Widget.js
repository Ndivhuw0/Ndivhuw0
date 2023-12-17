import { useState } from "react";
import "./styles.css";

const menuHeight = getComputedStyle(document.documentElement).getPropertyValue(
  "--menu-height"
);

const buttons = ["University of The Western Cape", "SAGEA"];

export const Widget = () => {
  const [activeBlock, setActiveBlock] = useState(0);

  const toggleMenuBlock = (index) => {
    setActiveBlock(index);
  };

  return (
    <div className="experience" id="experience">
        <h3 className="sectionTitle-2">Where I have Worked</h3>
      <article className="card">
        <div className="buttons">
          {buttons.map((button, index) => (
            <button
              className={index === activeBlock ? "active" : ""}
              onClick={() => toggleMenuBlock(index)}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="wrapper">
          <div
            className="content"
            style={{
              translate: `0 calc(0px - ${menuHeight} * ${activeBlock})`,
            }}
          >
            <div className="block">
                <h2></h2>
              <h2>Tutor</h2>
              <h4>February 2022 - November 2023</h4>
              <p>
                <ul>
                    <li>Appointed as a tutor for the IFS131 and IFS132 courses in the faculty of Economics Management Science</li>
                    <li>Responsible for marking tutorials and assignments</li>
                    <li>Facilitating tutorial and consultation sessions</li>
                    <li>Assisting students when required</li>
                </ul>
              </p>
            </div>
            <div className="block">
                <h2></h2>
              <h2>Intern</h2>
              <h4>January 2023 - February 2023</h4>
              <p>
                <ul>
                    <li>Exposure to real-life work experience with FirstRand, Absa, and Nedbank</li>
                    <li>Exposure to data: framing, exploration, interpretation, modelling, and visualisation</li>
                    <li>Development of core skills: critical thinking, creativity, collaboration & communication</li>
                    <li>Team-based projects facilitated by FirstRand, Absa, and Nedbank</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
