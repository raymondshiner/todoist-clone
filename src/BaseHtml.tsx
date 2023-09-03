import * as elements from "typed-html";

export const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todoist Clone</title>
  <link rel="icon" href="https://d3ptyyxy2at9ui.cloudfront.net/favicon-a85885.ico">  
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/htmx.org@1.9.3"></script>
  <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
</head>

${children}
`;
