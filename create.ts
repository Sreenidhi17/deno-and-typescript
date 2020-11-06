const encod = new TextEncoder();
const txt = encod.encode("welcome to sreenidhi's demo on deno");
await Deno.writeFile("greet.txt",txt);