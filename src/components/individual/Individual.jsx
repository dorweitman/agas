import React, { Component } from 'react';

import { Img, Title, People } from './styled-components';

import { translation } from '../../lib/config';
import { route } from './config';
import { getData } from '../../client';

import groupImg from '../../assets/images/group.jpg';

class IndividualPage extends Component {
    state = {
        persons: [],
    }

    componentDidMount() {
        getData(route).then(res => {
            const persons = res.data.matches;

            this.setState({ persons });
        });
    }

    render() {
        const people = this.state.persons.map((person, index) =>
            <People key={index}>{`${person.first_name} ${person.last_name} : ${person.duration}`}</People>
        );

        return (
            <>
                <Title>{translation.communityRun}</Title>
                <Img src={groupImg} />
                {people}
            </>
        );
    }
};

export default IndividualPage;