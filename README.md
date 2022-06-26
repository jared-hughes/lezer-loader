# lezer-loader

Lezer loader module for webpack.

## Limitations

No options are supported yet.

`@external` imports in the grammar file do not get marked as webpack dependencies. If you need to re-build your grammar file based on the imports, just edit your grammar file to trigger the webpack re-build.

## Basic Usage

Usage, in `webpack.config.js`:

```js
{
  // ...
  module: {
    rules: [
      {
        test: /\.grammar$/,
        use: "lezer-loader",
      },
    ];
  }
  // ...
}
```

Usage, in your JavaScript files (supposing the file is named `syntax.grammar`):

```js
// editor.js
import parser from "./syntax.grammar";
```

For TypeScript declarations:

```ts
// syntax.grammar.d.ts
import { LRParser } from "@lezer/lr";

declare const parser: LRParser;
export default parser;
```

## External Token Usage

To reference external tokens, they have to first be defined in your grammar file:

```c
// syntax.grammar
@external tokens insertSemicolon from "./tokens" { insertSemi }
```

Then to import them:

```js
// tokens.js
import { insertSemi } from "./syntax.grammar";
```

For TypeScript declarations:

```ts
export const insertSemi: number;
```
