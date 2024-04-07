import { readFileSync, writeFileSync } from "node:fs";

deleteLineNumbers("01-GetByText", [7, 8, 9, 10]);
deleteLineNumbers("02-FindByText", [7, 8, 9, 10]);
deleteLineNumbers("03-GetAllByText", [7, 8, 9, 10]);
deleteLineNumbers("04-GetByRole", [7, 8, 9, 10]);
deleteLineNumbers("05-GetByLabel", [7, 8, 9, 10]);
deleteLineNumbers("06-GetIconByLabel", [7, 8, 9, 10]);
deleteLineNumbers("07-GetByPlaceholder", [7, 8, 9, 10]);
deleteLineNumbers("08-Click", [8, 9, 10, 11, 12]);
deleteLineNumbers("09-Hover", [8, 9, 10, 11, 12]);
deleteLineNumbers("10-Type", [8, 9, 10, 11, 12]);

function createPathToTest(name) {
  const base = name.split("-")[1];

  return `src/koans/${name}/${base}.test.tsx`;
}

function deleteLineNumbers(name, lines) {
  const path = createPathToTest(name);

  const data = readFileSync(path, "utf8");

  const linesArray = data.split("\n");

  const newLines = linesArray.filter((line, index) => {
    return !lines.includes(index + 1);
  });

  const modifiedData = newLines.join("\n");

  writeFileSync(path, modifiedData, "utf8");
}
