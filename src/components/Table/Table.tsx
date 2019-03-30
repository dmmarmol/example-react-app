import * as React from 'react';
import MaterialTable from '@material-ui/core/Table';
import MaterialTableBody, { TableBodyProps } from '@material-ui/core/TableBody';
import MaterialTableCell, { TableCellProps } from '@material-ui/core/TableCell';
import MaterialTableHead, { TableHeadProps } from '@material-ui/core/TableHead';
import MaterialTableRow, { TableRowProps } from '@material-ui/core/TableRow';

export interface TableProps {}

class Table extends React.Component<TableProps> {
    public static Body: React.ComponentType<TableBodyProps> = props => <MaterialTableBody {...props} />;
    public static Cell: React.ComponentType<TableCellProps> = props => <MaterialTableCell {...props} />;
    public static Head: React.ComponentType<TableHeadProps> = props => <MaterialTableHead {...props} />;
    public static Row: React.ComponentType<TableRowProps> = props => <MaterialTableRow {...props} />;
    public render() {
        return <MaterialTable>{this.props.children}</MaterialTable>;
    }
}

export default Table;
