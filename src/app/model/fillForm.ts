export interface IFillForm {
    questionId: string;
    answers: IAnswer[];
}

export interface IAnswer {
    optionId: string;
    text: string;
}
