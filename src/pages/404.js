import Head from 'next/head'
import Layout from './styles/Layout'
import client from '../lib/api/apollo/client'
import { getGeneralData } from "../lib/api/general/queries";
import Link from 'next/link';

export default function Custom404({general}) {
  return(
    <Layout generalData={general} title="404">
        <div className="flex flex-col justify-center items-center bg-[#1A2238] h-screen">
    <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
    <Link href="/">
	<button className="mt-5">
      <a
        className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
          Go Home
        </span>
      </a>
    </button>
    </Link>
    </div>
    </Layout>
  )
}

export async function getStaticProps() {
  
    const layoutData = await client.query({
      query: getGeneralData()
    })
    
    let general = layoutData.data.generalData.data.attributes.GeneralData
  
    return {
        props: {general: general},
        revalidate: 86400 // 60*60*24 = every 24 hours
    }
  }