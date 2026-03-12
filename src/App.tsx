import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Lab2 from "./pages/Lab2";

const { Header, Content, Footer } = Layout;

function Home() {
  return <h2>Trang chủ</h2>;
}

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="space-x-8">
            <Link to="/">Trang chủ</Link>
            <Link to="/list">Danh sách</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Layout>
          <Header style={{ color: "white" }}>Header</Header>

          <Content style={{ padding: 20 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/list" element={<Lab2 />} />
            </Routes>
          </Content>

          <Footer style={{ textAlign: "center" }}>
            WEB2091 ©2026
          </Footer>
        </Layout>
      </div>

      <Toaster />
    </>
  );
}

export default App;