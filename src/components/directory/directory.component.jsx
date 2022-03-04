import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: '../../assets/imgs/Illustration-01',
                  id: 1,
                }
            ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default Directory;