export interface IUser {
    id: number;
    name: string;
    userName?: string;
    knownAs?: string;
    age?: number;
    gender?: string;
    created?: Date;
    lastActive?: Date;
    photoUrl?: string;
    city?: string;
    country?: string;
    permissions?: string[];
    roles?: string[];
}
