import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUp";
import DashboardLayout from "./components/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import AdminQuestionPage from "./pages/AdminQuestionPage";
import AdminActivityPage from "./pages/AdminActivityPage";
import TeamsPage from "./pages/Teams";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/admin-question" element={<AdminQuestionPage />} />
          <Route path="/admin-activity" element={<AdminActivityPage />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
