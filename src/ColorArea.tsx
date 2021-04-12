import * as React from 'react';

export interface IColorAreaProps {
    color: string;
    width: string;
    height: string;
}

export class ColorArea extends React.Component<IColorAreaProps> {
    render() {
        const style = {
            backgroundColor: this.props.color,
            width: this.props.width,
            height: this.props.height
        }

        return (
            <div className="ColorArea" style={style}>
            </div>
        )
    }
}
