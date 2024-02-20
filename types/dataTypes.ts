export type Answer = {
    [key: string]: number;
};

export type Survey = {
    author: string
    views: string
    completions: string
    answerStats: Answer[]
    language?: string
    tags?: string[]
    description: string
    title: string
}
