import React from "react";

const Info = ({ type, value }) => {
  return (
    <>
      <p className="card-text" style={{ margin: "5px" }}>
        <span
          style={{
            color: "black",
            fontWeight: "bolder",
            marginRight: "13px",
          }}
        >
          {type}:
        </span>
        {value}
      </p>
    </>
  );
};
function RepoInfo({ repoInfo }) {
  const {
    name,
    description,
    private: privateInfo,
    fork,
    forks,
    language,
    created_at,
    pushed_at,
    svn_url
  } = repoInfo;
  const handleClick=()=>{
    window.open(svn_url, "_blank")
  }
  return (
    <div className="card" style={{ width: "35%" }}>
      <h5 className="card-header" style={{ textTransform: "capitalize" }}>
        {name}
      </h5>
      <div className="card-body">
        <h5 className="card-title" style={{ textTransform: "capitalize" }}>
          {description ? description : "Description"}
        </h5>
        <Info type="Private Repo" value={privateInfo ? "true" : "false"} />
        <Info type="Fork" value={fork ? "true" : "false"} />
        <Info type="Total Forks" value={forks} />
        <Info type="Language" value={language} />
        <Info type="Created On" value={new Date(created_at).toDateString()} />
        <Info
          type="Last Update On"
          value={new Date(pushed_at).toDateString()}
        />
        <button className="btn btn-primary" style={{marginLeft:"auto"}} onClick={handleClick} >Repo Link</button>
      </div>
    </div>
  );
}

export default RepoInfo;
