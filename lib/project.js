import 'dotenv/config'

const apiUrl = process.env.FLOTIQ_API_URL
const apiKey = process.env.FLOTIQ_API_KEY
const projectApi = `${apiUrl}/api/v1/content/project`

const DEFAULT_ORDER = 'internal.createdAt'

export function getProjectUrl(
    page,
    limit,
    filters,
    direction = 'desc',
    orderBy = DEFAULT_ORDER,
    hydrate = 1
) {
    let url = `${projectApi}?page=${page}&limit=${limit}`
        + `&order_by=${orderBy}&order_direction=${direction}`
        + `&auth_token=${apiKey}`

    if (filters !== undefined) {
        url += `&filters=${encodeURIComponent(filters)}`
    }
    if (hydrate !== undefined) {
        url += '&hydrate=1'
    }

    return url
}

export async function getProjectAll(
    page = 1,
    limit = 10,
    filters = undefined,
    direction = 'asc',
    orderBy = 'date'
) {
    const url = getProjectUrl(page, limit, filters, direction, orderBy)
    const res = await fetch(url)
    return res.json()
}

export async function getProjectBySlug(slug) {
    const filters = `{"slug":{"type":"equals","filter":"${slug}"}}`
    const url = getProjectUrl(1, 1, filters)
    const res = await fetch(url)
    return res.json()
}
