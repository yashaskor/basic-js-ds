const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// function removeKFromList(/* l, k */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function removeKFromList(l, k) {
  // If the list is empty, return it as is
  if (!l) {
    return null;
  }
  
  // If the head node has the value k, skip it
  while (l.value === k) {
    l = l.next;
  }
  
  // Traverse the list and remove nodes with value k
  let curr = l;
  while (curr && curr.next) {
    if (curr.next.value === k) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  
  return l;
}

module.exports = {
  removeKFromList
};
