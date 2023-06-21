/** @format */

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import TerminalIcon from "@mui/icons-material/Terminal";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<MilitaryTechIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            serverd in combat position in the IDF
          </h3>
          <p> learned how to handle stress and pressure</p>
        </VerticalTimelineElement>
        {/* object  */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<MilitaryTechIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            served as none commison officer in ayosh brigade
          </h3>

          <p>
            {" "}
            learned how to handle and manage soilders under my command,create
            schedules,give fast response in life or death sitatuions
          </p>
        </VerticalTimelineElement>
        {/* object  */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2022"
          iconStyle={{ background: "#03c2fc", color: "#fff" }}
          icon={<BakeryDiningIcon />}
        >
          <h3 className="vertical-timeline-element-title">worked in a local bakery</h3>
          <h4 className="vertical-timeline-element-subtitle">tried CS degree</h4>
          <p></p>
        </VerticalTimelineElement>
        {/* object  */}
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2022 -present"
          iconStyle={{ background: "#0398fc", color: "#fff" }}
          icon={<TerminalIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            learning fullstack Web dev on my own{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p></p>
        </VerticalTimelineElement>
        {/* object  */}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
