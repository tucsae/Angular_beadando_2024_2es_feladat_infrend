export interface UserDTO {
    id: number;
    name: string;
    phone: string;
    personalIdNumber: string;
    address: string;
    isActive: boolean;
    email: string;
    password: string;
    borrowedItems: ItemDTO[];
}

export interface LoginDTO {
    email: string;
    password: string;
}

export interface AccessTokenDTO {
    accessToken: string;
}

export interface ItemDTO {
    id: number;
    title: string;
    Author: string;
    date: string;
    borrowDate: Date;
    category: string;
    status: string;
}

export interface LateItemDTO extends ItemDTO {
    borrower: UserDTO;
    delay: number;
}
