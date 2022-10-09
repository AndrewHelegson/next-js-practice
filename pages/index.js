import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: { socials: data },
    }
  } catch {
    return {
      props: { socials: null },
    }
  }
};

const Home = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <link rel="shortcut icon" href="https://belapay.com/wp-content/uploads/2021/04/436-4364745_adidas-logo-png-images-free-download-red-adidas.png" />
      <title>Home</title>
    </Head>
    <Heading text="My NextJS App" />
    <Socials socials={socials} />
  </div>
);

export default Home;
