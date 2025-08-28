// Type definition pour votre schéma painting
export interface Painting {
    id: string;
    imageId: string;
    title: string;
    width: number;
    height: number;
    description: string;
    views: number;
    date: string; // ISO timestamp
}

// Données fictives pour vos paintings
export const fakePaintings: Painting[] = [
    {
        id: "550e8400-e29b-41d4-a716-446655440001",
        imageId: "1",
        title: "Nuit étoilée sur la Seine",
        width: 73.7,
        height: 92.1,
        description: "Une interprétation moderne de la nuit étoilée, avec des reflets dansants sur l'eau de la Seine. Les couleurs vibrantes du bleu et du jaune créent une atmosphère onirique.",
        views: 2847,
        date: "2024-03-15T10:30:00.000Z"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440002",
        imageId: "2",
        title: "Forêt d'automne",
        width: 60.0,
        height: 80.0,
        description: "Un paysage automnal capturant la beauté des feuilles dorées qui tombent. La lumière filtrée à travers les arbres crée un jeu d'ombres et de lumières poétique.",
        views: 1523,
        date: "2024-02-28T14:45:00.000Z"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440003",
        imageId: "3",
        title: "Vagues éternelles",
        width: 100.0,
        height: 70.0,
        description: "Une représentation puissante de l'océan en mouvement. Les vagues se brisent avec force, symbolisant la puissance indomptable de la nature.",
        views: 4125,
        date: "2024-01-20T09:15:00.000Z"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440004",
        imageId: "4",
        title: "Lever de soleil montagnard",
        width: 85.5,
        height: 65.3,
        description: "Les premiers rayons du soleil illuminent les sommets enneigés. Un spectacle grandiose de la nature qui inspire sérénité et contemplation.",
        views: 3672,
        date: "2024-04-02T07:20:00.000Z"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440005",
        imageId: "5",
        title: "Pluie urbaine",
        width: 50.0,
        height: 70.0,
        description: "Les reflets de la ville sous la pluie nocturne. Les néons se reflètent sur le pavé mouillé, créant une ambiance cinématographique unique.",
        views: 2198,
        date: "2024-03-10T18:30:00.000Z"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440006",
        imageId: "6",
        title: "Coucher de soleil désertique",
        width: 120.0,
        height: 80.0,
        description: "L'immensité du désert baignée dans les couleurs chaudes du couchant. Un paysage qui évoque la solitude contemplative et la grandeur de la nature.",
        views: 5431,
        date: "2024-02-14T16:45:00.000Z"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440007",
        imageId: "7",
        title: "Champ de coquelicots",
        width: 90.0,
        height: 60.0,
        description: "Un champ de coquelicots rouges s'étendant à perte de vue. La beauté simple de la campagne française capturée dans toute sa splendeur printanière.",
        views: 3289,
        date: "2024-04-18T11:00:00.000Z"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440008",
        imageId: "8",
        title: "Lac gelé",
        width: 75.0,
        height: 55.0,
        description: "Un lac gelé entouré de sapins enneigés. La tranquillité de l'hiver capturée dans des tons de bleu et de blanc, évoquant paix et sérénité.",
        views: 1876,
        date: "2024-01-05T13:25:00.000Z"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440009",
        imageId: "9",
        title: "Cerisiers en fleurs",
        width: 65.0,
        height: 85.0,
        description: "La délicate beauté des cerisiers japonais en pleine floraison. Les pétales roses dansent dans la brise printanière, symbole de renouveau et d'espoir.",
        views: 4756,
        date: "2024-03-25T08:40:00.000Z"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440010",
        imageId: "4",
        title: "Phare dans la tempête",
        width: 70.0,
        height: 100.0,
        description: "Un phare solitaire défiant les éléments déchaînés. Symbole de résistance et d'espoir, il guide les navires perdus vers la sécurité du port.",
        views: 6142,
        date: "2024-04-08T19:55:00.000Z"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440011",
        imageId: "5",
        title: "Symphonie colorée",
        width: 80.0,
        height: 80.0,
        description: "Une explosion de couleurs abstraites qui évoque les émotions pures. Chaque nuance raconte une histoire différente dans cette composition dynamique.",
        views: 2934,
        date: "2024-02-08T15:10:00.000Z"
    },
    {
        id: "550e8400-e29b-41d4-a716-446655440012",
        imageId: "6",
        title: "Pont de pierre ancien",
        width: 110.0,
        height: 65.0,
        description: "Un pont de pierre séculaire enjambant une rivière paisible. Témoin silencieux de l'histoire, il unit les rives dans une harmonie intemporelle.",
        views: 3567,
        date: "2024-01-30T12:35:00.000Z"
    },

];

// Fonction utilitaire pour générer des UUIDs (pour ajouter plus de données)
export function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Fonction pour générer des données aléatoirement si besoin
export function generateRandomPainting(): Painting {
    const titles = [
        "Paysage mystique", "Reflets dorés", "Horizon infini", "Lumière dansante",
        "Couleurs du temps", "Écho silencieux", "Rêve éveillé", "Mélodie visuelle"
    ];

    const descriptions = [
        "Une œuvre qui capture l'essence de la beauté naturelle dans toute sa splendeur.",
        "Un jeu de couleurs et de formes qui évoque des émotions profondes.",
        "Une composition harmonieuse entre réalisme et abstraction.",
        "Une invitation au voyage à travers les nuances et les textures."
    ];

    return {
        id: generateUUID(),
        imageId: `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        title: titles[Math.floor(Math.random() * titles.length)],
        width: Math.round((Math.random() * 100 + 40) * 10) / 10,
        height: Math.round((Math.random() * 100 + 40) * 10) / 10,
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        views: Math.floor(Math.random() * 10000),
        date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString()
    };
}