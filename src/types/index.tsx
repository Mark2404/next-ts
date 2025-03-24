export interface Usertype {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": AdressType,
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": CompanyType
}
export interface AdressType {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
    }


}
export interface CompanyType {
    "name": string,
    "catchPhrase": string,
    "bs": string
}