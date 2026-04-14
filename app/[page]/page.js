import { notFound } from 'next/navigation'
import replaceUndefinedWithNull from '../../lib/sanitize'
import { getProjectBySlug, getProjects } from '../../lib/project'
import ProjectPageContent from '../../components/ProjectPageContent'
import config from '../../lib/config'

export async function generateStaticParams() {
    const fetchAllProjects = replaceUndefinedWithNull(await getProjects())
    const allProjects = fetchAllProjects.data

    return allProjects.map((project) => ({
        page: project.page,
    }))
}

export async function generateMetadata({ params }) {
    const project = replaceUndefinedWithNull(
        await getProjectBySlug(params.page)
    )

    const data = project.data[0]

    return {
        title: data?.name ?? config.siteMetadata.title,
        description: data?.description ?? config.siteMetadata.description,
    }
}

const PortfolioProjectPage = async ({ params }) => {
    const project = replaceUndefinedWithNull(
        await getProjectBySlug(params.page)
    )

    const data = project.data[0]

    if (!data) {
        notFound()
    }

    return <ProjectPageContent data={data} />
}

export default PortfolioProjectPage
