import ContactCard from "../components/ContactCard";
import { Context as UserInfoContext } from "../context/UserInfoContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const { state: contextState, getAllUser } = useContext(UserInfoContext);
  console.log(contextState.users)
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <>
      <div className="card-container">
        {contextState&&contextState.users.map((user) => (
          <ContactCard key={user.id} userInfo={user} />
        ))}
      
      </div>
    </>
  );
}
