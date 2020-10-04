import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';

import { propertyType, redErrorBorder, direction, badChars, disabledExcelButtonStyle } from './config';
import { createObject, formatValue } from './util';
import { translation } from '../../lib/config';
import { saveData, getData } from '../../client';

import {
    Button,
    Input,
    Select,
    Row,
    TableProperties,
    TopRightCorner,
    DeleteButton,
    ExcelImg,
} from './styled-components';

import excelImg from '../../assets/images/excel.png';

import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';

class Table extends Component {
    state = {
        objects: [createObject(this.props.properties)],
        deleteMode: false,
        sendDataMode: false,
        sentSuccessfully: false,
    };

    getObjectKeys = () => {
        return this.props.properties.map(property => property.translation);
    };

    updateInputValue = (e, index, property) => {
        const { repetitive, type, name } = property;
        const value = formatValue(type, e?.target?.value || e); 
        
        let newObjectsArray = [...this.state.objects];

        if (repetitive) {
            newObjectsArray = newObjectsArray.map(el => ({ ...el, [name]: value }));
        } else {
            newObjectsArray[index][name] = value;
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
        if (this.state.objects.length > 1 || this.state.deleteMode) {
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
        this.setState(prevState => ({
            sendDataMode: !prevState.sendDataMode
        }), this.sendData);
    };

    sendData = () => {
        let arrayOfValues = [];

        for (const object of this.state.objects) {
            arrayOfValues = arrayOfValues.concat(Object.values(object));
        }

        const hasEmptyValues = arrayOfValues.some(value => badChars.includes(value));

        if (hasEmptyValues) {
            return;
        }

        saveData(this.props.route, this.state.objects)
            .then(res => {
                console.log(res);

                this.setState(prevState => ({
                    sentSuccessfully: !prevState.sentSuccessfully
                }));
            });
    };

    downloadExcelFile = () => {
        const { name, event_date: date } = this.state.objects[0];

        getData(`export/${this.props.route}`, {
            params: {
                date,
                name,
            },
        }).then(() => console.log('Excel saved.'))
    };

    exportToExcelButton = () => {
        if (!this.props.exportToExcel) {
            return;
        }

        const style = this.state.sentSuccessfully ? {} : disabledExcelButtonStyle; 

        return (
            <Button
                style={style}
                disabled={!this.state.sentSuccessfully}
                onClick={this.downloadExcelFile}>
                <ExcelImg src={excelImg} />
            </Button>
        );
    };

    sendDataButtonText = () => {
        return this.state.sentSuccessfully ? translation.dataSentSuccessfully : translation.sendData;
    };

    render() {
        const tableProperties = this.getObjectKeys().map(title => <TableProperties key={title}>{title}</TableProperties>);

        const TableCell = (objectIndex, value, property) => {
            const { name, type, repetitive, options, min, max } = property;
            const { timer, date, select } = propertyType;
            const styles = {};

            const onChangeFunction = (e) => this.updateInputValue(e, objectIndex, property);

            if (this.state.sendDataMode && badChars.includes(value)) {
                styles.border = redErrorBorder;
            }

            switch (type) {
                case timer: return <TimePicker onChange={onChangeFunction} style={{ direction }} defaultValue={this.props.defaultTime} />;
                case date: return <DatePicker selected={new Date(value)} onChange={onChangeFunction} />;
                case select: return (
                    <Select value={this.state.objects[repetitive ? 0 : objectIndex][name]} onChange={onChangeFunction} style={styles}>
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

                    return <td key={key}>{TableCell(objectIndex, value, property)}</td>;
                })}
                <td>
                    {this.state.deleteMode && <DeleteButton onClick={() => this.removeRowButtonHandler(objectIndex)}>-</DeleteButton>}
                </td>
            </tr>
        );

        const addRowsButton = <Button onClick={this.addRowButtonHandler}>+</Button>;
        const removeRowsButton = <Button onClick={this.removeRowOptionHandler}>-</Button>;
        const sendDataButton = <Button onClick={this.sendDataButtonHandler}>{this.sendDataButtonText()}</Button>;

        return (
            <>
                {this.exportToExcelButton()}
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