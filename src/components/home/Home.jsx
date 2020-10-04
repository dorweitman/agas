import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import SideBar from '../side-bar/SideBar'
import Logout from '../auth/Logout';
import AdminPage from '../admin/Admin';
import IndividualPage from '../individual/Individual';
import SearchBar from '../search-bar/SearchBar';
import { App, StyledNavLink, SideBarImg, SideBarCompanyImg, UserNameHeader } from './styled-components';

import { translation } from '../../lib/config';

import companyImg from '../../assets/images/agas.png';
import messageImg from '../../assets/images/message.jpg';
import graphImg from '../../assets/images/graph.jpg';
import personImg from '../../assets/images/person.jpg';
import contactImg from '../../assets/images/contact.jpg';
import adminImg from '../../assets/images/admin.png';
import searchBarImg from '../../assets/images/search-bar.png';

const HomePage = (props) => (
    <>
        <Logout />
        <UserNameHeader>{translation.hello + props.user.name}</UserNameHeader>
        <Router>
            <SideBar>
                <StyledNavLink to='/admin'><SideBarImg src={adminImg} alt='adminImg' />{translation.admin}</StyledNavLink>
                <StyledNavLink to='/individual'><SideBarImg src={personImg} alt='personImg' />{translation.individualPage}</StyledNavLink>
                <StyledNavLink to='/search'><SideBarImg src={searchBarImg} alt='searchBarImg' />{translation.searchBar}</StyledNavLink>
                <App to='/graph'><SideBarImg src={graphImg} alt='graphImg' />{translation.graphs}</App>
                <App to='/message'><SideBarImg src={messageImg} alt='messageImg' />{translation.feed}</App>
                <App to='/contact'><SideBarImg src={contactImg} alt='contactImg' />{translation.getInTouch}</App>
                <SideBarCompanyImg src={companyImg} alt='companyImg' />
            </SideBar>
            <Switch>
                <Route path='/admin' component={AdminPage} />
                <Route path='/individual' component={IndividualPage} />
                <Route path='/search' component={SearchBar} />
                <Redirect exact from='/' to='/admin' />
            </Switch>
        </Router>
    </>
);

export default HomePage;