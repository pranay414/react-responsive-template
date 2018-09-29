import React from 'react';
import Breakpoint from './breakpoint';

export default function TabBreakpoint(props) {
    return(
        <Breakpoint name="tablet">
            {props.children}
        </Breakpoint>
    )
}