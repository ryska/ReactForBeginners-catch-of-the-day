import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
  render() {
    const { details, index } = this.props; // === this.props.details
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable? 'Add to Order' : 'Sold Out!'


    return (
      <li className="menu-fish">
        <h3 className="fish-name">
          {details.name}
          <span className="price">
            {formatPrice(details.price)}
          </span>
        </h3>
        <img src={details.image} alt={details.name}/>
        <p>{details.desc}</p>
        <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
      </li>

    )
  }

// inside class!! 
  static propTypes = {
    details: React.PropTypes.object.isRequired,
    index: React.PropTypes.string.isRequired,
    addToOrder: React.PropTypes.func.isRequired
  };
}


export default Fish;
