import React from 'react';

import SideBar from '../side-bar/SideBar'
import Logout from '../auth/Logout';
import AdminPage from '../admin/Admin';
import { App, SideBarWrapper, SideBarImg, SideBarCompanyImg, UserNameHeader } from './styled-components';

import { translation } from '../../lib/config';

import companyImg from '../../assets/images/agas.png';
import messageImg from '../../assets/images/message.jpg';
import graphImg from '../../assets/images/graph.jpg';
import personImg from '../../assets/images/person.jpg';
import contactImg from '../../assets/images/contact.jpg';
import adminImg from '../../assets/images/admin.png';

const HomePage = (props) => (
    <>
        <Logout />
        <UserNameHeader>{translation.hello + props.user.name}</UserNameHeader>
        <SideBarWrapper>
            <SideBar>
                <App><SideBarImg src={personImg} alt='personImg' />{translation.individualPage}</App>
                <App><SideBarImg src={adminImg} alt='adminImg' />{translation.admin}</App>
                <App><SideBarImg src={messageImg} alt='messageImg' />{translation.feed}</App>
                <App><SideBarImg src={graphImg} alt='graphImg' />{translation.graphs}</App>
                <App><SideBarImg src={contactImg} alt='contactImg' />{translation.getInTouch}</App>
                <SideBarCompanyImg src={companyImg} alt='companyImg' />
            </SideBar>
        </SideBarWrapper>
        <AdminPage />
    </>
);

export default HomePage;