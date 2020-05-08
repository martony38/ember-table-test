import React, {PureComponent} from "react";
import WithEmberSupport from "ember-react-components";
import { FixedSizeGrid as Grid } from "react-window";

class ItemRenderer extends PureComponent {
  render() {
    const { columnIndex, data, rowIndex, style } = this.props;
    const item = data.rows[rowIndex][`column${columnIndex}`];

    return (
      <div style={style}>
        {item}
      </div>
    );
  }
}

@WithEmberSupport
export default class GridTest extends React.Component {
  render() {
    const { columns, rows } = this.props;
    const data = { columns, rows }

    return (
      <Grid
        style={{backgroundColor: '#61dafb'}}
        columnCount={columns.length}
        columnWidth={100}
        height={200}
        rowCount={rows.length}
        rowHeight={20}
        width={852}
        itemData={data}
      >
        {ItemRenderer}
      </Grid>
    );
  }
}
