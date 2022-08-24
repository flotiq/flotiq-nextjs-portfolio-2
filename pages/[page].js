import React from 'react'
import { Header, Paragraph, Image } from 'flotiq-components-react'
import { Helmet } from 'react-helmet'
import Layout from '../layouts/layout'
import ProjectGallery from '../components/ProjectGallery'
import config from '../lib/config'

const PortfolioProjectTemplate = ({ data = {} }) => {
    const { project = {} } = data
    return (
        <Layout additionalClass={['bg-medium-gray md:bg-white']}>
            <Helmet>
                <title>{config.name}</title>
                <meta name="description" content={config.description} />
            </Helmet>
            <div className="max-w-7xl mx-auto px-2 sm:px-6">
                <div className="grid lg:grid-cols-3 items-center">
                    <div className="lg:pr-10 py-5 order-2 lg:order-1">
                        <Header
                            additionalClasses={[
                                'font-archivo uppercase tracking-widest !text-4xl md:!text-6xl ' +
                                    'text-center lg:text-left lg:mb-10',
                            ]}
                        >
                            {project.name || 'name'}
                        </Header>
                        <Paragraph
                            additionalClasses={[
                                'font-normal italic uppercase text-sm leading-loose px-7 lg:px-0',
                            ]}
                        >
                            {project.description || 'description'}
                        </Paragraph>
                    </div>
                    <div className="col-span-2 order-1 lg:order-2">
                        {project?.headerImage && (
                            <Image
                                url={
                                    project?.headerImage?.[0] &&
                                    project?.headerImage?.[0]?.localFile
                                        ?.publicURL
                                }
                                rounded="3xl"
                                stretched
                                additionalClasses={['px-1']}
                            />
                        )}
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 py-5 lg:py-24">
                    <div>
                        <div className="pr-5 mb-3 lg:mb-0">
                            <Header
                                additionalClasses={[
                                    'font-archivo uppercase tracking-widest !text-2xl !p-0 lg:mb-5',
                                ]}
                            >
                                {project?.gallery_name || 'header'}
                            </Header>
                            <Paragraph
                                additionalClasses={[
                                    'font-normal italic uppercase text-sm leading-loose',
                                ]}
                            >
                                {project?.gallery_description || 'description'}
                            </Paragraph>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <ProjectGallery
                            gallery={project?.gallery}
                            name={project?.name}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PortfolioProjectTemplate
