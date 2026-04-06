import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AuthPage = () => <div style={{ background: 'green', color: 'white', padding: '100px' }}>AUTH PAGE DEBUG</div>;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}
