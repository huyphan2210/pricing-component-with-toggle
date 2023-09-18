import { FC } from "react";
import "./PricingCard.css";

export interface PricingCardProps {
  cardName: string;
  price: number;
  benefits: string[];
  isPro: boolean;
}

const PricingCard: FC<PricingCardProps> = (props: PricingCardProps) => {
  const { cardName, price, benefits, isPro } = props;
  
  return (
    <div className={isPro ? "pricing-card pro" : "pricing-card"}>
      <hgroup className="pricing-card_header">
        <h2>{cardName}</h2>
        <div className="pricing-card_header_price">
          <span>$</span>
          <span>{price}</span>
        </div>
      </hgroup>
      <div className="pricing-card_benefits">
        {benefits.map((benefit, index) => <div className="pricing-card_benefits-item" key={index}>{benefit}</div>)}
      </div>
      <button type="button">Learn More</button>
    </div>
  );
};

export default PricingCard;