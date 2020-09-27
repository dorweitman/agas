import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import { sendData, propertyType, redErrorBorder, direction, badChars } from './config';
import { createObject } from './transform';
import { formatDate, formatMoment } from '../../utils';
import { url } from '../../config';
import { saveData } from '../../client';
import {
    Button,
    Input,
    Select,
    Row,
    TableProperties,
    TopRightCorner,
    DeleteButton
} from './styled-components';

import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';

class Table extends Component {
    state = {
        objects: [createObject(this.props.properties)],
        deleteMode: false,
        sendDataMode: false,
    };

    getObjectKeys = () => {
        return this.props.properties.map(property => property.translation);
    };

    updateInputValue = (e, key, index, property) => {
        const { repetitive, type } = property;

        let value = e.target ? e.target.value : e;
        let newObjectsArray = [...this.state.objects];

        if (type === propertyType.date) {
            value = formatDate(value);
        }

        if (type === propertyType.timer) {
            value = formatMoment(value);
        }

        if (repetitive) {
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
        const arrayOfValues = this.state.objects.map(Object.values);
        const hasEmptyValues = arrayOfValues.flat().some(elem => badChars.includes(elem));

        this.setState(prevState => ({
            sendDataMode: !prevState.sendDataMode
        }), () => {
            if (!hasEmptyValues) {
                console.log(this.state.objects);

                saveData(`${url}/${this.props.route}`, this.state.objects)
                    .then(res => {
                        console.log(res);
                    });
            }
        });

    };

    render() {
        const tableProperties = this.getObjectKeys().map(title => <TableProperties key={title}>{title}</TableProperties>);

        const TableValuesInput = (value, property, onChangeFunction) => {
            const { value: propertyName, type, options, min, max } = property;
            const { timer, date, select } = propertyType;
            const styles = {};

            if (this.state.sendDataMode && badChars.includes(value)) {
                styles.border = redErrorBorder;
            }

            switch (type) {
                case timer: return <TimePicker onChange={onChangeFunction} style={{ direction }} defaultValue={this.props.defaultTime} />;
                case date: return <DatePicker selected={new Date(value)} onChange={onChangeFunction} />;
                case select: return (
                    <Select onChange={onChangeFunction} style={styles} value={this.state.objects[0][propertyName]}>
                        {Object.entries(options).map(([optionKey, optionValue]) =>
                            <option key={optionKey} value={optionKey}>{optionValue}</option>
                        )}
                    </Select>);
                default: return <Input value={value} style={styles} type={type} onChange={onChangeFunction} min={min} max={max} />;
            }
        };

        const tableValues = this.state.objects.map((object, objectIndex) =>
            <tr key={objectIndex}>
                <Row>{objectIndex + 1}</Row>
                {Object.entries(object).map(([key, value], propertyIndex) => {
                    const property = this.props.properties[propertyIndex];
                    const onChangeFunction = (e) => this.updateInputValue(e, key, objectIndex, property);

                    return <td key={key}> {TableValuesInput(value, property, onChangeFunction)} </td>;
                })}
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