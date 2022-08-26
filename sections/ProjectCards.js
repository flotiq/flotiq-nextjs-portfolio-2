import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import FlotiqImage from '../lib/flotiqImage'

const DynamicProjectCard = dynamic(() => import('../components/ProjectCard'), {
    ssr: false,
})

const ProjectCards = ({ projects }) => (
    <div className="flex flex-col">
        {projects?.map((project) => (
            <Link href={`/${project.slug}`} key={project.id} passHref>
                <a>
                    <DynamicProjectCard
                        image={
                            project?.headerImage
                                ? FlotiqImage.getSrc(project?.headerImage, 0, 0)
                                : undefined
                        }
                        name={project.name}
                        excerpt={project.description}
                    />
                </a>
            </Link>
        ))}
    </div>
)

export default ProjectCards
