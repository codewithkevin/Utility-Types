export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  phone?: string;
  address?: string;
  city?: string;
  created_at: string;
  updated_at: string;
}
