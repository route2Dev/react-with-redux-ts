export interface ICourse {
  id?: string;
  title: string;
  slug?: string;
  authorId: number | null;
  category: string;
  authorName?: string;
}

export interface IAuthor {
  id: number;
  name: string;
}

export interface IApplicationState {
  course: ICourse;
  courses: ICourse[];
  authors: IAuthor[];
  apiCallsInProgress: number;
}
