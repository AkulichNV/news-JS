export interface Articles {
    urlToImage: string, 
    author: string, 
    source: {name: string}, 
    publishedAt: string, 
    title: string, 
    description: string, 
    url: string 
};

export type GroupArticles = {
    articles: Articles[];
}

export interface SourcesNews {
    name: string, 
    id: string,  
};

export type GroupSources = {
    sources?: SourcesNews[];
}

export type ErrorRes = {
    json(): Promise<any>;
    ok: boolean,
    status: number,
    statusText: string
}