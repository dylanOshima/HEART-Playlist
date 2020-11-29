// https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }

  getNext() {
    return this.next
  }

  getPrev() {
    return this.prev
  }

  hasNext() {
    return !(this.next === null)
  }

  hasPrev() {
    return !(this.prev === null)
  }

  getData() {
    return this.data;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  push(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;
      temp.next = node;
      node.prev = temp;
      this.tail = node;
    }
  }
}

const data = [
  {
    videoURL: "https://www.youtube.com/embed/FmZhFMzWIGQ",
    videoName:
      "【Female Sings】Pretender / Official Hige-dandism (Covered by KOBASOLO & Harutya)",
    requester: "Shin-Ji",
    lengthOfVideo: "5 minutes 35 seconds",
    description: "One of Shin-Ji's favourite songs",
  },
  {
    videoURL: "https://www.youtube.com/embed/VFZNvj-HfBU",
    videoName:
      "Daði Freyr (Daði & Gagnamagnið) – Think About Things (Official Video)",
    requester: "Shin-Ji",
    lengthOfVideo: "4 minutes 5 seconds",
    description: "Another one of Shin-Ji's favourite songs",
  },
  {
    videoURL: "https://youtube.com/embed/eXvBjCO19QY",
    requester: "Filip Ignijic",
    videoName: "2Pac - Changes",
    email: "2021.filip.ignijic@uwcisak.jp",
  },
  {
    videoURL: "https://www.youtube.com/embed/NN6J-aYI0d4",
    requester: "Lydia Etherington",
    videoName: "Welcome to Wonderland",
    email: "2021.lydia.etherington@uwcisak.jp",
  },
  {
    videoURL: "https://www.youtube.com/embed/KoG7O1fwoAc",
    requester: "Lingye",
    videoName: "Photography - Cody Fry",
    email: "2021.lingye.wu@uwcisak.jp",
  },
  {
    videoURL: "https://youtube.com/embed/TETVNH3k8Ag",
    requester: "Shin",
    videoName: "Australia Street- Sticky Fingers",
    email: "2021.shinnosuke.miyanaga@uwcisak.jp",
  },
  {
    videoURL: "https://youtube.com/embed/bs56ygZplQA",
    requester: "Nabill Nuqman",
    videoName: "Race for the prize - Flaming Lips",
    email: "2021.nabill.nuqman@uwcisak.jp",
  },
  {
    videoURL: "https://youtube.com/embed/JeFwaWFTGYU",
    requester: "Uzay Poyraz",
    videoName: "The Dirty Mac - Yer Blues",
    email: "2021.uzay.poyraz@uwcisak.jp",
  },
  {
    videoURL: "https://www.youtube.com/embed/pOslx4hKwZk",
    requester: "Kelven",
    videoName: "Dave ft J hus - Samantha",
    email: "2021.kelven.manuel@gmail.com",
  },
  {
    videoURL: "https://www.youtube.com/embed/Dm-foWGDBF0",
    requester: "Alexander Nygaard	",
    videoName: "Duckworth - Kendrick Lamar",
    email: "2021.alexander.nygaard@uwcisak.jp",
  },
  {
    videoURL: "https://www.youtube.com/embed/A8u6Msm5Cj4",
    requester: "Rikio Tsuyama-Dahlgren	",
    videoName: "u n eye by Boy In Space",
    email: "2021.rikio.dahlgren@uwcisak.jp",
  },
];

let linkedList = new LinkedList();

for (let datum of data) {
  linkedList.push(new Node(datum));
}

// Inputting the video names into the UI
let node = linkedList.getFirst();
while (node) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(node.getData().videoName));
  li.setAttribute("id", `${node.getData().videoName}`);
  // li.setAttribute("onclick", `changeVideo("${node.data.videoURL}")`);
  node = node.next;
  document.querySelector("#playlist").appendChild(li);
}

node = linkedList.getFirst();

/**
 * Updates the webpage to reflect the current song in the linked list, if
 * one exists. It will move the head pointer to the element before it. It
 * then updates the webpage to reflect the information in the current node.
 *
 * @returns {void}
 */
function playPrevious() {
  if (node.hasPrev()) {
    node = node.getPrev();
    document
      .getElementById("videoPlayer")
      .setAttribute("src", node.getData().videoURL);
    updateCurrentSong(node.getData());
  }
}

/**
 * Fetches the next song in the linked list if one exists. It will move
 * the head pointer to the next element. It then updates
 * the webpage to reflect the information in the current node.
 *
 * @returns {void}
 */
function playNext() {
  if (node.hasNext()) {
    node = node.getNext();
    document
      .getElementById("videoPlayer")
      .setAttribute("src", node.getData().videoURL);
    updateCurrentSong(node.getData());
  }
}

/**
 * Updates the webpage to reflect the current song in the linked list.
 *
 * @param {Node} node - a video node that has the properties: videoName,
 *  requester, lengthOfVideo, and description which are displayed in on
 *  the webpage.
 * @returns {void}
 */
function updateCurrentSong({
  videoName,
  requester,
  lengthOfVideo,
  description,
}) {
  document.getElementById("videoName").textContent = videoName;
  document.getElementById("requester").textContent = requester;
  document.getElementById("lengthOfVideo").textContent = lengthOfVideo;
  document.getElementById("description").textContent = description;
}

/** SETUP **/
/** Called when the page renders. It updates the current song element so
 *  that it shows the information in the head node.
 */
(function main() {
  document
    .getElementById("videoPlayer")
    .setAttribute("src", node.getData().videoURL);
  updateCurrentSong(node.getData());
})();
