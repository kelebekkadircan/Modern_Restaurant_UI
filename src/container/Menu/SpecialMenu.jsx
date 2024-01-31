import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'
import './SpecialMenu.css';


const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title='Menu That Fits You Palette' />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">

      <div className="app__specialMenu-menu_wine flex__center ">
        <p className='app_specialMenu_menu_heading' > Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, i) => (
            <MenuItem key={i} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center ">
        <p className='app_specialMenu_menu_heading' > Cocktails </p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, i) => (
            <MenuItem key={i} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>

    </div>

    <div style={{ marginTop: '15px' }} >
      <button type='button' className='custom__button' >View More</button>
    </div>
  </div>
);

export default SpecialMenu;
