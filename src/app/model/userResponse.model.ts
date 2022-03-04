export class UserResponseModel {
    id: string | undefined;
    name: string | undefined;
    email: string | undefined;
    dob: string | undefined;
    address: string | undefined;
    contacts: Array<Contacts> = [];
}

export class Contacts {
 mobileNumber: string | undefined;
 email: string | undefined;
 id: string | undefined;
}
