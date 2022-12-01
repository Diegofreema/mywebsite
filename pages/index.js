
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {About, Contact, Header, Hero,  Skill} from '../components'
import Portfolio from '../components/Portfolio'
import {client} from '../sanity'








export default function Home({pageInfo, portfolios, socials, skills}) {
  return (
    <div className='  mx-auto bg-[#FEFCF3] h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden r scrollbar-track-black/40 scrollbar-thumb-black/80 scrollbar-thin '>
      <Head>
        <title>My PortFolio</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
      <Header socials={socials}/>
      

      </section>
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      <section id='skill' className='snap-center'>
        <Skill skills={skills}/>
      </section>
      <section className='snap-center' id='portfolio'>
        <Portfolio portfolios={portfolios}/>
      </section>
      <section className='snap-center ' id='contact'>
        <Contact/>
      </section>

      <footer className='sticky bottom-4 right-1 w-full cursor-pointer text-center z-40'>
      <Link href='#hero'>
        <div className='flex items-center relative justify-center'>
          <img
          className='w-10 h-10 absolute bottom-0 right-2  sm:left-[50%] rounded-full filter grayscale hover:grayscale-0 cursor-pointer transition duration-300 ease-in-out' src="../diego.jpg" alt="" />
        </div>

        </Link>
        </footer>
     
    </div>
  )
}


export const getStaticProps = async () => {

  const query = `*[_type == 'pageInfo']`;
  const pageInfo = await client.fetch(query);

  const portfolioQuery = `*[_type == 'portfolio']`;
  const portfolios = await client.fetch(portfolioQuery);

  const skillQuery = `*[_type == 'skill']`;
  const skills = await client.fetch(skillQuery);


  const socialQuery = `*[_type == 'social']`;
  const socials = await client.fetch(socialQuery);

  return{
    props: {
      pageInfo,
      portfolios,
      skills,
      socials
    },
    revalidate: 10,
  }
}


