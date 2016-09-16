import React from 'react';
import createReactNativeComponentClass from 'react/lib/createReactNativeComponentClass';
import {SpanAttributes} from '../lib/attributes';
import Shape from './Shape';
import {pathProps, numberProp} from '../lib/props';

class Span extends Shape {
    static displayName = 'Span';

    static propTypes = {
        ...pathProps,
        x1: numberProp.isRequired,
        x2: numberProp.isRequired,
        y1: numberProp.isRequired,
        y2: numberProp.isRequired
    };

    static defaultProps = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    };

    setNativeProps = (...args) => {
        this.root.setNativeProps(...args);
    };

    render() {
        let props = this.props;
        return null;
        return <RNSVGSpan
            ref={ele => {this.root = ele;}}
            {...this.extractProps(props)}
            x1={props.x1.toString()}
            y1={props.y1.toString()}
            x2={props.x2.toString()}
            y2={props.y2.toString()}
        />;
    }
}

const RNSVGSpan = createReactNativeComponentClass({
    validAttributes: SpanAttributes,
    uiViewClassName: 'RNSVGSpan'
});

export default Span;
