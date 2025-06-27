import '../styles/blogs.scss';
import { useNavigate } from 'react-router-dom';
import blogImage1 from '../assets/Blogs/Blog_image_1.jpg';
import blogImage2 from '../assets/Blogs/Blogs_Img_2.png';
import celebratingProcessImage from '../assets/Blog Images/Image_2.png';
import natureFlowImage from '../assets/Blog Images/Image_3.png';
import growerImage1 from '../assets/Blog Images/Image_4.jpg';
import growerImage2 from '../assets/Blog Images/Image_5.png';
import transprentBlackLogo from '../assets/logos/transprentblackLogo.png';

const BlogPage = () => {
  const navigate = useNavigate();

  const handleJoinCommunity = () => {
    navigate('/contact');
  };

  return (
    <div className="blog-container">
      {/* Top intro: left text, right image grid */}
      <section className="blog-section" style={{ marginTop: '2.5rem' }}>
        <div className="two-col">
          <div className="col">
            <div style={{ fontWeight: 700, fontSize: '1.8rem', marginBottom: 18 }} className="brand-color">
              <span><img src={transprentBlackLogo} alt="ROS Logo" className="blog-logo" /></span> ROS – Republic of Sabjiwala
            </div>
            <div style={{ fontWeight: 200, fontSize: '1.3rem', marginBottom: 12 }} className="blog-title">
              We are ROS – the Republic of Sabjiwala, a movement born from the soil and powered by people who believe in pure, honest food. We’re on a mission to revolutionize the vegetable supply chain by connecting farmers directly to families. From harvesting fresh potatoes and onions by hand to delivering colorful, chemical-free produce like peppers, radishes, and greens — we bring the farm to your kitchen in the freshest way possible. No middlemen, no storage delays — just real sabji, grown with love and delivered with care. ROS is not just a service, it’s a community where every vegetable tells a story, and every bite supports a farmer’s dream.
            </div>

          </div>
          <div className="col">
            <div className="image-grid responsive-grid">
              <img src={blogImage1} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram card + World Vegetable Day article */}
      <section className="blog-section">
        <div className="two-col">
          <div className="col">
            <div className="instagram-card card-hover">
              <img src={blogImage2} alt="Instagram blog image" className="blog-image-small" />
            </div>
          </div>
          <div className="col">
            <div className="card card-hover">
              <h1 style={{

                fontWeight: 700, marginBottom: '1rem', fontSize: "200"
              }} className="blog-title">
                World Vegetable Day: Celebrating Nature’s Real Superheroes
              </h1>
              <div style={{ fontWeight: 200, fontSize: '1.2rem', marginBottom: 12 }} className="text-animate">
                World Vegetable Day is more than just a date on the calendar — it's a global reminder of the power packed in every humble sabji. From leafy greens to crunchy roots, vegetables are nature’s original multivitamins, offering nutrition, freshness, and flavor to every meal.
                On this day, we celebrate not only the vegetables themselves but also the farmers who grow them, the soil that nurtures them, and the communities that rely on them. Eating vegetables isn't just good for health — it's a sustainable step for the planet. They require fewer resources to grow and support local ecosystems when grown naturally.
                At ROS (Republic of Sabjiwala), every day feels like World Vegetable Day. But today, we pause to say thank you — to the earth, the hands that harvest, and the kitchens that cook with love.
                So grab your greens, honor your local sabjiwala, and let’s grow a healthier, fresher tomorrow — one vegetable at a time. 🌱
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Celebrating process section */}
      < section className="blog-section" >
        <h2 className="centered-title blog-title">Celebrating process</h2>
        <div className="celebrating-process-image">
          <img src={celebratingProcessImage} alt="Celebrating process - Farm to table journey" className="process-image" />
        </div>
        <div style={{ fontWeight: 200, fontSize: '1.2rem', marginBottom: 12 }} className="text-block text-animate">
        At ROS – Republic of Sabjiwala, we celebrate every step in a vegetable’s life: the dawn harvest where farmers gently pick sun‑ripened produce, the bustling sorting sheds where teams in bright hairnets grade each tomato and potato with care, the smart‑routed vans that speed sabji straight from fields to families, and finally the kitchens where those vibrant greens sizzle into nourishing meals. By weaving farmers, volunteers, and customers into one transparent, tech‑enabled chain, we cut waste, slash middle‑man costs, and deliver market‑fresh vegetables to your doorstep at the lowest possible price—so every bite tastes of the soil it sprang from and the community that carried it home.        </div>
      </section >

      {/* Next row: left image grid, right text */}
      < section className="blog-section" >
        <div className="two-col">
          <div className="col">
            <div className="nature-flow-image">
              <img src={natureFlowImage} alt="Growing with nature - sustainable farming practices" className="flow-image" />
            </div>
          </div>
          <div className="col">
              <div style={{ fontWeight: 200, fontSize: '1.2rem', marginBottom: 12 }} className="text-animate">
              At ROS – Republic of Sabjiwala, we don’t just grow food — we grow with the earth. Surrounded by golden orchards, lush green farms, and crisp mountain air, every fruit we harvest is a gift from nature. From the planting of a single seed to the full bloom of apple trees and the harvest of pears under clear blue skies, we celebrate the environment that sustains us. Our commitment goes beyond supply chains — it’s about preserving soil, protecting water, and living in harmony with nature. Because when we care for the earth, it gives back in abundance.              </div>

          </div>
        </div>
      </section >

      {/* Celebrating Growers section */}
      < section className="blog-section" >
        <h2 className="centered-title blog-title">Celebrating Growers</h2>
        <div className="growers-content">
          <div className="growers-images">
            <img src={growerImage1} alt="Dedicated farmer working in the field" className="grower-image" />
            <img src={growerImage2} alt="Happy farmer celebrating harvest" className="grower-image" />
          </div>
          <div className="growers-text">
            At ROS – Republic of Sabjiwala, we believe the real heroes of every harvest are the growers — the silent caretakers of the land who rise with the sun and nurture every seed with patience, pride, and purpose. Whether it's a joyful woman harvesting blossoms in a field of green or an elder carefully picking herbs along a forest trail, their hands carry generations of knowledge and love. We celebrate these guardians of the soil, whose connection with nature brings life to our tables. Every vegetable, every flower, every fruit — is a reflection of their dedication
          </div>
        </div>
      </section >

      {/* Call to action section */}
      < section className="blog-section" >
        <div className="text-center margin-top-2">
          <button className="blog-button" onClick={handleJoinCommunity}>Join Our Community</button>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>
            Follow us on <a href="#">Instagram</a> and <a href="#">Twitter</a> for more updates
          </p>
        </div>
      </section >
    </div >
  );
};

export default BlogPage;