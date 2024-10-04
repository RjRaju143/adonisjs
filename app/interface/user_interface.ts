export interface CreateUserRequest {
  username: string;
  password: string;
  email: string;
  isAdmin: boolean;
  firstname: string;
  lastname: string;
  phone: number;
  gender: string;
  groupIds: number[];
}

export interface CreateUserResponse {
  status: number;
  username?: string;
  email?: string;
  isAdmin?: boolean;
  firstname?: string;
  lastname?: string;
  phone?: number;
  gender?: string | null;
  groups?: { id: number; name: string }[];
  group_ids?: number[];
  message?: string;
}

export interface GetAllUsersResponse {
  status: number;
  results?: Array<{}>;
  error?: any;
}

export interface UpdateUserRequest {
  username: string;
  email: string;
  isAdmin: boolean;
  isStaff: boolean;
  isGuest: boolean;
  firstname: string;
  lastname: string;
  phone: number;
  gender: string;
  isActive: boolean;
  userType: string;
}

export interface LoginResponse {
  status: number;
  accessToken?: string;
  refreshToken?: string;
  message?: string;
}

export interface LoginRequest {
  username: string;
  password: string;
  email: string;
}
