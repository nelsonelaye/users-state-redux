export interface userType {
  id?: number;
  name: string;
  age: number;
  bio: string;
}

export type stateType = {
  users: userType[];
};
