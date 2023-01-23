import React, { createContext, useState } from "react";
import LandingPage from "./routes/LandingPage";
import {
  userType as userContext,
  ContextType as AppContextInterface,
} from "./App.types";

export const AppContext = createContext<AppContextInterface | null>(null);

function App() {
  const [users, setUsers] = useState<userContext[]>([
    { id: 1, name: "nelson", age: 20, bio: "nonnya!" },
  ]);

  const add_user = (new_user: userContext): userContext[] => {
    const user = {
      id: users.length + 1,
      name: new_user.name,
      age: new_user.age,
      bio: new_user.bio,
    };
    setUsers([...users, user]);
    return users;
  };

  const remove_user = (id: number) => {
    const updated_users = users.filter((e) => e.id !== id);
    setUsers([...updated_users]);
    return users;
  };

  return (
    <AppContext.Provider value={{ users, add_user, remove_user }}>
      <LandingPage />
    </AppContext.Provider>
  );
}

export default App;
