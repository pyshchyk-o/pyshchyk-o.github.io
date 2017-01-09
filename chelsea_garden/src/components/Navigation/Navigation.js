import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <Link className={s.link} to="/">Домой</Link>
        <Link className={s.link} to="/about">О нас</Link>
        <Link className={s.link} to="/contact">Контакты</Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/login">Войти</Link>
        <span className={s.spacer}>или</span>
        <Link className={cx(s.link, s.highlight)} to="/register">Создать</Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
