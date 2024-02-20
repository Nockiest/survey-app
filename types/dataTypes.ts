export type Answer = {
    [key: string]: number;
};

export type Survey = {
    author: string
    views: number
    completions: number
    answerStats: Answer[]
    language? : string
    tags? : string
    description: string
    title: string
    id: string
}
