import * as React from 'react';
import TinyColor from 'tinycolor2';

export interface IColorInputProps {
    selectedColor: TinyColor.Instance;
}

export class ColorInput extends React.Component<IColorInputProps, {}> {
    constructor(props: IColorInputProps) {
        super(props);
    }

    render() {
        const colorString = this.props.selectedColor.toRgbString();
        return (
            <input className="ColorInput" type="text" value={colorString}></input>
        )
    }
}
