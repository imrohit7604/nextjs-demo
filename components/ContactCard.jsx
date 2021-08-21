import { useRouter } from "next/router";
export default function ContactCard({ userInfo }) {
  const router = useRouter();
  const { avatar_url, name, email, public_repos, followers, following, login } =
    userInfo;
  const handleClick = () => {
    router.push({
      pathname: "/users/[userId]",
      query: { userId: login },
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="contact-card p-3">
          <div className="d-flex align-items-center">
            <div className="image">
              <img
                src={avatar_url}
                className="rounded"
                style={{ width: "10rem", marginRight: "10px" }}
              />
            </div>
            <div className="ml-3 w-100">
              <h4 className="mb-0 mt-0" style={{ textTransform: "capitalize" }}>
                {name}
              </h4>
              <span>{email}</span>
              <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                <div className="d-flex flex-column">
                  <span className="articles">Repositires</span>
                  <span className="number1">{public_repos}</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="followers">Followers</span>
                  <span className="number2">{followers}</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="rating">Following</span>
                  <span className="number3">{following}</span>
                </div>
              </div>
              <div className="button mt-2 d-flex flex-row align-items-center">
                <button
                  className="btn btn-sm btn-primary w-100 ml-2"
                  onClick={handleClick}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
