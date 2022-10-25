import React from 'react';
import '../styles/Leftbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <ul className="left-bar">
      <li>
        <FontAwesomeIcon icon={faLock} size="2x" />
        <div>금고1</div>
      </li>
      <li>
        <FontAwesomeIcon icon={faLock} size="2x" />
        <div>금고2</div>
      </li>
      <li>
        <FontAwesomeIcon icon={faLock} size="2x" />
        <div>금고3</div>
      </li>
      <li>
        <FontAwesomeIcon icon={faLock} size="2x" />
        <div>금고4</div>
      </li>
      <li>
        <span style={{ color: '#737373' }}>
          <FontAwesomeIcon icon={faLock} size="2x" />
        </span>
        <div style={{ lineHeight: '20px' }}>
          금고
          <br />
          추가
        </div>
      </li>
    </ul>
  );
};

export default Menu;