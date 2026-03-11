import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { Layout, Table } from "antd";

const { Header, Content, Footer } = Layout;

function Home() {
  return <h2>Trang chủ</h2>;
}

function List() {
  const data = [
    {
      key: "1",
      id: 1,
      name: "Nguyễn Duy",
      age: 20,
      major: "Information Technology",
    },
    {
      key: "2",
      id: 2,
      name: "Trần Nam",
      age: 21,
      major: "Software Engineering",
    },
    {
      key: "3",
      id: 3,
      name: "Lê Minh",
      age: 22,
      major: "Computer Science",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Major",
      dataIndex: "major",
    },
  ];

  return (
    <>
      <h2>Student List</h2>
      <Table dataSource={data} columns={columns} />
    </>
  );
}

function Add() {
  return <h2>Trang thêm mới</h2>;
}

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">Trang chủ</Link>
            <Link to="/list">Danh sách</Link>
            <Link to="/add">Thêm mới</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Layout>
          <Header style={{ color: "white" }}>Header</Header>

          <Content style={{ padding: 20 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/list" element={<List />} />
              <Route path="/add" element={<Add />} />
            </Routes>
          </Content>

          <Footer style={{ textAlign: "center" }}>
            WEB2091 ©2026 Created by Student
          </Footer>
        </Layout>
      </div>

      <Toaster />
    </>
  );
}

export default App;