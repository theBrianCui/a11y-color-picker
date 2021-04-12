import * as React from 'react';
import * as TinyColor from 'tinycolor2';

export interface IColorAreaProps {
    color: TinyColor.Instance;
    width: string;
    height: string;
}

export class ColorArea extends React.Component<IColorAreaProps> {
    render() {
        const style = {
            backgroundColor: this.props.color.toRgbString(),
            width: this.props.width,
            height: this.props.height
        }

        return (
            <div className="ColorArea" style={style}>
            </div>
        )
    }
}
