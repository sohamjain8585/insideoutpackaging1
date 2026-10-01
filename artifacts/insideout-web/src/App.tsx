import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { PageLoader } from "@/components/PageLoader";
import { CustomCursor } from "@/components/CustomCursor";
import { useLenis } from "@/hooks/use-lenis";

import Home from "@/pages/home";
import About from "@/pages/about";
import Products from "@/pages/products";
import Applications from "@/pages/applications";
import Industries from "@/pages/industries";
import Contact from "@/pages/contact";
import BarcodePrinters from "@/pages/barcode-printers";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/barcode-printers" component={BarcodePrinters} />
        <Route path="/applications" component={Applications} />
        <Route path="/industries" component={Industries} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  useLenis();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PageLoader />
        <CustomCursor />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
