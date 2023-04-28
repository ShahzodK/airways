export interface UserLogin {
  email: string | null;
  password: string | null;
}

export interface UserResponse {
  accessToken: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    country: string;
    phone: string;
    citizenship: string;
    assent: boolean;
  };
}

export interface UserCreate {
  email: string | null;
  password: string | null;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: string | null;
  gender: string | null;
  country: string | null;
  phone: string | null;
  citizenship: string | null;
  assent: boolean | null;
}
