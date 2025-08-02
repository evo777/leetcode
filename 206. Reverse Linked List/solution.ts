function reverseList(head: ListNode | null): ListNode | null {
  const values: number[] = [];
  let curr = head;

  while (curr !== null) {
    values.push(curr.val);
    curr = curr.next;
  }

  let result = new ListNode();
  let currNew = result;
  for (let i = values.length - 1; i >= 0; i--) {
    const num = values[i];
    currNew.next = new ListNode(num);
    currNew = currNew.next;
  }

  return result.next;
}
