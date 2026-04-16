import GoogleAnalytics from '../components/GoogleAnalytics'
import '../styles/globals.css'

export const metadata = {
    icons: [
        {
            type: 'image/png',
            sizes: '32x32',
            url: '/assets/favicons/favicon-32x32.png',
        }, {
            type: 'image/png',
            sizes: '16x16',
            url: '/assets/favicons/favicon-16x16.png'
        },
    ]
}

const RootLayout = ({ children }) => (
    <html lang="en">
        <body>
            <GoogleAnalytics />
            {children}
        </body>
    </html>
)

export default RootLayout
