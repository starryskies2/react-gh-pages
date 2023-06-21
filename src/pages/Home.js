/** @format */

import React from "react";
import selfi from "../pics/image.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Elichay ben zohar</h2>
        <div className="prompt">
          <p>
            im 25yo guy from isreal,im learning FrontEnd and BackEnd to be a full stack
            web developer
          </p>
          <img src={selfi} alt="profile-pic" class="avatar" />
        </div>
      </div>

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>frontEnd</h2>
            <span>ReactJS, HTML, CSS,JavaScript</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              to be continued{" "}
              {/* NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer, MySQL,
                MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL */}
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript,C#,</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
