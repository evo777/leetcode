class TrieNode {
  constructor(value = null) {
    this.value = value;
    this.children = {};
    this.end = false;
  }
}


class Trie {
  constructor() {
    this.dict = new TrieNode();
  }

  insert(word) {
    let current = this.dict;

    for (let letter of word) {
      if (!current.children[letter]) {
        current.children[letter] = new TrieNode(letter);
      }
      current = current.children[letter];
    }

    current.end = true;
  }

  search(word) {
    let current = this.dict;
    for (let letter of word) {
      if (!current.children[letter]) {
        return false;
      }
      current = current.children[letter];
    }
    return current.end ? true : false;
  }

  startsWith(prefix) {
    let current = this.dict;
    for (let letter of prefix) {
      if (!current.children[letter]) {
        return false;
      }
      current = current.children[letter];
    }

    return true;
  }
};
