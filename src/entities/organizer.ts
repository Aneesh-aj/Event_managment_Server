export interface Iorganizer {
    name: string,
    email: string,
    phoneNumber: string,
    password: string,
    address: {
        country: string,
        state: string,
        city: string,
        building: string,
        pincode: number,
    },
    ownerId: string,
    companyLicense: string,
    companyInsurance: string,
    bankPassbook: string

}