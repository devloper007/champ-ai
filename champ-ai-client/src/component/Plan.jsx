import { PricingTable } from "@clerk/clerk-react";
import React from "react";
import { assets } from "../assets/assets";

const Plan = () => {
  return (
    <div className="max-w-2xl mx-auto z-20 my-30">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Start for free and upgrade as you grow. Our plans are designed to fit
          your needs, whether you're an individual creator or a large team.
        </p>
      </div>
      <div className="mt-14 max-sm:mx-8">
        <PricingTable />
      </div>

    </div>
  );
};

export default Plan;
