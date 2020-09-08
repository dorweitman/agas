import React, { Component, Fragment } from 'react';
import { person } from './table.config';
import { Button, Grid, Input, OrderedList } from './table.components';

class Table extends Component {
    state = {
        persons: [person]
    };

    getObjectKeys = () => Object.keys(person);

    updateInputValue = (e, key, index, id) => {
        const changeObjectValue = (obj, value) => ({ ...obj, [key]: value });

        const value = e.target.value;
        const newPersonsArray = this.state.persons.map((el, i) => (el.id === id && index === i) ? changeObjectValue(el, value) : el);

        this.setState({
            persons: newPersonsArray
        });
    };

    buttonHandler = () => {
        const newPersonsArray = [...this.state.persons, person];

        this.setState({
            persons: newPersonsArray
        });
    };

    render() {
        const tableProperties = this.getObjectKeys().map((title) =>
            <td key={title}>
                {title}
            </td>
        );
        const tableValues = this.state.persons.map((person, index) =>
            <tr key={index}>
                <OrderedList>{index + 1}</OrderedList>
                {Object.entries(person).map(([key, value]) =>
                    <td key={key}>
                        <Input value={value} onChange={(e) => this.updateInputValue(e, key, index, person.id)} />
                    </td>
                )}
            </tr>
        );
        const addRowsButton = <Button onClick={this.buttonHandler}>+</Button>;

        return (
            <Fragment>
                {addRowsButton}
                <Grid>
                    <tbody>
                        <tr>
                            <td />
                            {tableProperties}
                        </tr>
                        {tableValues}
                    </tbody>
                </Grid>
            </Fragment>
        );
    };
};

export default Table; 