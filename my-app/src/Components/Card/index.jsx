
import React, { Component } from 'react'
import styles from './Card.module.css';
import stc from 'string-to-color'
import PropTypes from 'prop-types';
// export default class Card extends Component {
//   render() {
//     //const {name, surname} = this.props.user;
//     //const {select} = this.props;
//     const {user: {name, surname, isSelected}, select} = this.props;
//     const selectedStyle = isSelected ? styles.selected : null;
//     return (
//       <li onClick={select} className={selectedStyle}>
//         <p>{name} {surname}</p>
//       </li>
//     )
//   }
// }

//В карточке добавить цветной круг (див) того цвета который вернет
// string-to-color  и в круге белые инициалы


export default class Card extends Component {
  render() {
    const {user: {name, surname, isSelected}, select} = this.props;
    const selectedStyle = isSelected ? styles.selected : null;
    const color = stc(name+surname);
    const initials = name[0].toUpperCase() + surname[0].toUpperCase();
    const styleDiv = {
      backgroundColor: color
    }
    return (
      <li onClick={select} className={selectedStyle}>
        <div className={styles.colorDiv} style={styleDiv}>
            {initials}
        </div>
        <p>{name} {surname}</p>
      </li>
    )
  }
}

Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    isSelected: PropTypes.bool.isRequired,
  }),
  select: PropTypes.func,
}

Card.defaultProps = {
  user: {
    name: 'unknown',
    surname: 'unknown',
    isSelected: false,
  }
}

// <Card user={name: 'n', surname:'s', isSelected: true} />
