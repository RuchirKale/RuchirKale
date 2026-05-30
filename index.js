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
