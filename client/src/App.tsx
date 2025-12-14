import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Placeholder from "./pages/Placeholder";
import { 
  ServiceRepairs, 
  CarbSpecialist, 
  BrakeRestoration, 
  SpecialistRestoration, 
  UltrasonicCleaning, 
  Recommissioning 
} from "./pages/services";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/shop" component={Placeholder} />
        <Route path="/services" component={Placeholder} />
        <Route path="/services/service-repairs" component={ServiceRepairs} />
        <Route path="/services/carb-specialist" component={CarbSpecialist} />
        <Route path="/services/brake-restoration" component={BrakeRestoration} />
        <Route path="/services/specialist-restoration" component={SpecialistRestoration} />
        <Route path="/services/ultrasonic-cleaning" component={UltrasonicCleaning} />
        <Route path="/services/recommissioning" component={Recommissioning} />
        <Route path="/about" component={Placeholder} />
        <Route path="/contact" component={Placeholder} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
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
