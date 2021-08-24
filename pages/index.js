import ContactCard from "../components/ContactCard";
import { users } from "../util/index";
export default function Home({ users }) {
  
 console.log(users)
  return (
    <>
      <div className="card-container">
        {users.map((user) => (
          <ContactCard key={user.id} userInfo={user} />
        ))}
      </div>
    </>
  );
}
export async function getStaticProps(context) {
  return {
    props: {
      users,
    }, 
    revalidate: 60,
  };
}
