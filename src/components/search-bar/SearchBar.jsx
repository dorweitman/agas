import React, { Component } from 'react';

import { translation } from '../../lib/config';
import { route } from './config';
import { getData } from '../../client';

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
} from './styled-components';

class SearchBar extends Component {
    state = {
        result: {},
        buttons: [],
        input: '',
    }

    getTableCells = (array) => {
        const tableCells = array.map((element) => (
            <Row>{Object.values(element).map((value) => <TableCell>{value.toString()}</TableCell>)}</Row>
        ));

        return tableCells;
    }

    getTableHeaders = (object = {}) => {
        return Object.keys(object).map((key) => <TableHeaderCell>{key}</TableHeaderCell>);
    }

    createTable = (tableName, array) => {
        return (
            <Table>
                <tbody>
                    <Row key={tableName}>{this.getTableHeaders(array[0])}</Row>
                    {this.getTableCells(array)}
                </tbody>
            </Table>
        );
    }

    createTableLayout = ([tableName, array], index) => {
        const tableHeader = <TableHeader onClick={() => this.tableHeaderHandler(index)}>{tableName}</TableHeader>;
        const shouldDisplayTable = this.state.buttons[index] && array.length > 0; 

        const table = shouldDisplayTable && this.createTable(tableName, array);

        return <>{tableHeader}{table}</>;
    }

    createTables = () => {
        return Object.entries(this.state.result).map(this.createTableLayout);
    }

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
            const buttons = new Array(result.length).fill(true)

            this.setState({
                result,
                buttons,
                input,
            });
        });
    }

    render() {
        const title = <Title>{translation.searchBar}</Title>;

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