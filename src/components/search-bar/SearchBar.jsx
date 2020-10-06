import React, { Component } from 'react';

import { translation, text } from '../../lib/config';
import { route, tableNames } from './config';
import { getData, saveData } from '../../client';

import { properties as personProperties } from '../person/config';
import { eventProperties } from '../event/config';

import {
    SearchBox,
    SearchInput,
    Header,
    Wrapper,
    Title,
    Table,
    TableHeaderCell,
    TableCell,
    Row,
    TableHeader,
    AgasImg,
    Button,
    ExcelImg,
} from './styled-components';

import agasImg from '../../assets/images/agas.png';
import excelImg from '../../assets/images/excel.png';

class SearchBar extends Component {
    state = {
        result: {},
        buttons: [],
        input: '',
    }

    getTableCells = (array) => {
        const tableCells = array.map((element, arrIndex) => (
            <Row key={arrIndex}>
                {Object.values(element).map((value, objIndex) => <TableCell key={objIndex}>{value.toString()}</TableCell>)}
            </Row>
        ));

        return tableCells;
    }

    translateKey = (key) => {
        const properties = [...tableNames, ...personProperties, ...eventProperties];

        for (const property of properties) {
            if (property.name === key) {
                return property.translation;
            }
        }

        return key;
    }

    getTableHeaders = (object = {}) => {
        return Object.keys(object).map((key, index) => <TableHeaderCell key={index}>{this.translateKey(key)}</TableHeaderCell>);
    }

    createTable = (array) => {
        return (
            <Table>
                <tbody>
                    <Row>{this.getTableHeaders(array[0])}</Row>
                    {this.getTableCells(array)}
                </tbody>
            </Table>
        );
    }

    createTableLayout = ([tableName, array], index) => {
        const shouldDisplayTable = !!this.state.buttons[index];
        const doesTableContainData = array.length > 0;

        if (!doesTableContainData) {
            return;
        }

        const button = <Button onClick={() => this.downloadExcelFile(array)}><ExcelImg src={excelImg} /></Button>;
        const tableHeader = <TableHeader key={tableName} onClick={() => this.tableHeaderHandler(index)}>
            {this.translateKey(tableName)}
            {button}
        </TableHeader>;

        if (!shouldDisplayTable) {
            return tableHeader;
        }

        const table = this.createTable(array);

        return <div key={index}>{tableHeader}{table}</div>;
    }

    createTables = () => {
        return Object.entries(this.state.result).map(this.createTableLayout);
    }

    downloadExcelFile = (array) => {
        saveData(`export`, array).then(() => console.log('Excel saved.'))
    };

    tableHeaderHandler = (index) => {
        let newbuttons = [...this.state.buttons];

        newbuttons[index] = !newbuttons[index]

        this.setState(() => ({
            buttons: newbuttons
        }));
    }

    onChangeHandler = (e) => {
        const input = e.target.value;

        getData(route, {
            params: {
                search: input,
            }
        }).then(res => {
            const result = res.data;
            const numOfPropertiesInObject = Object.keys(result).length;
            const buttons = new Array(numOfPropertiesInObject).fill(true);

            this.setState({
                result,
                buttons,
                input,
            });
        });
    }

    render() {
        const title = <Title>
            {text.search}
            <AgasImg src={agasImg} alt='agasImg' />
        </Title>;

        return (
            <Wrapper>
                <Header>
                    {title}
                    <SearchBox>
                        <SearchInput
                            type='text'
                            placeholder={translation.searchBarPlaceholder}
                            onChange={this.onChangeHandler}
                        />
                    </SearchBox>
                </Header>
                {this.createTables()}
            </Wrapper>
        );
    }
}

export default SearchBar;