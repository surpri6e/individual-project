export interface IMarathonAnswer {
    [answer: string]: boolean;
}

export interface IMarathonsQuestion {
    title: string;
    questions: string[];
    answers: IMarathonAnswer[];
}
