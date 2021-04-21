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
        let onMouseOver = undefined;
        if (this.props.onMouseDown !== undefined) {
            const mouseDownHandler = this.props.onMouseDown;
            onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                e.preventDefault();
                mouseDownHandler(this.props.color);
            }

            onMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                e.preventDefault();
                if (e.buttons > 0) {
                    mouseDownHandler(this.props.color);
                }
            }
        }

        return (
            <div className="ColorArea" style={style}
                onMouseDown={onMouseDown}
                onMouseOver={onMouseOver}
                draggable='false'>
            </div>
        )
    }
}
