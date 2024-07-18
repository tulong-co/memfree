export interface User {
    id: string;
    name: string;
    email?: string;
    image?: string;
    stripePriceId?: string;
    stripeSubscriptionId?: string;
    stripeCustomerId?: string;
    stripeCurrentPeriodEnd?: Date;
}

export interface CachedResult {
    webs: TextSource[];
    images: ImageSource[];
    answer: string;
    related: string;
}

export interface TextSource {
    title: string;
    url: string;
    content: string;
}

export interface ImageSource {
    title: string;
    url: string;
    image: string;
}

export enum SearchCategory {
    ALL = 'all',
    SCIENCE = 'science',
    ACADEMIC = 'academic',
    IT = 'it',
    GENERAL = 'general',
    IMAGES = 'images',
    VIDEOS = 'videos',
    NEWS = 'news',
    MUSIC = 'music',
}

export interface ScoredURL {
    value: string;
    score: number;
}

export interface StreamHandler {
    (message: string | null, done: boolean): void;
}

export type AskMode = 'simple' | 'deep' | 'research';
