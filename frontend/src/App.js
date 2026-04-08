import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceDetail from "@/pages/ServiceDetail";
import SolutionsPage from "@/pages/SolutionsPage";
import SolutionDetail from "@/pages/SolutionDetail";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import IndustriesPage from "@/pages/IndustriesPage";
import IndustryDetail from "@/pages/IndustryDetail";
import AboutPage from "@/pages/AboutPage";
import BlogPage from "@/pages/BlogPage";
import BlogDetail from "@/pages/BlogDetail";
import CareersPage from "@/pages/CareersPage";
// Admin
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminLayout from "@/pages/admin/AdminLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import BlogList from "@/pages/admin/BlogList";
import BlogEditor from "@/pages/admin/BlogEditor";
import { TestimonialManager, JobManager, ContactsList, CaseStudyManager } from "@/pages/admin/ContentManagers";

function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
            <Route path="/services" element={<PublicLayout><ServicesPage /></PublicLayout>} />
            <Route path="/services/:slug" element={<PublicLayout><ServiceDetail /></PublicLayout>} />
            <Route path="/solutions" element={<PublicLayout><SolutionsPage /></PublicLayout>} />
            <Route path="/solutions/:slug" element={<PublicLayout><SolutionDetail /></PublicLayout>} />
            <Route path="/case-studies" element={<PublicLayout><CaseStudiesPage /></PublicLayout>} />
            <Route path="/case-studies/:slug" element={<PublicLayout><CaseStudyDetail /></PublicLayout>} />
            <Route path="/industries" element={<PublicLayout><IndustriesPage /></PublicLayout>} />
            <Route path="/industries/:slug" element={<PublicLayout><IndustryDetail /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
            <Route path="/blog" element={<PublicLayout><BlogPage /></PublicLayout>} />
            <Route path="/blog/:slug" element={<PublicLayout><BlogDetail /></PublicLayout>} />
            <Route path="/careers" element={<PublicLayout><CareersPage /></PublicLayout>} />
            {/* Admin routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="blog" element={<BlogList />} />
              <Route path="blog/:id" element={<BlogEditor />} />
              <Route path="case-studies" element={<CaseStudyManager />} />
              <Route path="testimonials" element={<TestimonialManager />} />
              <Route path="jobs" element={<JobManager />} />
              <Route path="contacts" element={<ContactsList />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
