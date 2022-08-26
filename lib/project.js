import 'dotenv/config'

const apiUrl = process.env.FLOTIQ_API_URL
const apiKey = process.env.FLOTIQ_API_KEY

export async function getProjectAll() {
    const res = await fetch(
        `${apiUrl}/api/v1/content/project?auth_token=${apiKey}`
    )
    return res.json()
}

export async function getProjectImage(url) {
    const res = await fetch(`${apiUrl}${url}?auth_token=${apiKey}`)
    return res.json()
}

export async function getProjectPostById(id) {
    const res = await fetch(
        `${apiUrl}/api/v1/content/project/${id}?auth_token=${apiKey}`
    )
    return res.json()
}

export async function getProjectBySlug(slug) {
    const filters = `{"slug":{"type":"contains","filter":"${slug}"}}`
    const res = await fetch(
        `${apiUrl}/api/v1/content/project?auth_token=${apiKey}&filters=${encodeURIComponent(
            filters
        )}`
    )
    return res.json()
}
