const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));

// const commandsWithOutput = input
//     .split("$")
//     .map((line) => {
//         const trimmed = line.trim();
//         if (!trimmed) return null;
//         const cmdOutput = trimmed.split("\r\n");
//         const cmd = cmdOutput.shift();
//         return [cmd, cmdOutput];
//     })
//     // remove nulls
//     .filter((i) => i != null);

// for () {

// }
// console.log(commandsWithOutput);

const dirs: Record<string, number> = {};
let lastDir = "";

console.log(
    input
        .replaceAll(/\$ cd [a-z/\.]*/g, "")
        .split("\r\n")
        .filter((l) => !!l)
        .filter((l) => l !== "$ ls")
        .forEach((l) => {
            console.log(l);
            if (l.startsWith("dir")) {
                lastDir = l.split(" ")[1];
                if (!(lastDir in dirs)) {
                    dirs[lastDir] = 0;
                }
            } else {
                const [sizeString] = l.split(" ");
                const size = parseInt(sizeString);
                dirs[lastDir] = size + dirs[lastDir];
            }
        })
);
console.log(dirs);
