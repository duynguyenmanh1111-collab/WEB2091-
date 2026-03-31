import React, { createContext, useContext, useState } from "react";
import { Button, Avatar, Layout, Switch } from "antd";

const { Header, Content } = Layout;

type UserType = {
    name: string;
    avatar: string;
} | null;

type UserContextType = {
    user: UserType;
    setUser: (user: UserType) => void;
};

const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => { },
});

const useUser = () => useContext(UserContext);

type ThemeContextType = {
    darkMode: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    darkMode: false,
    toggleTheme: () => { },
});

const useThemeContext = () => useContext(ThemeContext);

const AppHeader = () => {
    const { user, setUser } = useUser();
    const { darkMode, toggleTheme } = useThemeContext();

    return (
        <Header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: darkMode ? "#001529" : "#fff",
                color: darkMode ? "#fff" : "#000",
            }}
        >
            <h2 style={{ color: "inherit" }}>Lab 7</h2>

            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span>Dark mode</span>
                <Switch checked={darkMode} onChange={toggleTheme} />

                {user ? (
                    <>
                        <Avatar src={user.avatar} />
                        <span>{user.name}</span>
                        <Button danger onClick={() => setUser(null)}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <Button
                        type="primary"
                        onClick={() =>
                            setUser({
                                name: "Duy Nguyen",
                                avatar: "https://i.pravatar.cc/150?img=3",
                            })
                        }
                    >
                        Login
                    </Button>
                )}
            </div>
        </Header>
    );
};

export default function Lab7() {
    const [user, setUser] = useState<UserType>(null);
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            <UserContext.Provider value={{ user, setUser }}>
                <Layout style={{ minHeight: "100vh" }}>
                    <AppHeader />

                    <Content style={{ padding: 20 }}>
                        <h1>Welcome to Lab 7 </h1>

                    </Content>
                </Layout>
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}