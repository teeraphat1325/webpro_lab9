export class User {
  id: number;
  email: string;
  password: string;
  fullName:string;
  roles: ('admin' | 'user')[];
  gender: 'male' | 'female' | 'others';
}
