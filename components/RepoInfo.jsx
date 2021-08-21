import React from "react";
import { Context as UserInfoContext } from "../context/UserInfoContext";
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
function RepoInfo({ name = "Demo", privates = false }) {
  const { state: contextState } = useContext(UserInfoContext);
  return (
    <div className="card" style={{ width: "35%" }}>
      <h5 className="card-header">{name}</h5>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <Info type="Private Repo" value="Yes" />
        <Info type="Fork" value="Yes" />
        <Info type="Total Forks" value="0" />
        <Info type="Language" value="JavaScript" />
        <Info type="Created On" value="12th aug 2021" />
        <Info type="Last Update On" value="12th aug 2021" />
      </div>
    </div>
  );
}

export default RepoInfo;
