
export interface IformData {
    payload:
    {
        name: string;
        status: string;
        numberShared: number;
        numberSubmitted: number;
        questions: [
            {
                id: string;
                name: string;
                order: number;
                imageLink: string;
                type: string;
                options: [
                    {
                        id: string;
                        name: string;
                        order: number;
                        points: number
                    }
                ]
            }
        ]
    }
}






