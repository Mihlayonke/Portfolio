import './index.scss';
import React from 'react';

const AnimatedLetters = ({lettersClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((char, i) => {
                    return <span key = {char + i} className= {`${lettersClass} _${ i + idx}`}>
                        {char}
                    </span>
                })
            }
        </span>
    )
}

export default AnimatedLetters;