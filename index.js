// displaying hidden text
function showItem() {
  let x = document.getElementById("infoElement");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showItem_2() {
  let x = document.getElementById("infoElement2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//recognition for google and other search engines
function addStructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ruchir Kale",
        "url": "https://ruchirkale.github.io",
        "jobTitle": "Student Developer",
        "description": "Machine Learning and Embedded Systems enthusiast",
        "sameAs": [
            "https://github.com/RuchirKale",
            "https://www.kaggle.com/ruchirkale",
            "https://x.com/RuchirKale"
        ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);

    document.head.appendChild(script);
}

addStructuredData();

console.log(`
██████╗ ██╗  ██╗
██╔══██╗██║ ██╔╝
██████╔╝█████╔╝
██╔══██╗██╔═██╗
██║  ██║██║  ██╗
╚═╝  ╚═╝╚═╝  ╚═╝

__Developer Detected__

You have entered the source code.
_________________________________
For your please note that this is a personal website and the source code 
is open for educational purposes only. Any unauthorized use of the code for
 commercial purposes is strictly prohibited.  

Do not copy or use this code without permission. 
If you have any questions or inquiries, please contact me.

Copying is a crime don't be one to commit it.

Love you,
Have a great day!
`);