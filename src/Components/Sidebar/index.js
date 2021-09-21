import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper , SideBtnWrap, SidebarMenu, SidebarLink, SidebarRoute } from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">        {/* Remember these 'to' are react-scroll link not router link */}
                        About
                    </SidebarLink>
                    <SidebarLink to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services">
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup">
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>   {/* in"to" attribute used '/' before the name cause it's a react router link not scroll link */}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
