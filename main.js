const in1 = document.querySelector("#text-in1");
const in2 = document.querySelector("#text-in2");
const out = document.querySelector("#text-out");
const btn = document.querySelector("#combine");

btn.addEventListener("click", () => {
  const text1 = in1.value.split("\n");
  const text2 = in2.value.split("\n");

  if (text1.length !== text2.length) {
    alert("Error line not same .... !");
    return;
  }

  const output = [];

  for (let i = 0; i < text1.length; ++i) {
    const match1 = /className="(.*?)"/.exec(text1[i]);
    const match2 = /className="(.*?)"/.exec(text2[i]);

    if (match1 && match2) {
      const class1 = match1[1].trim();
      const class2 = match2[1].trim();

      let light = "";
      let dark = "";

      if (class1.includes("dark:")) {
        dark = class1;
        light = class2;
      } else {
        dark = class2;
        light = class1;
      }

      light = light.split(" ");
      dark = dark.split(" ");

      for (const i of dark) {
        if (i.includes("dark:")) {
          light.push(i);
        }
      }

      output.push(
        text1[i].replace(/className="(.*?)"/, `className="${light.join(" ")}"`)
      );
    } else {
      output.push(text1[i]);
    }

    out.value = output.join("\n");
  }
});
