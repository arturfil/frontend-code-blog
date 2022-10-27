export interface Post {
    id?:string
    title: string;
    author: string
    content: string;
    category: string;
    created_at?: string;
    updated_at?: string;
}