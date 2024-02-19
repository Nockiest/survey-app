export type Answer = {
    [key: string]: number;
};

export type Survey = {
    author: string
    views: string
    completions: string
    answerStats: Answer[]
    Language?: string
    Tags?: string[]
    Description: string
    Title: string
}
