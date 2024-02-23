import React from 'react';

const ListFilter = (props) => {
    return (
        <div className="filter-container" >
            {
                props.selection.map((item, index) => {
                    return (
                        <button
                            className={item === props.selected ? 'selected-filter-button' : 'filter-button'}
                            key={index}
                            value={item}
                            onClick={props.handleChange}>
                            {item}
                        </button>
                    );
                })
            }
        </div>
    );
};

export default ListFilter;