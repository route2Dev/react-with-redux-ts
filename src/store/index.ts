
export interface ICourse {
    id?: number;
    title: string;
    slug: string;
    authorId: number;
    category: string;
    authorName?: string;
}

export interface IAuthor {
    id: number;
    name: string;
}

export interface IApplicationState {
    courses: Array<ICourse>;
    authors: Array<IAuthor>;
}