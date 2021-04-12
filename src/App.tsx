import * as React from 'react';
import TinyColor from 'tinycolor2';

import {ColorArea, IColorAreaProps} from './ColorArea';
import {RAINBOW} from './Helpers';

class App extends React.Component<{}, { selectedColor: TinyColor.Instance }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedColor: TinyColor('#ffffff')
        };
    }

    onMouseDown = (color: TinyColor.Instance) => {
        this.setState({
            selectedColor: color
        });
    }

    render() {
        const colors = RAINBOW;
        const size = {
            width: '0.5px',
            height: '50px'
        };

        const colorAreas = colors.map(c => {
            const props: IColorAreaProps = {
                color: c,
                width: size.width,
                height: size.height,
                onMouseDown: this.onMouseDown
            };

            return <ColorArea {...props}></ColorArea>
        });

        const selected = this.state.selectedColor;
        return (
            <div className="app">
                {colorAreas}
                <ColorArea color={selected} width='25px' height='25px'></ColorArea>
            </div>
        );
    }
}

export default App;
