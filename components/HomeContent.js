'use client'

import React from 'react'
import { Header, Paragraph } from 'flotiq-components-react'
import Layout from '../layouts/layout'
import Contact from './Contact'
import ProjectCards from '../sections/ProjectCards'

const topHeader = 'Hi, I am'
const mainHeader1 = 'Joe'
const mainHeader2 = 'Jonas'
const descriptionText = 'I am professional 3d artist'

const HomeContent = ({ projectsData }) => (
    <Layout additionalClass={['bg-medium-gray md:bg-white']}>
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
                    contactFormImage="/assets/contact-form-image.png"
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
                <ProjectCards projects={projectsData} />
            </div>
        </div>
    </Layout>
)

export default HomeContent
