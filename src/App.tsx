import { Toaster } from "react-hot-toast";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Lab2 from "./pages/Lab2";
import Lab3 from "./pages/Lab3";
import Lab4 from "./pages/Lab4";
import Lab5 from "./pages/Lab5";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight">
            WEB2091 APP
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-blue-200 transition-colors">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-blue-200 transition-colors">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="hover:text-blue-200 transition-colors">
              Đăng nhập
            </Link>
            <button className="bg-white text-blue-600 px-4 py-1.5 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Đăng ký
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto mt-8 p-6 bg-white shadow-sm rounded-xl">
        <Routes>

          <Route
            path="/"
            element={
              <div className="py-20 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                  Chào mừng đến với WEB2091
                </h1>
              </div>
            }
          />

          <Route path="/list" element={<Lab2 />} />

          <Route path="/add" element={<Lab3 mode="product" />} />

          <Route path="/login" element={<Lab3 mode="login" />} />

          <Route path="*" element={<Navigate to="/" replace />} />

          <Route path="/lab4" element={<Lab4 />} />

          <Route path="/lab5" element={<Lab5 />} />

        </Routes>
      </main>

      <Toaster position="top-right" />
    </div>
  );
}

export default App;