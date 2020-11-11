const text = Deno.readTextFile("./sample.txt");

text.then((response) => console.log(response));