import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cottageIcon from './icons/cottage.svg';
import farmerIcon from './icons/farmer.svg';
import plantIcon from './icons/plant.svg';
import flowersIcon from './icons/flowers.svg';
import growsIcon from './icons/grows.svg';
import s from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <nav> 
            <div className={s.navItem}>
              <img src={cottageIcon} alt="Домой"/>
              <p>Домой</p>
              <p className={s.textSmall}>Perfect solution:
                hotel, apartment, hostel, guest house</p>
            </div>
            <div className={s.navItem}>
              <img src={farmerIcon} alt="Ферма"/>
              <p>Ферма</p>
              <p className={s.textSmall}>Perfect solution:
                hotel, apartment, hostel, guest house</p>
            </div>
            <div className={s.navItem}>
              <img src={flowersIcon} alt="Растения"/>
              <p>Растения</p>
              <p className={s.textSmall}>Perfect solution:
                hotel, apartment, hostel, guest house</p>
            </div>
            <div className={s.navItem}>
              <img src={plantIcon} alt="Семена"/>
              <p>Семена</p>
              <p className={s.textSmall}>Perfect solution:
                hotel, apartment, hostel, guest house</p>
            </div>
            <div className={s.navItem}>
              <img src={growsIcon} alt="Контакты"/>
              <p>Контакты</p>
              <p className={s.textSmall}>Perfect solution:
                hotel, apartment, hostel, guest house</p>
            </div>
          </nav>
        </div>
        <div className={s.container}>
          <h1>Новости</h1>
        </div>
      </div>
    );
  }
  
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };
}

export default withStyles(s)(Home);
