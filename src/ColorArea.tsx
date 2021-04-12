import * as React from 'react';
import * as TinyColor from 'tinycolor2';

export interface IColorAreaProps {
    color: TinyColor.Instance;
    width: string;
    height: string;
    onMouseDown?: (color: TinyColor.Instance) => void;
}

export class ColorArea extends React.Component<IColorAreaProps> {
    render() {
        const style = {
            backgroundColor: this.props.color.toRgbString(),
            width: this.props.width,
            height: this.props.height
        }

        let onMouseDown = undefined;
        if (this.props.onMouseDown) {
            onMouseDown = (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                (this.props.onMouseDown as (color: TinyColor.Instance) => void)(this.props.color);
            }
        }

        return (
            <div className="ColorArea" style={style} onMouseDown={onMouseDown} draggable='false'>
            </div>
        )
    }
}
