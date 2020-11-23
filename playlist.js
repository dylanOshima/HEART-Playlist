// https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
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
}

const datum1 = {
  videoURL: "https://www.youtube.com/embed/FmZhFMzWIGQ",
  videoName:
    "【Female Sings】Pretender / Official Hige-dandism (Covered by KOBASOLO & Harutya)",
  requester: "Shin-Ji",
  lengthOfVideo: "5 minutes 35 seconds",
  description: "One of Shin-Ji's favourite songs",
};

const datum2 = {
  videoURL: "https://www.youtube.com/embed/VFZNvj-HfBU",
  videoName:
    "Daði Freyr (Daði & Gagnamagnið) – Think About Things (Official Video)",
  requester: "Shin-Ji",
  lengthOfVideo: "4 minutes 5 seconds",
  description: "Another one of Shin-Ji's favourite songs",
};

let node1 = new Node(datum1);
let node2 = new Node(datum2);
node1.next = node2;
node2.prev = node1;

let linkedList = new LinkedList(node1);

// Inputting the video names into the UI
let node = linkedList.head;
while (node) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(node.data.videoName));
  li.setAttribute("id", `${node.data.videoName}`);
  // li.setAttribute("onclick", `changeVideo("${node.data.videoURL}")`);
  node = node.next;
  document.querySelector("#playlist").appendChild(li);
}

node = linkedList.head;

/**
 * Updates the webpage to reflect the current song in the linked list, if
 * one exists. It will move the head pointer to the element before it. It
 * then updates the webpage to reflect the information in the current node.
 * 
 * @returns {void}
 */
function playPrevious() {
  if (node.prev) {
    node = node.prev;
    document
      .getElementById("videoPlayer")
      .setAttribute("src", node.data.videoURL);
    updateCurrentSong(node.data);
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
  if (node.next) {
    node = node.next;
    document
      .getElementById("videoPlayer")
      .setAttribute("src", node.data.videoURL);
    updateCurrentSong(node.data);
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
    .setAttribute("src", node.data.videoURL);
  updateCurrentSong(node.data);
})()
