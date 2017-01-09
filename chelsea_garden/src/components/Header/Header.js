import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import backGround from './flowers_bg.jpg';
import logo from './logo.svg';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root} style={{backgroundImage: `url(${backGround})`, backgroundSize: 'cover'}}>
        <div className={s.container}>
          <Navigation className={s.nav} />
          <Link className={s.brand} to="/">
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="38" height="38" alt="React" />
            <span className={s.brandTxt}>Chelsea Garden</span>
          </Link>
          <div className={s.banner}>
            <div><img src={logo} srcSet={`${logo}`} alt="ChelseaGarden" /></div>
            <h1 className={s.bannerTitle}>CHELSEA GARDEN</h1>
            <p className={s.bannerDesc}>Explore the secret life of the city.</p>
            <input className={s.search} type="text" placeholder="Поиск"/>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
