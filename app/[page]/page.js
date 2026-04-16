import { cache } from 'react'
import { notFound } from 'next/navigation'
import replaceUndefinedWithNull from '../../lib/sanitize'
import { getProjectBySlug, getProjects } from '../../lib/project'
import ProjectPageContent from '../../components/ProjectPageContent'
import config from '../../lib/config'

const getCachedProject = cache(async (slug) => replaceUndefinedWithNull(await getProjectBySlug(slug)))

export async function generateStaticParams() {
    const fetchAllProjects = replaceUndefinedWithNull(await getProjects())
    const allProjects = fetchAllProjects.data

    return allProjects.map((project) => ({
        page: project.slug,
    }))
}

export async function generateMetadata({ params }) {
    const { page } = await params
    const project = await getCachedProject(page)
    const data = project.data[0]

    return {
        title: data?.name ?? config.siteMetadata.title,
        description: data?.description ?? config.siteMetadata.description,
    }
}

const PortfolioProjectPage = async ({ params }) => {
    const { page } = await params
    const project = await getCachedProject(page)
    const data = project.data[0]

    if (!data) {
        notFound()
    }

    return <ProjectPageContent data={data} />
}

export default PortfolioProjectPage
