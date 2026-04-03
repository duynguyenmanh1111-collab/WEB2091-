import { Link } from "react-router-dom";
import { Button } from "antd";
import { useAuthStore } from "../stores/useAuthStore";

export default function Header() {
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    return (
        <nav className="bg-blue-600 text-white shadow">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="text-xl font-semibold">
                    WEB2091 App
                </Link>

                <div className="flex items-center space-x-6">
                    {user ? (
                        <>
                            <span>Email: {user.name}</span>
                            <span>Đã đăng nhập</span>
                            <Button danger onClick={logout}>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <span>Chưa đăng nhập</span>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}