import 'dotenv/config'

export async function getProjectData() {
    const apiUrl = process.env.FLOTIQ_API_URL
    const apiKey = process.env.FLOTIQ_API_KEY
    const res = await fetch(
        `${apiUrl}/api/v1/content/project?auth_token=${apiKey}`
    )
    return res.json()
}

export async function getProjectImage(url) {
    const apiUrl = process.env.FLOTIQ_API_URL
    const apiKey = process.env.FLOTIQ_API_KEY
    const res = await fetch(`${apiUrl}${url}?auth_token=${apiKey}`)
    return res.json()
}
