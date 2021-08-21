import axios from "axios";

const users = [
  {
    avatar_url: "https://avatars.githubusercontent.com/u/24896512?v=4",
    bio: null,
    blog: "",
    company: null,
    created_at: "2017-01-03T15:05:12Z",
    email: "imrohit7604@gmail.com",
    emailError: false,
    events_url: "https://api.github.com/users/imrohit7604/events{/privacy}",
    followers: 0,
    followers_url: "https://api.github.com/users/imrohit7604/followers",
    following: 0,
    following_url:
      "https://api.github.com/users/imrohit7604/following{/other_user}",
    gists_url: "https://api.github.com/users/imrohit7604/gists{/gist_id}",
    gitHubUserName: "imrohit7604",
    gitHubUserNameError: false,
    gravatar_id: "",
    hireable: null,
    html_url: "https://github.com/imrohit7604",
    id: 24896512,
    location: null,
    login: "imrohit7604",
    name: "Rohit",
    nameError: false,
    node_id: "MDQ6VXNlcjI0ODk2NTEy",
    organizations_url: "https://api.github.com/users/imrohit7604/orgs",
    public_gists: 0,
    public_repos: 28,
    received_events_url:
      "https://api.github.com/users/imrohit7604/received_events",
    repos_url: "https://api.github.com/users/imrohit7604/repos",
    site_admin: false,
    starred_url:
      "https://api.github.com/users/imrohit7604/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/imrohit7604/subscriptions",
    twitter_username: null,
    type: "User",
    updated_at: "2021-08-06T12:51:35Z",
    url: "https://api.github.com/users/imrohit7604",
  },
];
export default async (req, res) => {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    try {
      const userInfo = await axios.get(
        `https://api.github.com/users/${body.gitHubUserName}`
      );
      res.status(200).json({ data: { ...userInfo.data } });
    } catch (err) {
      res.status(400).json({ message: "Something went wrong" });
    }
  } else {
    try {
      res.status(200).json({ data: users });
    } catch (err) {
      res.status(400).json({ message: "Something went wrong" });
    }
  }
};
