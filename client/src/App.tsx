import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Disciplines from "./pages/Disciplines";
import Portfolio from "./pages/Portfolio";
import Process from "./pages/Process";
import Quality from "./pages/Quality";
import Compliance from "./pages/Compliance";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/disciplinas" component={Disciplines} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/processo" component={Process} />
      <Route path="/qualidade" component={Quality} />
      <Route path="/compliance" component={Compliance} />
      <Route path="/industrias" component={Industries} />
      <Route path="/contato" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
