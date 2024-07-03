import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, BookOpen, Palette, MapPin } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import History from "./pages/History.jsx";
import Culture from "./pages/Culture.jsx";
import Tourism from "./pages/Tourism.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "History",
    to: "/history",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Culture",
    to: "/culture",
    icon: <Palette className="h-4 w-4" />,
  },
  {
    title: "Tourism",
    to: "/tourism",
    icon: <MapPin className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="history" element={<History />} />
              <Route path="culture" element={<Culture />} />
              <Route path="tourism" element={<Tourism />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;