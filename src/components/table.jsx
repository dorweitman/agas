import React, { Component, Fragment } from 'react';
import { personProperties, createPersonObject, sendData, propertyType, redErrorBorder } from './table.config';
import { Button, Input, Select, Row, TableProperties, TopRightCorner, DeleteButton } from './table.components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class Table extends Component {
    state = {
        persons: [createPersonObject()],
        deleteMode: false,
        sendDataMode: false,
        startDate: new Date()
    };

    getObjectKeys = () => personProperties.map(p => p.translation);

    updateInputValue = (e, key, index, id) => {
        const changeObjectValue = (obj, value) => ({ ...obj, [key]: value });
        const value = e.target ? e.target.value : e;
        const newPersonsArray = this.state.persons.map((el, i) => (el.id === id && index === i) ? changeObjectValue(el, value) : el);

        this.setState({
            persons: newPersonsArray
        });
    };

    addRowButtonHandler = () => {
        const newPersonsArray = [...this.state.persons, createPersonObject()];

        this.setState({
            persons: newPersonsArray
        });
    };

    removeRowOptionHandler = () => {
        if (this.state.persons.length > 1) {
            this.setState(prevState => ({
                deleteMode: !prevState.deleteMode
            }));
        }
    };

    removeRowButtonHandler = (personIndex) => {
        if (this.state.persons.length > 1) {
            this.setState({
                persons: this.state.persons.slice(0, personIndex).concat(this.state.persons.slice(personIndex + 1)),
            });
        }
    };

    sendDataButtonHandler = () => {
        const arrayOfValues = this.state.persons.map(p => Object.values(p));
        const hasEmptyValues = arrayOfValues.flat().filter(value => (value === '' || value === '-')).length > 0;

        if (!hasEmptyValues) {
            console.log('data sent')
        }

        this.setState(prevState => ({
            sendDataMode: !prevState.sendDataMode
        }));
    };

    render() {
        const tableProperties = this.getObjectKeys().map((title) =>
            <TableProperties key={title}>
                {title}
            </TableProperties>
        );

        const TableValuesInput = (propertyIndex, value, key, personIndex, id) => {
            const { type, options, min, max } = personProperties[propertyIndex];
            const onChangeFunction = (e) => this.updateInputValue(e, key, personIndex, id);
            const styles = {};
            const badChars = ['', '-', 0];

            if (this.state.sendDataMode && badChars.includes(value)) {
                styles.border = redErrorBorder;
            }

            if (type === propertyType.date) {
                return <DatePicker selected={value} onChange={onChangeFunction} />;
            }

            if (type === propertyType.select) {
                return (
                    <Select onChange={onChangeFunction} style={styles}>
                        {options.map((option, index) => <option key={index}>{option}</option>)}
                    </Select>
                );
            }

            return <Input value={value} type={type} style={styles} onChange={onChangeFunction} min={min} max={max} />;
        }

        const addRowsButton = <Button onClick={this.addRowButtonHandler}>+</Button>;
        const removeRowsButton = <Button onClick={this.removeRowOptionHandler}>-</Button>;
        const sendDataButton = <Button onClick={this.sendDataButtonHandler}>{sendData}</Button>

        const tableValues = this.state.persons.map((person, personIndex) =>
            <tr key={personIndex}>
                <Row>{personIndex + 1}</Row>
                {Object.entries(person).map(([key, value], propertyIndex) =>
                    <td key={key}>
                        {TableValuesInput(propertyIndex, value, key, personIndex, person.id)}
                    </td>
                )}
                <td>
                    {this.state.deleteMode && <DeleteButton onClick={() => this.removeRowButtonHandler(personIndex)}>-</DeleteButton>}
                </td>
            </tr>
        );

        return (
            <Fragment>
                {sendDataButton}
                {addRowsButton}
                {removeRowsButton}
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