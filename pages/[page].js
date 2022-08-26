import React from 'react'
import { Helmet } from 'react-helmet'
import { Header, Paragraph, Image } from 'flotiq-components-react'
import Layout from '../layouts/layout'
import ProjectGallery from '../components/ProjectGallery'
import config from '../lib/config'
import {
    getProjectImage,
    getProjectAll,
    getProjectBySlug,
} from '../lib/project'
import FlotiqImage from '../lib/flotiqImage'

const PortfolioProjectTemplate = ({ data }) => {
    return (
        <Layout additionalClass={['bg-medium-gray md:bg-white']}>
            <Helmet>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/assets/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/assets/favicons/favicon-16x16.png"
                />
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
                            {data?.name || 'name'}
                        </Header>
                        <Paragraph
                            additionalClasses={[
                                'font-normal italic uppercase text-sm leading-loose px-7 lg:px-0',
                            ]}
                        >
                            {data?.description || 'description'}
                        </Paragraph>
                    </div>
                    <div className="col-span-2 order-1 lg:order-2">
                        {data?.headerImage && (
                            <Image
                                url={FlotiqImage.getSrc(
                                    data?.headerImage,
                                    0,
                                    0
                                )}
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
                                {data?.gallery_name || 'header'}
                            </Header>
                            <Paragraph
                                additionalClasses={[
                                    'font-normal italic uppercase text-sm leading-loose',
                                ]}
                            >
                                {data?.gallery_description || 'description'}
                            </Paragraph>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <ProjectGallery
                            gallery={data?.gallery}
                            name={data?.name}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PortfolioProjectTemplate

export async function getStaticProps({ params }) {
    const dataFetch = await getProjectBySlug(params.page)
    const data = dataFetch.data[0]

    if (data?.headerImage) {
        data.headerImage = await getProjectImage(data.headerImage[0].dataUrl)
    }

    if (data?.gallery?.length > 0) {
        for (let i = 0; i < data.gallery.length; i++) {
            if (data.gallery[i].dataUrl) {
                data.gallery[i] = await getProjectImage(data.gallery[i].dataUrl)
            }
        }
    }

    return {
        props: {
            data: data,
            pageContext: {
                currentPage: params.page,
            },
        },
    }
}

export async function getStaticPaths() {
    const fetchAllProjects = await getProjectAll()
    const allProjects = fetchAllProjects.data
    const paths = allProjects.map((el) => {
        return {
            params: { page: el.slug },
        }
    })
    return {
        paths,
        fallback: false,
    }
}
