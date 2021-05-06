export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  address: string;
  country: string;
  postalCode: string;
  role: {
    name: string;
  }
  groups?: Array<any>
}
