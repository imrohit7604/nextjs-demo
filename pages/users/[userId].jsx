import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import RepoInfo from "../../components/RepoInfo";
import { Context as UserInfoContext } from "../../context/UserInfoContext";
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

function UserDetails({ repoList }) {
  const { state: contextState, getAllUser } = useContext(UserInfoContext);
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();
  const { userId } = router.query;

  const handleClick = () => {
    window.open(userInfo.html_url, "_blank");
  };
  useEffect(() => {
    const user = contextState.users.find((user) => user.login === userId);
    setUserInfo(user);
  }, [contextState]);

  useEffect(() => {
    getAllUser();
  }, []);

  if (router.isFallback) return <h1>Lodaing...</h1>;

  return (
    <>
      <div className="card" style={{ width: "25%" }}>
        <img
          src={userInfo && userInfo.avatar_url}
          className="card-img-top"
          alt="avatar"
          style={{
            width: "50%",
            margin: "auto",
            borderRadius: "50%",
            marginTop: "10px",
          }}
        />
        <div className="card-body">
          <h2 className="card-title">{userInfo && userInfo.name}</h2>
          <p className="card-text">{userInfo && userInfo.bio}</p>
          <Info type="Followers" value={userInfo && userInfo.followers} />
          <Info type="Following" value={userInfo && userInfo.following} />
          <Info type="Location" value={userInfo && userInfo.location} />
          <Info
            type="Public Repository"
            value={userInfo && userInfo.public_repos}
          />
          <Info
            type="Joined On"
            value={userInfo && new Date(userInfo.created_at).toDateString()}
          />
          <Info
            type="Last Updated On"
            value={userInfo && new Date(userInfo.updated_at).toDateString()}
          />
          <button className="btn btn-primary" onClick={handleClick}>
            Profile Link
          </button>
        </div>
      </div>
      <div style={{ width: "70%" }}>
        <h3>
          Repositories
          <span className="badge bg-secondary" style={{ marginLeft: "10px" }}>
            {userInfo && userInfo.public_repos}
          </span>
        </h3>
        <div
          className="repo-container"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {repoList.map((list) => (
            <RepoInfo key={list.id} repoInfo={list} />
          ))}
        </div>
      </div>
    </>
  );
}

export default UserDetails;

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/users", {
    method: "GET",
  });
  const users = await response.json();
  const paths = users.data.map((user) => {
    return {
      params: {
        userId: `${user.login}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://api.github.com/users/${params.userId}/repos`
  );
  const data = await response.json();
  // if (data.message === "Not Found")
  //   return {
  //     notFound: true,
  //   };
  return {
    props: {
      repoList: data,
    },
  };
}
