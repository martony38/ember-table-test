# ember-table-test

sample app with lot of tables rendering causing slowdown initially (try scrolling up/down inside one of the table while other tables are loading/rendering). Also notice the multiple warnings in the console.
```
[Violation] 'requestAnimationFrame' handler took <N>ms
```

Added a similar React component (wrapped in an Ember one) to compare performance. When comparing, make sure to use incognito mode so ember inspector or react dev tools do not affect rendering times.
