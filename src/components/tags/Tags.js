import './tags.scss';
import React from 'react';

export default function Tags({tags}) {
    return (
        <div>
            {tags.map((tag, index) => {
                return (
                    <button key={index}>{tag}</button>
                )
            })}
        </div>
    );
}
