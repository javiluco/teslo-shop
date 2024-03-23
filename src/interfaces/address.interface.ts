

export interface Address {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    postalCode: string;
    city: string;
    country: string;
    phone: string;
}

export interface UserAddress {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    postalCode: string;
    city: string;
    phone: string;
  
    id: string;
    userId: string;
    countryId: string;
  }