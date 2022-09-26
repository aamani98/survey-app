export default generateEmailTemplate = (data) => `
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
    </head>
    <style>
    .container{
        margin:20px 10px;
    }
    .bold:{
        font-weight: 600;
    }
    </style>
    <body>
        <h1>New Survey Response</h1>
        ${data
          .map(
            (item) => `<div class="container">
            <p>
                <span class="bold">Question: </span>
                <span>${item.question}</span>
            </p>
            <p>
                <span class="bold">Answer: </span>
                <span>${item.answer}</span>
            </p>
        </div>`
          )
          .join("")}
    </body>
</html>
`;
