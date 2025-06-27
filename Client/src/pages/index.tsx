import React from 'react';
import { HeroCarousel, FourPiller, AboutRos, ImpactStats, Testimonials, ProcessFlow, BenefitsGrid, TrustSecurity } from '../components/home';
import HowROSWorks from '../components/home/HowROSWorks';

const HomePage: React.FC = () => {
    return (
        <main className="homepage">
            <HeroCarousel />
            <AboutRos />
            <ImpactStats />
            <FourPiller />
            <HowROSWorks />
            <ProcessFlow />
            <BenefitsGrid />
            <TrustSecurity />
            <Testimonials />
        </main>
    );
};

export default HomePage;
