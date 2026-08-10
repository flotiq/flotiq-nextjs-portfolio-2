import 'dotenv/config'
import { Flotiq } from '@flotiq/flotiq-api-sdk'

export const api = new Flotiq({ apiKey: process.env.FLOTIQ_API_KEY })

export async function getProjects(
    page = 1,
    limit = 10,
    filters = undefined,
    direction = 'asc',
    orderBy = 'date'
) {
    return api.content.project.list({
        page,
        limit,
        filters,
        orderBy,
        orderDirection: direction,
        hydrate: 1,
    })
}

export async function getProjectBySlug(slug) {
    const filters = { slug: { type: 'equals', filter: slug } }

    return api.content.project.list({
        filters,
        page: 1,
        limit: 1,
        hydrate: 1,
    })
}
