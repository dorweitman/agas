import React, { Component, Fragment } from 'react';
import { personProperties, createPersonObject, sendData, selectInputType } from './table.config';
import { Button, Input, Select, Row, TableProperties, TopRightCorner } from './table.components';

class Table extends Component {
    state = {
        persons: [createPersonObject()]
    };

    getObjectKeys = () => personProperties.map(p => p.name);

    updateInputValue = (e, key, index, id) => {
        const changeObjectValue = (obj, value) => ({ ...obj, [key]: value });

        const value = e.target.value;
        const newPersonsArray = this.state.persons.map((el, i) => (el.id === id && index === i) ? changeObjectValue(el, value) : el);

        this.setState({
            persons: newPersonsArray
        });
    };

    buttonHandler = () => {
        const newPersonsArray = [...this.state.persons, createPersonObject()];

        this.setState({
            persons: newPersonsArray
        });
    };

    render() {
        const tableProperties = this.getObjectKeys().map((title) =>
            <TableProperties key={title}>
                {title}
            </TableProperties>
        );

        const TableValuesInput = (propertyIndex, value, key, personIndex, id) => {
            const { type, options } = personProperties[propertyIndex];
            const onChangeFunction = (e) => this.updateInputValue(e, key, personIndex, id);

            if (type === selectInputType) {
                return (
                    <Select onChange={onChangeFunction}>
                        {options.map((option, index) => <option key={index}>{option}</option>)}
                    </Select>
                );
            }

            return <Input value={value} type={type} onChange={onChangeFunction} />
        }

        const tableValues = this.state.persons.map((person, personIndex) =>
            <tr key={personIndex}>
                <Row>{personIndex + 1}</Row>
                {Object.entries(person).map(([key, value], propertyIndex) =>
                    <td key={key}>
                        {TableValuesInput(propertyIndex, value, key, personIndex, person.id)}
                    </td>
                )}
            </tr>
        );
        const addRowsButton = <Button onClick={this.buttonHandler}>+</Button>;
        const sendDataButton = <Button>{sendData}</Button>

        return (
            <Fragment>
                {sendDataButton}
                {addRowsButton}
                <table>
                    <tbody>
                        <tr>
                            <TopRightCorner />
                            {tableProperties}
                        </tr>
                        {tableValues}
                    </tbody>
                </table>
            </Fragment>
        );
    };
};

export default Table; 