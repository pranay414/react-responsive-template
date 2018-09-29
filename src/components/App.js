import React, { Component } from 'react';
import DesktopBreakpoint from './responsive_utilities/desktop_breakpoint';
import TabBreakpoint from './responsive_utilities/tab_breakpoint';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';

export default class App extends Component {
    render() {
        return(
            <div>
                <h2>My breakpoints!</h2>

                <DesktopBreakpoint>
                    <h3>Desktop breakpoint..</h3>
                </DesktopBreakpoint>

                <TabBreakpoint>
                    <h3>Tab breakpoint..</h3>
                </TabBreakpoint>

                <PhoneBreakpoint>
                    <h3>Phone breakpoint..</h3>
                </PhoneBreakpoint>
            </div>
        );
    }
}