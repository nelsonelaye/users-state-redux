export interface userType {
  id: number;
  name: string;
  age: number;
  bio: string;
}

export type ContextType = {
  users: userType[];
  add_user: (user: userType) => void;
  remove_user: (id: number) => void;
};

export type stateType = {
  users: userType[];
};
