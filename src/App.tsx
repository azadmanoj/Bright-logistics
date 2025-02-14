import { Route, Switch } from "wouter";
import HomePage from "./pages/home";
import EnterprisePage from "./pages/enterprise";
import ContactPage from "./pages/contact";
import MoversPackersPage from "./pages/movers-packers";
import TruckPartnersPage from "./pages/truck-partners";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout/layout";
import PaymentPage from "./pages/payment";
import Payment from "./pages/payment";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/payment" component={Payment} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/movers-packers" component={MoversPackersPage} />
        <Route path="/truck-partners" component={TruckPartnersPage} />
        <Route component={NotFoundPage} />
        <Route path="/payment" component={Payment} />
        {/* <Route path="/payment/success" component={PaymentSuccessPage} />
        <Route path="/payment/error" component={PaymentErrorPage} /> */}
      </Switch>
    </Layout>
  );
}