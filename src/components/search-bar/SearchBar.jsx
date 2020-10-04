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
} from './styled-components';

class SearchBar extends Component {
    state = {
        result: {},
        input: '',
    }

    getTableCells = (array) => {
        const tableCells = array.map(element => (
            <Row>{Object.values(element).map(value => <TableCell>{value}</TableCell>)}</Row>
        ));

        return tableCells;
    }

    getTableHeaders = (object = {}) => {
        return Object.keys(object).map(key => <TableHeaderCell>{key}</TableHeaderCell>);
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

    createTables = () => {
        return Object.values(this.state.result).map(this.createTable);
    }

    onChangeHandler = (e) => {
        const input = e.target.value;

        getData(route, {
            params: {
                search: input,
            }
        }).then(res => {
            const result = res.data;

            this.setState({
                result,
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
                    </SearchBox>;
                </Header>;
                {this.createTables()}
            </Wrapper>
        );
    }
}

export default SearchBar;