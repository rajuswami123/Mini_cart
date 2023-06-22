import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/" className="badges">
          <h1>Raju Mens Wear</h1>
        </a>
      </div>
      <div>
        <a href="#/cart" className="badges">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        
      </div>
    </header>
  );
}
