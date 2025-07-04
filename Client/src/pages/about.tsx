import React, { useEffect, useRef, useState } from 'react';
import * as S from '../styles/StyledComponentsAbout';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Assets
import missionSvg from '../assets/about/mission.svg';
import image2 from '../assets/about/image2.svg';
import jpSvg from '../assets/about/Jp.svg';
import men_image from "../assets/about/men_image.svg";

// Add state data
const statesData = [
  {
    name: "Delhi NCR",
    description: "Our flagship market with the highest concentration of operations and customer base.",
    stats: [
      { value: "50K+", label: "Daily Orders" },
      { value: "100+", label: "Vendors" },
      { value: "95%", label: "Customer Satisfaction" },
      { value: "24/7", label: "Support" }
    ]
  },
  {
    name: "Mumbai",
    description: "Expanding rapidly with a focus on premium quality and efficient delivery networks.",
    stats: [
      { value: "30K+", label: "Daily Orders" },
      { value: "75+", label: "Vendors" },
      { value: "92%", label: "Customer Satisfaction" },
      { value: "24/7", label: "Support" }
    ]
  },
  {
    name: "Bangalore",
    description: "Tech-savvy market with innovative delivery solutions and strong community engagement.",
    stats: [
      { value: "25K+", label: "Daily Orders" },
      { value: "60+", label: "Vendors" },
      { value: "94%", label: "Customer Satisfaction" },
      { value: "24/7", label: "Support" }
    ]
  }
];



