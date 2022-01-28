# lezer-loader

Lezer loader module for webpack.

No options are supported yet.

Usage, in `webpack.config.js`:

```js
{
  // ...
  module: {
    rules: [
      {
        test: /\.grammar$/,
        use: "lezer-loader",
      }
    ]
  },
  // ...
}
```
