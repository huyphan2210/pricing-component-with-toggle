import { useState } from "react";
import "./App.css";
import Toggle from "./components/toggle/Toggle";
import PricingCard from "./components/pricing-card/PricingCard";

function App() {
  const [isMonthlyPricing, setIsMothlyPrcing] = useState(false);

  const header = "Our Pricing";
  const anuallyText = "Anually";
  const monthlyText = "Monthly";

  const pricings = [{
    cardName: "Basic",
    monthlyPrice: 19.99,
    annualPrice: 199.99,
    benefits: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"]
  }, {
    cardName: "Professional",
    monthlyPrice: 24.99,
    annualPrice: 249.99,
    benefits: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"]
  }, {
    cardName: "Master",
    monthlyPrice: 39.99,
    annualPrice: 399.99,
    benefits: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"]
  }];

  return (
    <>
      <hgroup className="header-group">
        <h1 className="header-group_header">{header}</h1>
        <div className="header-group_pricing">
          <span>{anuallyText}</span>
          <Toggle handleToggle={() => { setIsMothlyPrcing(!isMonthlyPricing); }}/>
          <span>{monthlyText}</span>
        </div>
      </hgroup>
      <section className="pricing">
        {pricings.map((pricing, index) => <PricingCard isPro={index === 1} key={index} cardName={pricing.cardName} price={!isMonthlyPricing ? pricing.annualPrice : pricing.monthlyPrice} benefits={pricing.benefits}></PricingCard>) }
      </section>
    </>
  );
}

export default App;
