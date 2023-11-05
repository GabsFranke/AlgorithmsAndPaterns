class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    const insrt = (current) => {
      if (val === current.value) return undefined;
      if (newNode.value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
          return insrt(current);
        }
      }
      if (newNode.value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
          return insrt(current);
        }
      }
    };

    return insrt(current);
  }

  find(val) {
    if (!this.root) return false;
    let current = this.root;
    const fnd = (current) => {
      if (val === current.value) return current;
      if (val > current.value) {
        if (!current.right) {
          return undefined;
        } else {
          current = current.right;
          return fnd(current);
        }
      }
      if (val < current.value) {
        if (!current.left) {
          return undefined;
        } else {
          current = current.left;
          return fnd(current);
        }
      }
    };

    return fnd(current);
  }

  contains(val) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }
}
