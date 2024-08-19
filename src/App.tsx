import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUp";
import DashboardLayout from "./components/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import AdminQuestionPage from "./pages/AdminQuestionPage";
import AdminActivityPage from "./pages/AdminActivityPage";
import TeamsPage from "./pages/Teams";
import ActivitiesPage from "./pages/ActivitiesPage";
import AdminUsersPage from "./pages/AdminUsers";
import AdminOrganizationPage from "./pages/AdminOrganization";
import ActivityPage from "./pages/ActivityPage";

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
          <Route path="/admin-users" element={<AdminUsersPage />} />
          <Route
            path="/admin-organization"
            element={<AdminOrganizationPage />}
          />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/activities/:activityName" element={<ActivityPage />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
