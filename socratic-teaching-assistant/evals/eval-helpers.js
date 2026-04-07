const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, LevelFormat, PageBreak, PageNumber
} = require("docx");

const thinBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };
const TABLE_WIDTH = 9360;

function heading1(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 360, after: 200 }, children: [new TextRun(text)] });
}

function heading2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 280, after: 160 }, children: [new TextRun(text)] });
}

function body(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 160 },
    ...opts,
    children: [new TextRun({ font: "Arial", size: 22, ...opts.run, text })]
  });
}

function bodyRuns(runs, opts = {}) {
  return new Paragraph({
    spacing: { after: 160 },
    ...opts,
    children: runs.map(r => new TextRun({ font: "Arial", size: 22, ...r }))
  });
}

function emptyLine() {
  return new Paragraph({ spacing: { after: 80 }, children: [] });
}

function fillBox(rows = 3) {
  const paras = [];
  for (let i = 0; i < rows; i++) {
    paras.push(new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ font: "Arial", size: 22, text: "" })] }));
  }
  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [TABLE_WIDTH],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders,
            width: { size: TABLE_WIDTH, type: WidthType.DXA },
            shading: { fill: "F2F2F2", type: ShadingType.CLEAR },
            margins: { top: 100, bottom: 100, left: 160, right: 160 },
            children: paras,
          })
        ]
      })
    ]
  });
}

function ratingRow(question, isHeader = false) {
  const cols = [5400, 792, 792, 792, 792, 792];
  const texts = isHeader ? [question, "1", "2", "3", "4", "5"] : [question, "", "", "", "", ""];
  const fill = isHeader ? "2B5C8A" : undefined;
  const fontColor = isHeader ? "FFFFFF" : undefined;
  const bold = isHeader;
  return new TableRow({
    children: texts.map((t, i) => new TableCell({
      borders,
      width: { size: cols[i], type: WidthType.DXA },
      shading: fill ? { fill, type: ShadingType.CLEAR } : undefined,
      margins: cellMargins,
      verticalAlign: "center",
      children: [new Paragraph({
        alignment: i === 0 ? AlignmentType.LEFT : AlignmentType.CENTER,
        children: [new TextRun({ font: "Arial", size: 20, bold, color: fontColor, text: t })]
      })]
    }))
  });
}

function ratingTable(questions) {
  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [5400, 792, 792, 792, 792, 792],
    rows: [
      ratingRow("Question", true),
      ...questions.map(q => ratingRow(q))
    ]
  });
}

function ratingExplainer() {
  return body("Rating scale: 1 = poor / did not work, 3 = okay / acceptable, 5 = excellent / exactly right.", { run: { italics: true, size: 20, color: "666666" } });
}

function bulletItem(text, ref) {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { after: 100 },
    children: [new TextRun({ font: "Arial", size: 22, text })]
  });
}

function numberedItem(text) {
  return new Paragraph({
    numbering: { reference: "numbers", level: 0 },
    spacing: { after: 100 },
    children: [new TextRun({ font: "Arial", size: 22, text })]
  });
}

function numberedItemRuns(runs) {
  return new Paragraph({
    numbering: { reference: "numbers", level: 0 },
    spacing: { after: 100 },
    children: runs.map(r => new TextRun({ font: "Arial", size: 22, ...r }))
  });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

function infoTable(rows) {
  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [2800, 6560],
    rows: rows.map(([label, placeholder]) => new TableRow({
      children: [
        new TableCell({
          borders, width: { size: 2800, type: WidthType.DXA },
          shading: { fill: "E8F0F8", type: ShadingType.CLEAR }, margins: cellMargins,
          children: [new Paragraph({ children: [new TextRun({ font: "Arial", size: 22, bold: true, text: label })] })]
        }),
        new TableCell({
          borders, width: { size: 6560, type: WidthType.DXA },
          margins: cellMargins,
          children: [new Paragraph({ children: [new TextRun({ font: "Arial", size: 22, color: "999999", text: placeholder })] })]
        }),
      ]
    }))
  });
}

function buildDoc(title, subtitle, headerText, sections) {
  return new Document({
    styles: {
      default: { document: { run: { font: "Arial", size: 22 } } },
      paragraphStyles: [
        {
          id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 32, bold: true, font: "Arial", color: "2B5C8A" },
          paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 }
        },
        {
          id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 26, bold: true, font: "Arial", color: "2B5C8A" },
          paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 }
        },
        {
          id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 24, bold: true, font: "Arial" },
          paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 }
        },
      ]
    },
    numbering: {
      config: [
        {
          reference: "bullets",
          levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
        },
        {
          reference: "numbers",
          levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
        },
      ]
    },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [new TextRun({ font: "Arial", size: 18, color: "999999", text: headerText })]
          })]
        })
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ font: "Arial", size: 18, color: "999999", text: "Page " }),
              new TextRun({ font: "Arial", size: 18, color: "999999", children: [PageNumber.CURRENT] }),
            ]
          })]
        })
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
          children: [new TextRun({ font: "Arial", size: 40, bold: true, color: "2B5C8A", text: title })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 320 },
          children: [new TextRun({ font: "Arial", size: 28, color: "555555", text: subtitle })]
        }),
        ...sections,
        emptyLine(),
        emptyLine(),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 400 },
          children: [new TextRun({ font: "Arial", size: 20, color: "999999", italics: true, text: "Thank you for testing this. Your feedback will directly shape how this tool works." })]
        }),
      ]
    }]
  });
}

async function saveDoc(doc, outPath) {
  const fs = require("fs");
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outPath, buffer);
  console.log("Created:", outPath);
}

module.exports = {
  heading1, heading2, body, bodyRuns, emptyLine, fillBox,
  ratingTable, ratingExplainer, bulletItem, numberedItem, numberedItemRuns,
  pageBreak, infoTable, buildDoc, saveDoc, TABLE_WIDTH
};
