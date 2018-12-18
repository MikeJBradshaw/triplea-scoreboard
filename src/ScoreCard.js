import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        // minWidth: 700,
        marginLeft: "auto",
        marginRight: "auto"
    },
});

export class ScoreCard extends Component {
    render() {
        return (
            <div>
                    <Table className={styles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Player</TableCell>
                                <TableCell align="center">Wins</TableCell>
                                <TableCell align="center">Loses</TableCell>
                                <TableCell align="center">Win Percentage</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.data.map(element => {
                                return (
                                    <TableRow key={element.player}>
                                        <TableCell 
                                            component="th"
                                            scope="element"
                                            align="center">{element.player}</TableCell>
                                        <TableCell align="center">{element.wins}</TableCell>
                                        <TableCell align="center">{element.loses}</TableCell>
                                        <TableCell align="center">{element.winPercentage}%</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
            </div>
        );
    }
}

