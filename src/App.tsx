import * as React from 'react';
import TinyColor from 'tinycolor2';
import {ColorArea, IColorAreaProps} from './ColorArea';

const RAINBOW: TinyColor.Instance[] = (() => {
    const colors = [];
    let r = 255;
    let g = 0;
    let b = 0;

    for (g = 0; g <= 255; ++g) {
        colors.push(TinyColor({ r,g,b }));
    }
    g = 255;

    for (r = 255; r >= 0; r--) {
        colors.push(TinyColor({ r,g,b }));
    }
    r = 0;

    for (b = 0; b <= 255; ++b) {
        colors.push(TinyColor({ r,g,b }));
    }
    b = 255;

    for (g = 255; g >= 0; g--) {
        colors.push(TinyColor({ r,g,b }));
    }
    g = 0;

    for (r = 0; r <= 255; ++r) {
        colors.push(TinyColor({ r,g,b }));
    }
    r = 255;

    for (b = 255; b >= 0; b--) {
        colors.push(TinyColor({ r,g,b }));
    }
    b = 0;

    return colors;
})();

class App extends React.Component {
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
