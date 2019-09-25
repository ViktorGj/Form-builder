export interface ISharedCards {
    payload: [{
        name: string;
        status: string;
        numberShared: number;
        numberSubmitted: number;
        deletedAt: Date;
        deletedBy: string;
        isActive: boolean;
        isParentActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        updatedBy: string;
        createdBy: string;
        id: string;
        alternateId: number;
    }];
}
