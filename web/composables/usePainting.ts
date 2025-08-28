import { fakePaintings, type Painting } from '~/data/paintings'

export const usePaintings = () => {
    // Récupérer toutes les paintings
    const getAllPaintings = (): Painting[] => {
        return fakePaintings
    }

    // Récupérer une painting par ID
    const getPaintingById = (id: string): Painting | undefined => {
        return fakePaintings.find(painting => painting.id === id)
    }

    // Récupérer l'URL de l'image
    const getPaintingImageUrl = (imageId: string): string => {
        return `/images/paintings/${imageId}.png`
    }

    // Récupérer les paintings populaires (tri par vues)
    const getPopularPaintings = (limit: number = 5): Painting[] => {
        return [...fakePaintings]
            .sort((a, b) => b.views - a.views)
            .slice(0, limit)
    }

    // Rechercher des paintings
    const searchPaintings = (query: string): Painting[] => {
        const lowercaseQuery = query.toLowerCase()
        return fakePaintings.filter(painting =>
            painting.title.toLowerCase().includes(lowercaseQuery) ||
            painting.description.toLowerCase().includes(lowercaseQuery)
        )
    }

    return {
        getAllPaintings,
        getPaintingById,
        getPaintingImageUrl,
        getPopularPaintings,
        searchPaintings
    }
}