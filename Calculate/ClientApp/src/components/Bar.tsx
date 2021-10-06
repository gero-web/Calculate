import * as React from 'react';
import Paper from '@material-ui/core/Paper';

import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';

import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale, Stack } from '@devexpress/dx-react-chart';


export default class Demo extends React.PureComponent {
  constructor(props:any) {
    super(props);
    this.state = {
           data: props.data
       }
  }

  render() {
   const { data } = this.state;
    return (
      <Paper>
        <Chart
          data={data}
        >
          <ArgumentScale factory={scaleBand} />
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries
            valueField="value"
            argumentField="day"
            name="Young"
          />
          
          <Stack />
        </Chart>
      </Paper>
    );
  }
}
