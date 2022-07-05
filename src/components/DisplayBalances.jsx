import React from 'react';
import { Grid, Segment, Statistic } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances() {
    return (
        <Segment textAlign='center'>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title='Income' value='12345.00' color='green' />
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' color='red'>
                {/* <Statistic.Label style={{ textAlign: "left" }}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>945.00</Statistic.Value> */}

                <DisplayBalance title='Income' value='625.00' color='red' />
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
}

export default DisplayBalances;