# node-microinvoice2

This is a fork of node-microinvoice located at https://github.com/baptistejamin/node-microinvoice/.

This fork is partially maintained to remove
1. Vulnerabilities.
2. Deprecated code.

600 Dependent packages have been removed.
74 Vulnerabilities have been removed.
1 package function has been replaced (transliteration to unicoded).

[![NPM](https://img.shields.io/npm/v/microinvoice.svg)](https://www.npmjs.com/package/microinvoice2) [![Downloads](https://img.shields.io/npm/dt/microinvoice.svg)](https://www.npmjs.com/package/microinvoice2) 
--- 

## Original Package & Features

-- Nothing functional was contributed.  The original package remains available and is located here: 

[![NPM](https://img.shields.io/npm/v/microinvoice.svg)](https://www.npmjs.com/package/microinvoice) [![Downloads](https://img.shields.io/npm/dt/microinvoice.svg)](https://www.npmjs.com/package/microinvoice) 

Fast & elegant PDF invoice generator for Node using PDFKit.

* What Microinvoice does?

- It builds invoices that **looks good**
- Generates a PDF in **less than 30ms**
- Custom Styling & Text
- Covers extended charsets like Russian, Polish (native PDF fonts only supports Latin)
- Transliterate to Latin when charset is not supported (Chinese, Arabic)

* How invoices looks like ?

![Example](/examples/example.png?raw=true "Invoice generated using Microinvoice")

## Why another invoice generator

This project was made for our own company [Crisp](https:/crisp.chat/). We are generating everymonth thousands of HTML invoices. Given this scale, using Puppeteer for generating HTML to PDF would be very inefficient.

As everyday, our customers were asking for PDF invoices as some accounting softwares automatically fetch invoices from emails. I could really understand their frustration. At the end, why generating PDF should be easy?

## Who uses it?

<table>
<tr>
<td align="center"><a href="https://crisp.chat/"><img src="https://crisp.chat/favicon-256x256.png" width="64" /></a></td>
</tr>
<tr>
<td align="center">Crisp</td>
</tr>
</table>

_👋 You use microinvoice and you want to be listed there? [Contact me](https://jamin.me/)._

## How to install?

Include `microinvoice2` in your `package.json` dependencies.

Alternatively, you can run `npm install microinvoice2 --save`.

## How to use?

Import the module in your code:

`var MicroInvoice = require("microinvoice");`

```javascript

let myInvoice = new MicroInvoice({
  // Use example from examples/index.js
});
// Render invoice as PDF
myInvoice.generate("example.pdf").then(() => {
  console.log("Invoice saved");
});

```
