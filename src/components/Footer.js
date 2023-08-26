import React from 'react';

export default function Footer(props) {
    return  (
        <footer className="footer">
            <p> © 2023 Luke A DenHartog. All Rights Reserved.</p>
            {props.children}
      </footer>
    )
}
