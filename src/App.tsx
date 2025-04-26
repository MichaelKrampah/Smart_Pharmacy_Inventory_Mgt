import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./pages";
import SystemOverviewPage from "./pages/SystemOverviewPage";
import FeaturesPage from "./pages/FeaturesPage";
import BenefitsPage from "./pages/BenefitsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./auth/AuthContext";
import InventoryIndex from "./pages/inventory";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";
import Reports from "./pages/reports";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import { Create as CreateInventoryItem, Edit as EditInventoryItem } from "./pages/inventory/create";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/system-overview" element={<SystemOverviewPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/benefits" element={<BenefitsPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/unauthorized" element={<UnauthorizedPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/inventory" element={<InventoryIndex />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/reports" element={<Reports />} />
              </Route>

              {/* Protected routes for Admin and Manager only */}
              <Route element={<ProtectedRoute allowedRoles={['Admin', 'Manager']} />}>
                <Route path="/inventory/create" element={<CreateInventoryItem />} />
                <Route path="/inventory/:id/edit" element={<EditInventoryItem />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
