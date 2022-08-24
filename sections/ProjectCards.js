import React from 'react'
import Link from 'next/link'
// import ProjectCard from '../components/ProjectCard'
import FlotiqImage from '../lib/flotiqImage'
import dynamic from 'next/dynamic'

const DynamicProjectCard = dynamic(() => import('../components/ProjectCard'), {
    ssr: false,
})

const ProjectCards = ({ projects }) => (
    <div className="flex flex-col">
        {projects?.map((project) => (
            <Link href={`/${project.slug}`} key={project.id} passHref>
                <a>
                    <DynamicProjectCard
                        image={FlotiqImage.getSrc(project?.headerImage, 0, 0)}
                        name={project.name}
                        excerpt={project.description}
                    />
                </a>
            </Link>
        ))}
    </div>
)

export default ProjectCards
