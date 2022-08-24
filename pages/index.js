import { Helmet } from 'react-helmet'
import { getProjectData, getProjectImage } from '../lib/project'
import { Header, Paragraph } from 'flotiq-components-react'
import Layout from '../layouts/layout'
import Contact from '../components/Contact'
import contactFormImage from '../public/assets/contact-form-image.png'
import ProjectCards from '../sections/ProjectCards'
import config from '../lib/config'

const topHeader = 'Hi, I am'
const mainHeader1 = 'Joe'
const mainHeader2 = 'Jonas'
const descriptionText = 'I am professional 3d artist'

export default function IndexPage({ data }) {
    return (
        <Layout additionalClass={['bg-medium-gray md:bg-white']}>
            <Helmet>
                <title>{config.siteMetadata.title}</title>
                <meta
                    name="description"
                    content={config.siteMetadata.description}
                />
            </Helmet>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 px-2 sm:px-6 lg:px-8">
                <div className="py-10">
                    <Header
                        level={2}
                        additionalClasses={[
                            'font-lora uppercase !text-xl mb-3 !p-0',
                        ]}
                    >
                        {topHeader}
                    </Header>
                    <div>
                        <Header
                            additionalClasses={[
                                '!p-0 uppercase font-archivo tracking-widest !text-7xl md:!text-8xl',
                            ]}
                        >
                            {mainHeader1}
                        </Header>
                        <Header
                            additionalClasses={[
                                '!p-0 uppercase font-archivo tracking-widest !text-7xl md:!text-8xl',
                            ]}
                        >
                            {mainHeader2}
                        </Header>
                    </div>
                    <Paragraph
                        additionalClasses={[
                            'font-lora italic uppercase text-xl mt-2',
                        ]}
                    >
                        {descriptionText}
                    </Paragraph>
                    <Contact
                        contactFormImage={contactFormImage}
                        headerText1="Let's"
                        headerText2="work"
                        headerText3="toget"
                        headerText4="her"
                        nameInputPlaceholder="name"
                        messageInputPlaceholder="message"
                        buttonLabel="Send"
                        additionalClass={['mt-20 md:w-full lg:w-3/5']}
                    />
                </div>
                <div>
                    <ProjectCards projects={data} />
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const dataPage = await getProjectData()

    for (var i = 0; i < dataPage.data.length; i++) {
        dataPage.data[i].headerImage = await getProjectImage(
            dataPage.data[i].headerImage[0].dataUrl
        )
    }

    return {
        props: {
            data: dataPage.data,
        },
    }
}
