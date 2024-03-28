// Api about marathons info

export type IMarathonAnswer = [[string, boolean], [string, boolean], [string, boolean]];

export interface IMarathonsQuestion {
    title: string;
    questions: string[];
    answers: IMarathonAnswer[];
}
