import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/src/components/Hero";
import Head from 'next/head';


const Home = () => {
  return (
    <>
      <Head>
        <title>Hariguru's Portfolio</title>
        <meta name="description" content="Joel's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        {/* <About />
        <Skills />
        <Projects />
        <Contact /> */}
      </div>
    </>
  );
};

export default Home;