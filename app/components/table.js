import Component from "@glimmer/component";
import { task } from "ember-concurrency";

export default class TableTestComponent extends Component {
  constructor() {
    super(...arguments);
    this.getData.perform();
  }

  get columns() {
    return Array.from(Array(10)).map((val, idx) => ({
      name: `column${idx - this.args.tableId}`,
      valuePath: `column${idx}`,
    }));
  }

  get rows() {
    return Array.from(Array(100)).map((val, idx) => {
      const row = {};
      this.columns.forEach(({ valuePath }) => {
        row[valuePath] = idx;
      });
      return row;
    });
  }

  fetchData() {
    const {
      columns,
      rows,
      args: { tableId, timeout },
    } = this;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ columns, rows });
      }, tableId * timeout);
    });
  }

  @task(function* () {
    const data = yield this.fetchData();
    this.data = data;
  })
  getData;
}
