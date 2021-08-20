import Head from "next/head";
import Image from "next/image";
import ContactCard from "../components/ContactCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <div className="card-container" >
    <ContactCard/>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
    </div>
     
    </>
  );
}
