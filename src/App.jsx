import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Globe, Briefcase, Monitor, Flask, Heart, Football, Palette, User } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  { title: "Home", to: "/", icon: <Home className="h-4 w-4" /> },
  { title: "World", to: "/world", icon: <Globe className="h-4 w-4" /> },
  { title: "Politics", to: "/politics", icon: <Briefcase className="h-4 w-4" /> },
  { title: "Business", to: "/business", icon: <Briefcase className="h-4 w-4" /> },
  { title: "Tech", to: "/tech", icon: <Monitor className="h-4 w-4" /> },
  { title: "Science", to: "/science", icon: <Flask className="h-4 w-4" /> },
  { title: "Health", to: "/health", icon: <Heart className="h-4 w-4" /> },
  { title: "Sports", to: "/sports", icon: <Football className="h-4 w-4" /> },
  { title: "Arts", to: "/arts", icon: <Palette className="h-4 w-4" /> },
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
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
