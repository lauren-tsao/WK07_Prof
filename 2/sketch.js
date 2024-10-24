let mStrings = [];

function preload() {
  mStrings = loadStrings("../assets/article.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  let mString = mStrings[0];
  let mWords = mString.toLowerCase().split(" ");

  let wordCounts = {};

  for (let idx = 0; idx < mWords.length; idx++) {
    let mWord = mWords[idx].replaceAll(".", "").replaceAll(",", "").replaceAll("'", "").replaceAll('"', "");

    if (mWord in wordCounts) {
      wordCounts[mWord] = wordCounts[mWord] + 1;
    } else {
      wordCounts[mWord] = 1;
    }
  }

  print(wordCounts);

  print("---- HIGH COUNTS");
  for (let key in wordCounts) {
    if (wordCounts[key] > 10) {
      print(key, ":", wordCounts[key]);
    }
  }

  print("---- LONG WORDS");
  for (let key in wordCounts) {
    if (key.length > 12) {
      print(key, ":", wordCounts[key]);
    }
  }

  textAlign(CENTER, CENTER);
  textSize(20);
  text("Open console for\nword counts", width / 2, height / 2);
}

function draw() {}
