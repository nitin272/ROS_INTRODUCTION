import React from "react";
import {
  HeroCarousel,
  FourPiller,
  AboutRos,
  Testimonials,
  ProcessFlow,
  BenefitsGrid,
} from "../components/home";

const HomePage: React.FC = () => {
  return (
    <main
      className="homepage"
      style={{
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          margin: 0,
          padding: 0,
        }}
      >
        <HeroCarousel />
        <AboutRos />
        <FourPiller />
        <ProcessFlow />
        <BenefitsGrid />
        <Testimonials />
      </div>
    </main>
  );
};

export default HomePage;
