import React from "react";
import "./Internship.scss";
import { Link } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Funnel from "../../Utils/images/Funnel.png";
import Row from "../../Utils/images/Row.png";
import DownArrow from "../../Utils/images/arrow-square-down.png";

// icons
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

const Internship = () => {
  // dummy data
  const InternshipData = [
    {
      id: 1,
      title: "Product Design GVI",
      desc: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: " 120 days ",
      createDate: "(created on 10/12/2021)",
      price: "20,000",
      icons: [<LeaderboardIcon />, <PeopleAltIcon />, <WorkspacesIcon />],
    },
    {
      id: 1,
      title: "Product Design GVI",
      desc: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: " 120 days ",
      createDate: "(created on 10/12/2021)",
      price: "20,000",
      icons: [<LeaderboardIcon />, <PeopleAltIcon />, <WorkspacesIcon />],
    },
    {
      id: 1,
      title: "Product Design GVI",
      desc: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: " 120 days ",
      createDate: "(created on 10/12/2021)",
      price: "20,000",
      icons: [<LeaderboardIcon />, <PeopleAltIcon />, <WorkspacesIcon />],
    },
    {
      id: 1,
      title: "Product Design GVI",
      desc: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: " 120 days ",
      createDate: "(created on 10/12/2021)",
      price: "20,000",
      icons: [<LeaderboardIcon />, <PeopleAltIcon />, <WorkspacesIcon />],
    },
    {
      id: 1,
      title: "Product Design GVI",
      desc: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint.",
      days: " 120 days ",
      createDate: "(created on 10/12/2021)",
      price: "20,000",
      icons: [<LeaderboardIcon />, <PeopleAltIcon />, <WorkspacesIcon />],
    },
  ];

  return (
    <div className="internship">
      {/* Top */}
      <div className="top">
        <h1>Internship</h1>
        <Link className="create_link" to={"/createInternship"}>
          <BorderColorIcon className="create_icon" />
          <p className="create_paragraph"> Create Internship</p>
        </Link>
      </div>
      {/* body */}
      <div className="body">
        {/* Internship Insights */}
        <div className="top_body">
          <div className="internship_insights">
            <h2 className="internship_insights-header">Internship Insights</h2>
            <p className="internship_insights-para">
              In the eighteenth century the German philosopher Immanuel Kant
              developed a theory of knowledge in which knowledge about space can
              be both a priori and synthetic.
            </p>
          </div>
          {/* graph details */}
          <div className="internship_insights-graph">
            <div className="top_graph">
              <div className="select">
                <button>This week</button>
                <button>This month</button>
              </div>
              <div className="selectDate">
                <button className="selectDate-button">
                  <EventNoteIcon className="icon" />
                  <p> Select Date </p>
                </button>
              </div>
            </div>
            <div className="graph">
              <img src={Funnel} alt="funnel" />
            </div>
          </div>
        </div>
        <div className="top_bottom"></div>
      </div>

      {/* Internship details */}
      <div className="internship_product">
        <div className="top_internship-container">
          <div className="internship_title">
            <p>Internship Title</p>
            <img src={DownArrow} alt="" />
          </div>
          <div className="internship_sections">
            <div className="section">
              <img src={DownArrow} alt="" />
              <p>Completion Period</p>
            </div>
            <div className="section">
              <img src={DownArrow} alt="" />
              <p>Total Enrolled</p>
            </div>
            <div className="section">
              <img src={DownArrow} alt="" />
              <p>Qualified Candidates</p>
            </div>
            <div className="section">
              <img src={DownArrow} alt="" />
            </div>
          </div>
        </div>

        {/* Internship Products */}
        <div className="internship_products">
          <div className="products">
            {InternshipData.map((item) => (
              <div className="container">
                <div className="title_container">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
                <div className="completion_container">
                  <div className="completion_time">
                    <p className="days">{item.days}</p>
                    <p className="create_day">{item.createDate}</p>
                  </div>
                </div>
                <div className="total_container">
                  <button>{item.price}</button>
                </div>
                <div className="qualified_container">
                  <img src={Row} alt="" />
                </div>
                <div className="icons_container">
                  <span> {item.icons[0]} </span>
                  <span>{item.icons[1]} </span>
                  <span>{item.icons[2]} </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
