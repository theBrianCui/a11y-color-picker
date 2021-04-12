import * as React from 'react';
import {ColorArea, IColorAreaProps} from './ColorArea';

class App extends React.Component {
    render() {
        const colors = ['red', 'green', 'blue'];
        const size = {
            width: '50px',
            height: '100px'
        };

        const colorAreas = colors.map(c => {
            const props: IColorAreaProps = {
                color: c,
                width: size.width,
                height: size.height
            };

            return <ColorArea {...props}></ColorArea>
        });

        return (
            <div className="app">
                {colorAreas}
            </div>
        );
    }
}

export default App;
