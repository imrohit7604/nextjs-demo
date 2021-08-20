import React from "react";
import RepoInfo from "../../components/RepoInfo";

const Info = ({ type, value }) => {
  return (
    <>
      <p className="card-text">
        <span
          style={{
            color: "black",
            fontWeight: "bolder",
            marginRight: "10px",
          }}
        >
          {type}:
        </span>
        {value}
      </p>
    </>
  );
};

function UserDetails() {
  return (
    <>
      <div className="card" style={{ width: "25%" }}>
        <img
          src="https://github.com/imrohit7604.png"
          className="card-img-top"
          alt="avatar"
          style={{
            width: "auto",
            margin: "auto",
            borderRadius: "50%",
            marginTop: "10px",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">Rohit Kumar</h5>
          <p className="card-text">Bio</p>
          <Info type="Followers" value="27" />
          <Info type="Following" value="7" />
          <Info type="Location" value="New Delhi" />
          <Info type="Public Repository" value="17" />
          <Info type="Joined On" value="17 aug 2021" />
          <Info type="Last Updated On" value="17 aug 2021" />
        </div>
      </div>
      <div style={{ width: "70%" }}>
        <h3>Repositories <span class="badge bg-secondary">10</span></h3>
        <div
          className="repo-container"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <RepoInfo />
          <RepoInfo />
          <RepoInfo />
          <RepoInfo />
        </div>
      </div>
    </>
  );
}

export default UserDetails;
