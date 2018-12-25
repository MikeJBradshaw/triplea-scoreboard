import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { ScoreCard } from './ScoreCard';


const liveResults = [
    {player: 'Anthony', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Brian', wins: 3, loses: 1, winPercentage: 75},
    {player: 'Brien', wins: 3, loses: 0, winPercentage: 100},
    {player: 'Jerry', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Mike B', wins: 1, loses: 2, winPercentage: 33},
    {player: 'Mike C', wins: 2, loses: 1, winPercentage: 66},
    {player: 'Taylor', wins: 1, loses: 1, winPercentage: 50},
    {player: 'Will', wins: 0, loses: 3, winPercentage: 0}
]

const emailResults = [
    {player: 'Anthony', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Brian', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Brien', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Jerry', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Mike B', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Mike C', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Taylor', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Will', wins: 0, loses: 0, winPercentage: 0}
]

const onlineResults = [
    {player: 'Anthony', wins: 1, loses: 0, winPercentage: 100},
    {player: 'Brian', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Brien', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Jerry', wins: 0, loses: 1, winPercentage: 0},
    {player: 'Mike B', wins: 1, loses: 1, winPercentage: 50},
    {player: 'Mike C', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Taylor', wins: 0, loses: 0, winPercentage: 0},
    {player: 'Will', wins: 0, loses: 1, winPercentage: 0}
]

export class DataPanel extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            displayLiveResults: true,
            displayEmailResults: false,
            displayOnlineResults: false,
            gameData: liveResults
        }
    }

    render() {
        let buttonTitleOne = '';
        let buttonTitleTwo = '';
        let viewing = '';

        if (this.state.displayLiveResults) {
            buttonTitleOne = 'Email';
            buttonTitleTwo = 'Online';
            viewing = 'Live';
        }
        else if(this.state.displayEmailResults) {
            buttonTitleOne = 'Live';
            buttonTitleTwo = 'Online';
            viewing = 'Email';
        }
        else {
            buttonTitleOne = 'Live';
            buttonTitleTwo = 'Email';
            viewing = 'Online';
        }
        return (
            <div>
                <Button 
                    variant="contained"
                    size="large"
                    id={buttonTitleOne}
                    onClick={this.buttonClicked.bind(this)}>{buttonTitleOne}</Button>
                <Button 
                    variant="contained"
                    size="large"
                    id={buttonTitleTwo}
                    onClick={this.buttonClicked.bind(this)}>{buttonTitleTwo}</Button>
                <br />
                <h3>Viewing {viewing} Results</h3>
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
        let newData = event.currentTarget.id
        let newState = {}

        if (newData === 'Email') {
            newState = {
                displayLiveResults: false,
                displayEmailResults: true,
                displayOnlineResults: false,
                gameData: emailResults
            }
        }
        else if(newData === 'Live') {
            newState = {
                displayLiveResults: true,
                displayEmailResults: false,
                displayOnlineResults: false,
                gameData: liveResults
            }
        }
        else {
            newState = {
                displayLiveResults: false,
                displayEmailResults: false,
                displayOnlineResults: true,
                gameData: onlineResults
            }
        }
        this.setState(newState);
    }
}
