export type Answer = {
    [key: string]: number;
};

export type Survey = {
    author: string
    views: number
    uploaded: boolean
    completions: number
    questions: any[],
    // answerStats: Answer[]
    language? : string
    tags? : string
    description: string
    title: string
    id: string
}
