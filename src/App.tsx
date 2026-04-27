import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index.tsx";
import Nosotros from "./pages/Nosotros.tsx";
import Soluciones from "./pages/Soluciones.tsx";
import ConsejoFelino from "./pages/ConsejoFelino.tsx";
import ComoTrabajamos from "./pages/ComoTrabajamos.tsx";
import Contacto from "./pages/Contacto.tsx";
import FAQ from "./pages/FAQ.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/soluciones" element={<Soluciones />} />
              <Route path="/consejo-felino" element={<ConsejoFelino />} />
              <Route path="/como-trabajamos" element={<ComoTrabajamos />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/faq" element={<FAQ />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
