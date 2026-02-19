let jsonData = `[]`;
let data = JSON.parse(jsonData);
let newObject = {
    id: 1,
    title: "First Item"
};

data.push(newObject);
let updatedJson = JSON.stringify(data);
console.log(updatedJson);
