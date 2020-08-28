## lit-css-loader issue #1 repro

A minimal project to reproduce `lit-css-loader` issue [#1](https://github.com/bennypowers/lit-css-loader/issues/1).

### Install dependencies

`npm install`

### Run webpack build to reproduce build failure

`npm run build`

If you want to see that the project setup works when the issue is not present, you can remove the special characters from the CSS comments and the `content` property example in the `src/styles.css` file.