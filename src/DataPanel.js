import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { ScoreCard } from './ScoreCard';


const liveGameResults = [
    {player: 'Anthony', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Mike B', wins: 1, loses: 2, winPercentage: 33},
    {player: 'Brian', wins: 2, loses: 1, winPercentage: 66},
    {player: 'Brien', wins: 3, loses: 0, winPercentage: 100},
    {player: 'Mike C', wins: 2, loses: 1, winPercentage: 66},
    {player: 'Taylor', wins: 1, loses: 0, winPercentage: 100},
    {player: 'Will', wins: 0, loses: 3, winPercentage: 0}
]

const onlineGameResults = [
    {player: 'Anthony', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Mike B', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Brian', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Brien', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Mike C', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Taylor', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Will', wins: 0, loses: 0, winPercentage: 0}
]

export class DataPanel extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            displayOnlineResults: true,
            gameData: liveGameResults
        }
    }

    render() {
        return (
            <div>
                <Button 
                    variant="contained"
                    size="large"
                    onClick={this.buttonClicked.bind(this)}>{this.state.displayOnlineResults ? 'Online' : 'Live'}</Button>
                <br />
                <h3>Viewing {this.state.displayOnlineResults ? 'Live' : 'Online'} Results</h3>
                <br />
                <Grid container spacing={8}>
                    <Grid item xs={1} sm={2} />
                    <Grid item xs={10} sm={8}>
                        <ScoreCard data={this.state.gameData}/>
                    </Grid>
                    <Grid item xs={1} sm={2} />
                </Grid>
            </div>
        );
    }

    buttonClicked(event) {
        var newGameData = this.state.displayOnlineResults ? onlineGameResults : liveGameResults;

        this.setState({
            displayOnlineResults: !this.state.displayOnlineResults,
            gameData: newGameData
        });
    }
}
