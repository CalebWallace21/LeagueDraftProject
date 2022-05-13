import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='box'>
          <Switch>
            <Route path="/about" render={() => (
              <div>
                <h1 className="about-title">About LeagueDraftNotes </h1>
                <p className="about-content">
                    LeagueDraftNotes is a one of a kind draft tool for League of Legends. It gives you the ability to create any variety of team composition as it not only includes all champions currently available but will auto update for any new champions added. Not only does it allow you to create any team composition but it also gives you the ability to save them to your reigstered account so you can have all of them available at a glance when it comes time to enter champion select.  
                </p>
              </div>
            )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}