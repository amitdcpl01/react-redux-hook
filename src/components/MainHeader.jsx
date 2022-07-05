import React from 'react';
import {Header} from 'semantic-ui-react';

// function MainHeader(props) {
//     const {title} = props;
//     return (
//         <div>
//             <Header as='h1'>{title}</Header>
//         </div>
//     );
// }

function MainHeader({title, type= "h1"}) {
    return (
        <div>
            <Header as={type}>{title}</Header>
        </div>
    );
}

export default MainHeader;