import { UserRole } from "../enums";

export interface UserEntity {
    _id?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    email?: string;
    password?: string;
    role?: UserRole;
    shop_id?: string;
    createdAt?: Date;
    updatedAt?: Date;

}