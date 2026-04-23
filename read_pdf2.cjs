const fs = require('fs');
const PDFParser = require("pdf2json");

const pdfParser = new PDFParser(this, 1);
pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync('./pdf_text.txt', pdfParser.getRawTextContent());
    console.log('done');
});
pdfParser.loadPDF("1.不規則動詞変化表_中1.pdf");
