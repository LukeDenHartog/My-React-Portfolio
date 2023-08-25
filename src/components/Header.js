import React from 'react';

export default function Header(props) {
    return  (
        <header className="header">
            <h1>Luke DenHartog</h1>
            {props.children}
      </header>
    )
}
