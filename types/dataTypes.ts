export type Answer = {
    [key: string]: number;
    peopleChoosedNum: number;
};

export type Question = {questionHead: string} & {
    choices: Answer[];
    allowedMaxChoices: number
    
}| {
    answers: string[]
    
};
export type Survey = {
    author: string
    views: number
    uploaded: boolean
    completions: number
    questions: Question[],
    language? : string
    tags? : string
    description: string
    title: string
    id: string
}
