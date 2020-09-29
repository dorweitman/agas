import React, { Component } from 'react';

import { SideBar, ToggleMenu } from './styled-components';
import { width, defaultXPosition } from './config';

class SideBarToggle extends Component {
    state = {
        xPosition: defaultXPosition,
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    };

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    };

    isSideBarOpen = () => {
        return this.state.xPosition === 0;
    };

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }

        if (this.isSideBarOpen()) {
            this.toggleMenu();
        }
    };


    toggleMenu = () => {
        const newXPosition = this.state.xPosition > 0 ? 0 : -width;

        this.setState({
            xPosition: newXPosition,
        });
    };

    render() {
        const style = { transform: `translatex(${this.state.xPosition}px)`, zIndex: `${this.state.xPosition === 0 ? 1 : -1}` };

        return (
            <SideBar style={style} ref={node => this.node = node}>
                {this.props.children}
                <ToggleMenu onClick={this.toggleMenu} />
            </SideBar>
        );
    }
};

export default SideBarToggle;