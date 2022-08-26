import React from 'react'
import { Helmet } from 'react-helmet'
import Link from 'next/link'
import { Button, Header } from 'flotiq-components-react'
import Layout from '../layouts/layout'

const NotFoundPage = () => (
    <Layout>
        <Helmet>
            <title>Page not found</title>
        </Helmet>
        <div className="py-32">
            <Header
                additionalClasses={[
                    '!p-0 uppercase font-archivo tracking-widest !text-7xl md:!text-7xl text-center',
                ]}
            >
                Page not found, sorry
            </Header>
            <div className="text-center mt-5 pt-5">
                {/* Example usage of button */}
                <Link href="/" passHref>
                    <a>
                        <Button
                            label="Go back to index"
                            variant="secondary"
                            size="lg"
                            additionalClasses={[
                                'font-archivo font-normal' +
                                    'uppercase !text-base tracking-wide md:-ml-20 relative z-[1] ' +
                                    '!py-5 lg:!py-3 xl:!py-5',
                            ]}
                        />
                    </a>
                </Link>
            </div>
        </div>
    </Layout>
)

export default NotFoundPage
