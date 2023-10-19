const myNumber = 42
const myFloat = 42.01
const myString = "42"

const myMarkdownfile = "/components/module/zarf.md"
const pathParts = myMarkdownfile.split(/[/\\]/);
const fileNameWithExtension = pathParts[pathParts.length - 1];
const fileNameWithoutExtension = fileNameWithExtension.split(".")[0];
console.log("File name without extension: ", fileNameWithoutExtension)