import './Damla.css';
import React from 'react';

function Damla(props) {
    const size = props.boyut + "em";
    const handleClick = function (event) {
        if (props.degistiginde) {
            props.degistiginde(props.indeks, props.boyut + 1);
        }
    };

    return (
        <div onClick={handleClick} className='Damla'
            style={{ width: size, height: size }}>
            {props.boyut}
        </div>
    );
}

export default Damla;