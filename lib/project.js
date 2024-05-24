import 'dotenv/config'
import { FlotiqApi } from '../flotiqApi/index'

const apiKey = process.env.FLOTIQ_API_KEY

export async function getProjects(
    page = 1,
    limit = 10,
    filters = undefined,
    direction = 'asc',
    orderBy = 'date'
) {
    const api = new FlotiqApi(apiKey)
    return api.ProjectAPI.list({
        page,
        limit,
        filters,
        order_by: orderBy,
        order_direction: direction,
    })
}

export async function getProjectBySlug(slug) {
    const filters = `{"slug":{"type":"equals","filter":"${slug}"}}`
    const api = new FlotiqApi(apiKey)
    return api.ProjectAPI.list({ filters, page: 1, limit: 1 })
}
