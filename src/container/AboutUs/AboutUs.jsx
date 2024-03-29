import { images } from '../../constants';
import './AboutUs.css';


const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding ' id='abput' >
    <div className="app__aboutus-overlay flex__center ">
      <img src={images.G} alt='g letter' className='' />
    </div>
    <div className='app__aboutus-content flex__center' >

      <div className='app__aboutus-content_about' >
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon_img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet aperiam labore. Molestiae accusamus dolorum commodi molestias ut dolore corrupti?</p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center ">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history' >
        <h1 className='headtext__cormorant'>Out History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon_img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet aperiam labore. Molestiae accusamus dolorum commodi molestias ut dolore corrupti?</p>
        <button type='button' className='custom__button'>
          Read More
        </button>
      </div>

    </div>
  </div>
);

export default AboutUs;