const AboutPage: React.FC = () => {
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const revolutionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null); // Add ref for timeline

  const [currentCard, setCurrentCard] = useState(0);
  const scrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start auto-scrolling
    const interval = setInterval(() => {
      if (gridRef.current) {
        const nextCard = (currentCard + 1) % 3;
        setCurrentCard(nextCard);
        gridRef.current.scrollTo({
          left: nextCard * (gridRef.current.offsetWidth * 0.85),
          behavior: 'smooth'
        });
      }
    }, 5000);

    scrollIntervalRef.current = interval;

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [currentCard]);

  // Handle scroll events to update current card
  const handleScroll = () => {
    if (gridRef.current) {
      const scrollLeft = gridRef.current.scrollLeft;
      const cardWidth = gridRef.current.offsetWidth * 0.85;
      const newCard = Math.round(scrollLeft / cardWidth);
      setCurrentCard(newCard);
    }
  };

  useEffect(() => {
    // Animate Who We Are section
    if (whoWeAreRef.current) {
      const section = whoWeAreRef.current;
      const textContent = section.querySelector('.text-content');
      const image = section.querySelector('.animated-image');

      // Create timeline for coordinated animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate text content
      tl.from(textContent, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out"
      });

      // Animate image
      tl.from(image, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5"); // Start slightly before the previous animation ends
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Clear any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Add scroll animations for innovation sections
    // The innovationRefs ref is removed, so we iterate over the static sections
    // and animate their content and images.
    const innovationContentRefs = [
      document.querySelector('.innovation-content:nth-of-type(1)'),
      document.querySelector('.innovation-content:nth-of-type(2)'),
      document.querySelector('.innovation-content:nth-of-type(3)'),
      document.querySelector('.innovation-content:nth-of-type(4)'),
      document.querySelector('.innovation-content:nth-of-type(5)'),
      document.querySelector('.innovation-content:nth-of-type(6)'),
    ];

    const innovationImageRefs = [
      document.querySelector('.innovation-image:nth-of-type(1)'),
      document.querySelector('.innovation-image:nth-of-type(2)'),
      document.querySelector('.innovation-image:nth-of-type(3)'),
      document.querySelector('.innovation-image:nth-of-type(4)'),
      document.querySelector('.innovation-image:nth-of-type(5)'),
      document.querySelector('.innovation-image:nth-of-type(6)'),
    ];

    innovationContentRefs.forEach((ref, index) => {
      if (ref) {
        const isImage = index % 2 === 1; // Odd indices are images

        // Create a timeline for each element
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref,
            start: "top 85%", // Start earlier
            end: "top 15%", // End earlier
            toggleActions: "play none none none",
            markers: false,
            scrub: false,
            pin: false,
            anticipatePin: 1,
            once: true
          }
        });

        // Add animations to the timeline with faster timing
        tl.fromTo(ref,
          {
            opacity: 0,
            x: isImage ? 50 : -50, // Reduced distance for faster movement
            y: isImage ? -20 : 0,
            rotation: isImage ? 10 : -5,
            scale: 0.98,
            transformOrigin: isImage ? "right top" : "left center"
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 0.6, // Faster duration
            ease: "power2.out" // Snappier easing
          }
        );

        // Faster hover effect
        ref.addEventListener('mouseenter', () => {
          gsap.to(ref, {
            scale: 1.02,
            duration: 0.2, // Faster hover
            ease: "power1.out"
          });
        });

        ref.addEventListener('mouseleave', () => {
          gsap.to(ref, {
            scale: 1,
            duration: 0.2, // Faster hover
            ease: "power1.out"
          });
        });
      }
    });

    innovationImageRefs.forEach((ref, index) => {
      if (ref) {
        const isImage = index % 2 === 1; // Odd indices are images

        // Create a timeline for each element
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref,
            start: "top 85%", // Start earlier
            end: "top 15%", // End earlier
            toggleActions: "play none none none",
            markers: false,
            scrub: false,
            pin: false,
            anticipatePin: 1,
            once: true
          }
        });

        // Add animations to the timeline with faster timing
        tl.fromTo(ref,
          {
            opacity: 0,
            x: isImage ? 50 : -50, // Reduced distance for faster movement
            y: isImage ? -20 : 0,
            rotation: isImage ? 10 : -5,
            scale: 0.98,
            transformOrigin: isImage ? "right top" : "left center"
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 0.6, // Faster duration
            ease: "power2.out" // Snappier easing
          }
        );

        // Faster hover effect
        ref.addEventListener('mouseenter', () => {
          gsap.to(ref, {
            scale: 1.02,
            duration: 0.2, // Faster hover
            ease: "power1.out"
          });
        });

        ref.addEventListener('mouseleave', () => {
          gsap.to(ref, {
            scale: 1,
            duration: 0.2, // Faster hover
            ease: "power1.out"
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Add scroll animation for revolution cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    const cards = document.querySelectorAll('.revolution-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  // Timeline animation for desktop
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth <= 768) return;
    if (!timelineRef.current) return;
    const container = timelineRef.current;
    const line = container.querySelector('.timeline-line');
    const points = container.querySelectorAll('.timeline-point');
    const verticals = container.querySelectorAll('.timeline-vertical');
    const labels = container.querySelectorAll('.timeline-label');

    // Reset all
    gsap.set(line, { scaleX: 0, transformOrigin: 'left' });
    gsap.set(points, { opacity: 0, scale: 0 });
    gsap.set(verticals, { opacity: 0, scaleY: 0 });
    gsap.set(labels, { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 70%',
        once: true,
      }
    });
    // Animate horizontal line
    tl.to(line, { scaleX: 1, duration: 1, ease: 'power2.out' })
      // Animate verticals and points in sequence
      .to(verticals, {
        opacity: 1,
        scaleY: 1,
        duration: 0.4,
        stagger: 0.15,
        ease: 'power2.out',
      }, '-=0.5')
      .to(points, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      }, '-=0.3')
      // Animate labels
      .to(labels, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
      }, '-=0.2');

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const farmersCards = [
    {
      title: "Simplify supply chains",
      description: "by making them smarter,\ncleaner,\nand faster.\nROS brings a direct link\nbetween farmers, vendors,\nand households."
    },
    {
      title: "Reliable",
      description: "A robust cold-chain and\nvendor network\nensures timely delivery,\nminimal waste,\nand consistent quality –\nevery single day."
    },
    {
      title: "Sustainable",
      description: "We reduce food loss\nand carbon footprint\nby shortening the\nsupply chain\nand optimizing\nlogistics at scale."
    },
    {
      title: "Cost Efficient",
      description: "Affordable, high-quality\nvegetables\ndelivered straight from\nfarmers to your doorstep,\ncutting out unnecessary\nmiddlemen."
    }
  ];

  const investorsData = [
    { name: 'Subham Sharma', title: 'CEO & Founder', company: 'ROS', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Heikki Linnakangas', title: 'Co-Founder', company: 'TechVentures', img: 'https://randomuser.me/api/portraits/men/33.jpg' },
    { name: 'Stas Kelvich', title: 'Co-Founder', company: 'InnovateX', img: 'https://randomuser.me/api/portraits/men/34.jpg' },
    { name: 'James Brodhead', title: 'VP Engineering', company: 'FutureTech', img: 'https://randomuser.me/api/portraits/men/35.jpg' },
    { name: 'Bryan Clark', title: 'VP Product', company: 'NextWave', img: 'https://randomuser.me/api/portraits/men/36.jpg' },
  ];

  return (
    <S.AboutContainer>
      <S.Section {...fadeInUp}>
        <S.MainSectionTitle>About Us</S.MainSectionTitle>
        <S.TextContent>
          <p>

            Welcome to ROS - Republic of Sabjiwala, where we're revolutionizing the way fresh produce reaches your table.
          </p>
          <p>
            Our mission is simple yet powerful: to deliver farm-fresh vegetables directly to your doorstep while ensuring
            fair prices for farmers and creating a more sustainable food ecosystem. With our cutting-edge logistics network
            and commitment to quality, we're making fresh, affordable produce accessible to everyone.
          </p>
        </S.TextContent>
      </S.Section>



      {/* Who We Are Section
      <WhoWeAreSection className="who-we-are-section">
        <SectionTitle>Who We Are</SectionTitle>
        <WhoWeAreGrid>
          <WhoWeAreContent className="who-we-are-content">
            <h3>Revolutionizing <HighlightText>Fresh Produce</HighlightText> Delivery</h3>
                <p>
              At ROS - Republic of Sabjiwala, we're transforming India's vegetable supply chain through innovation and technology. 
              Our mission is simple: connect farmers directly to consumers, ensuring fresh produce at fair prices.
                </p>
                <p>
              We combine cutting-edge logistics with sustainable practices to deliver farm-fresh vegetables to your doorstep. 
              Every vegetable we deliver carries our commitment to quality, sustainability, and community development.
                </p>
          </WhoWeAreContent>
          <WhoWeAreImage className="who-we-are-image">
            <img 
                src={image2} 
                alt="Our team and technology" 
                loading="lazy"
              />
          </WhoWeAreImage>
        </WhoWeAreGrid>
      </WhoWeAreSection> */}

      {/* Revolution Story Section */}
      <S.RevolutionSection ref={revolutionRef}>
        <S.RevolutionContainer>
          <S.RevolutionTitle>THE REVOLUTION</S.RevolutionTitle>
          <S.RevolutionSubtitle>From Sabjiwala to Republic of Sabjiwala</S.RevolutionSubtitle>
          <S.RevolutionContent>
            <S.RevolutionGrid ref={gridRef} onScroll={handleScroll}>
              <S.RevolutionTimeline />
              {[0, 1, 2].map((index) => (
                <S.RevolutionCard
                  key={index}
                  className={`revolution-card ${index === currentCard ? 'active' :
                    index === (currentCard + 2) % 3 ? 'prev' :
                      index === (currentCard + 1) % 3 ? 'next' : ''
                    }`}
                >
                  <S.CardNumber className="card-number">{`0${index + 1}`}</S.CardNumber>
                  <S.CardHeading className="card-heading">
                    {index === 0 ? 'The Beginning' :
                      index === 1 ? 'The Challenge' : 'The Evolution'}
                  </S.CardHeading>
                  <S.CardText>
                    {index === 0 ? 'In the heart of India\'s agricultural landscape, Sabjiwala was born from a simple yet powerful vision: to bridge the gap between farmers and consumers. What started as a small operation connecting local farmers to nearby markets quickly revealed the deep-rooted challenges in India\'s vegetable supply chain.' :
                      index === 1 ? 'We discovered that traditional supply chains were not just inefficient—they were fundamentally broken. Farmers were receiving less than 30% of the final price, while consumers paid premium prices for produce that had lost its freshness through multiple intermediaries.' :
                        'This realization sparked our transformation into ROS - Republic of Sabjiwala. We\'re not just a company; we\'re a movement that\'s redefining the entire vegetable supply chain ecosystem. Our technology-driven approach ensures that every stakeholder—from farmer to consumer—gets a fair deal.'}
                  </S.CardText>
                  <S.CardImage className="card-image">
                    <img
                      src={index === 0 ? jpSvg : index === 1 ? image2 : missionSvg}
                      alt={index === 0 ? 'The beginning of our journey' :
                        index === 1 ? 'The challenges we faced' :
                          'Our evolution into ROS'}
                      loading="lazy"
                    />
                  </S.CardImage>
                </S.RevolutionCard>
              ))}
            </S.RevolutionGrid>
            <S.ScrollIndicator>
              <div className="scroll-text">
                <span>Scroll to explore our journey</span>
                <svg className="scroll-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="dots">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`dot ${currentCard === index ? 'active' : ''}`}
                  />
                ))}
              </div>
            </S.ScrollIndicator>
          </S.RevolutionContent>
        </S.RevolutionContainer>
      </S.RevolutionSection>

      {/* Add the new mobile timeline */}
      <S.MobileTimelineContainer>
        <S.TimelineTitle>WORKFLOW</S.TimelineTitle>
        <S.MobileTimelineLine />
        {[
          {
            label: 'Farmers',
            description: 'Farmers bring their fresh produce to local mandis, ensuring quality and variety for our customers. Our team carefully selects the best produce to maintain high standards.'
          },
          {
            label: 'Mandi',
            description: 'Our team connects directly with mandis, establishing strong relationships for consistent supply. We work closely with farmers to ensure fair prices and sustainable practices.'
          },
          {
            label: 'Vendors',
            description: 'Local vendors receive fresh produce through our efficient distribution network. We maintain strict quality control and ensure timely delivery to all our partners.'
          },
          {
            label: 'Delivery',
            description: 'Our advanced logistics ensure timely delivery while maintaining product freshness. We use state-of-the-art technology to track and optimize every delivery.'
          },
          {
            label: 'Consumers',
            description: 'Fresh, high-quality vegetables reach your doorstep at competitive prices. We guarantee the best quality produce delivered right to your home.'
          }
        ].map((item, index) => (
          <S.MobileTimelineItem key={index} align={index % 2 === 0 ? 'left' : 'right'}>
            <S.MobileTimelinePoint />
            <S.MobileTimelineContent>
              <S.MobileTimelineLabel>{item.label}</S.MobileTimelineLabel>
              <S.MobileTimelineDescription>{item.description}</S.MobileTimelineDescription>
            </S.MobileTimelineContent>
          </S.MobileTimelineItem>
        ))}
      </S.MobileTimelineContainer>

      {/* Desktop Workflow Timeline Section */}
      <S.TimelineContainer ref={timelineRef}>
        <S.TimelineFlex>
          <S.TimelineLine className="timeline-line" />
          {/* Mandi (above) */}
          <S.TimelinePointWrapper left="10%" align="top">
            <S.TimelineLabel className="timeline-label" align="top">Farmers</S.TimelineLabel>
            <S.TimelinePoint className="timeline-point" />
            <S.TimelineVertical className="timeline-vertical" align="top" />
          </S.TimelinePointWrapper>
          {/* Ros (below) */}
          <S.TimelinePointWrapper left="25%" align="bottom">
            <S.TimelineVertical className="timeline-vertical" align="bottom" />
            <S.TimelinePoint className="timeline-point" />
            <S.TimelineLabel className="timeline-label" align="bottom">Mandi</S.TimelineLabel>
          </S.TimelinePointWrapper>
          {/* venders (above) */}
          <S.TimelinePointWrapper left="50%" align="top">
            <S.TimelineLabel className="timeline-label" align="top">venders</S.TimelineLabel>
            <S.TimelinePoint className="timeline-point" />
            <S.TimelineVertical className="timeline-vertical" align="top" />
          </S.TimelinePointWrapper>
          {/* Delivery (below) */}
          <S.TimelinePointWrapper left="70%" align="bottom">
            <S.TimelineVertical className="timeline-vertical" align="bottom" />
            <S.TimelinePoint className="timeline-point" />
            <S.TimelineLabel className="timeline-label" align="bottom">Delivery</S.TimelineLabel>
          </S.TimelinePointWrapper>
          {/* Consumers (above) */}
          <S.TimelinePointWrapper left="90%" align="top">
            <S.TimelineLabel className="timeline-label" align="top">Consumers</S.TimelineLabel>
            <S.TimelinePoint className="timeline-point" />
            <S.TimelineVertical className="timeline-vertical" align="top" />
          </S.TimelinePointWrapper>
        </S.TimelineFlex>
        <S.TimelineTitle>WORKFLOW</S.TimelineTitle>
      </S.TimelineContainer>

      {/* Right Aligned Hero Section */}
      <S.RightHeroSection className="hero-message-section">
        <S.RightHeroContainer className="hero-message-container">

          <S.RightHeroStatement className="hero-statement">
            Just Be Fresh
            <br />
            Empower the journey from mandi to home
            <br />
            with our farmer-first approach,
            <br />
            preserving the essence
            <br />
            of fresh, local produce.
          </S.RightHeroStatement>
        </S.RightHeroContainer>
      </S.RightHeroSection>

      {/* Left Aligned Hero Section */}
      <S.LeftHeroSection className="hero-message-section">
        <S.LeftHeroContainer className="hero-message-container">
          <S.LeftHeroStatement className="hero-statement">
            Farmers are at the center of everything we do.
          </S.LeftHeroStatement>
        </S.LeftHeroContainer>
      </S.LeftHeroSection>

      {/* Farmers Section */}
      <S.FarmersSection>
        <S.FarmersHeading>Our Farmers</S.FarmersHeading>
        <S.FarmersGrid>
          {farmersCards.map((card, index) => (
            <S.FarmersCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <S.FarmersTitle>{card.title}</S.FarmersTitle>
              <S.FarmersDesc>{card.description}</S.FarmersDesc>
            </S.FarmersCard>
          ))}
        </S.FarmersGrid>
        <S.FarmersScrollIndicator>
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </S.FarmersScrollIndicator>
      </S.FarmersSection>

      {/* ROS is for everyone section removed */}

      <S.LeadershipSection>
        <S.LeadershipLeft>
          <S.LeadershipHeading>Leadership</S.LeadershipHeading>
          <S.LeadershipDesc>
            Subham Sharma, the visionary CEO of ROS – Republic of Sabjiwala, is on a mission to revolutionize India's traditional vegetable supply chain. With a deep-rooted passion for sustainability and grassroots innovation, Subham has built ROS into a platform that not only delivers fresh produce at affordable prices but also uplifts local farmers and growers. His leadership combines technology with empathy, ensuring that every vegetable delivered carries the story of fair trade, clean sourcing, and efficient logistics. Under his guidance, ROS isn't just a business — it's a movement to empower communities and nourish the nation.
          </S.LeadershipDesc>
        </S.LeadershipLeft>
        <S.LeadershipRight>
          <S.LeaderPhoto src="https://randomuser.me/api/portraits/men/32.jpg" alt="Subham Sharma" />
          <S.LeaderName>Subham Sharma</S.LeaderName>
          <S.LeaderTitle>CEO & Founder</S.LeaderTitle>
        </S.LeadershipRight>
      </S.LeadershipSection>

      <S.InvestorsSection>
        <S.InvestorsTeam>
          {investorsData.map((investor, index) => (
            <S.InvestorCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <S.InvestorPhoto src={investor.img} alt={investor.name} />
              <S.InvestorName>{investor.name}</S.InvestorName>
              <S.InvestorTitle>{investor.title}</S.InvestorTitle>
              <S.CompanyName
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {investor.company}
              </S.CompanyName>
            </S.InvestorCard>
          ))}
        </S.InvestorsTeam>
      
      </S.InvestorsSection>
    </S.AboutContainer>
  );
};

export default AboutPage;
