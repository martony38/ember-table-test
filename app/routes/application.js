import Route from "@ember/routing/route";

export default class ApplicationRoute extends Route {
  model() {
    return { tables: Array.from(Array(10)).map((val, idx) => idx) };
  }
}
