import React from 'react'
import replaceUndefinedWithNull from '../lib/sanitize'
import { getProjects } from '../lib/project'
import config from '../lib/config'
import HomeContent from '../components/HomeContent'

export const metadata = {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
}

const Home = async () => {
    const { data } = replaceUndefinedWithNull(await getProjects())

    return <HomeContent projectsData={data} />
}

export default Home
