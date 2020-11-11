const write = Deno.writeTextFile("./NameIntroduction.txt", "I am Vallabhaneni");

write.then(() => console.log("File written to ./NameIntroduction.txt"));
