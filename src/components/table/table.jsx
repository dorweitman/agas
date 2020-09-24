import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import { sendData, propertyType, redErrorBorder, direction, badChars } from './config';
import { createObject } from './transform';
import { saveData } from '../../client';
import {
    Button,
    Input,
    Select,
    Row,
    TableProperties,
    TopRightCorner,
    DeleteButton
} from './components';

import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';

class Table extends Component {
    state = {
        objects: [createObject(this.props.properties)],
        startDate: new Date(),
        deleteMode: false,
        sendDataMode: false
    };

    getObjectKeys = () => {
        return this.props.properties.map(property => property.translation);
    };

    updateInputValue = (e, key, index, same) => {
        const value = e.target ? e.target.value : e;

        let newObjectsArray = [...this.state.objects];

        if (same) {
            newObjectsArray = newObjectsArray.map(el => ({ ...el, [key]: value }));
        } else {
            newObjectsArray[index][key] = value;
        }

        this.setState({
            objects: newObjectsArray
        });
    };

    addRowButtonHandler = () => {
        const newObjectsArray = [...this.state.objects, createObject(this.props.properties)];

        this.setState({
            objects: newObjectsArray
        });
    };

    removeRowOptionHandler = () => {
        if (this.state.objects.length > 1) {
            this.setState(prevState => ({
                deleteMode: !prevState.deleteMode
            }));
        }
    };

    removeRowButtonHandler = (objectIndex) => {
        if (this.state.objects.length > 1) {
            this.setState({
                objects: this.state.objects
                    .slice(0, objectIndex)
                    .concat(this.state.objects.slice(objectIndex + 1))
            });
        }
    };

    sendDataButtonHandler = () => {
        const arrayOfValues = this.state.objects.map(obj => Object.values(obj));
        const hasEmptyValues = arrayOfValues.flat().includes(...badChars);
        console.log(this.state.objects); 
        console.log(JSON.stringify(this.state.objects))
        if (!hasEmptyValues) {
            // fetch(url, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: this.state.objects
            // }).then(response => {
            //     console.log(response);
            // }); 
        }

        this.setState(prevState => ({
            sendDataMode: !prevState.sendDataMode
        }));

    };

    render() {
        const tableProperties = this.getObjectKeys().map((title) =>
            <TableProperties key={title}>{title}</TableProperties>
        );

        const TableValuesInput = (value, propertyIndex, key, objectIndex) => {
            const { type, options, min, max, same } = this.props.properties[propertyIndex];
            const { timer, date, select } = propertyType;
            const styles = {};

            const onChangeFunction = (e) => this.updateInputValue(e, key, objectIndex, same);

            if (this.state.sendDataMode && badChars.includes(value)) {
                styles.border = redErrorBorder;
            }

            switch (type) {
                case timer: return <TimePicker onChange={onChangeFunction} style={{ direction }} defaultValue={this.props.defaultTime} />;
                case date: return <DatePicker selected={value} onChange={onChangeFunction} />;
                case select: return (
                    <Select onChange={onChangeFunction} style={styles}>
                        {options.map((option) => <option key={option}>{option}</option>)}
                    </Select>);
                default: return <Input value={value} type={type} style={styles} onChange={onChangeFunction} min={min} max={max} />
            }
        };

        const tableValues = this.state.objects.map((object, objectIndex) =>
            <tr key={objectIndex}>
                <Row>{objectIndex + 1}</Row>
                {Object.entries(object).map(([key, value], propertyIndex) =>
                    <td key={key}>
                        {TableValuesInput(value, propertyIndex, key, objectIndex)}
                    </td>
                )}
                <td>
                    {this.state.deleteMode && <DeleteButton onClick={() => this.removeRowButtonHandler(objectIndex)}>-</DeleteButton>}
                </td>
            </tr>
        );

        const addRowsButton = <Button onClick={this.addRowButtonHandler}>+</Button>;
        const removeRowsButton = <Button onClick={this.removeRowOptionHandler}>-</Button>;
        const sendDataButton = <Button onClick={this.sendDataButtonHandler}>{sendData}</Button>

        return (
            <>
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
            </>
        );
    };
}

export default Table; 