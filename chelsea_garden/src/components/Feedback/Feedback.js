import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.css';

class Feedback extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <a
            className={s.link}
            href="#"
          >Задать вопрос</a>
          <span className={s.spacer}>|</span>
          <a
            className={s.link}
            href="#"
          >Сообщить об ошибке</a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Feedback);
