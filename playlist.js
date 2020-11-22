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

let linkedList = new LinkedList(node1);

// Inputting the video names into the UI
let node = linkedList.head;
while (node) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(node.data.videoName));
  li.setAttribute("onclick", `changeVideo("${node.data.videoURL}")`);
  node = node.next;
  document.querySelector("#playlist").appendChild(li);
}

function changeVideo(videoURL) {
  document.getElementById("videoPlayer").setAttribute("src", videoURL);
}
