class LinkedListNode<T> {
  value: T;
  next?: LinkedListNode<T>;

  constructor(data: T) {
    this.value = data;
  }
}

class LinkedList<T> implements Iterable<T> {
  head?: LinkedListNode<T>;
  tail?: LinkedListNode<T>;
  size: number;

  constructor() {
    this.size = 0;
  }

  /**
   * Add an element at the beggining of the Linked List.
   * @param {T} data Value to be inserted.
   */
  add(data: T): void {
    const newNode = new LinkedListNode<T>(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    if (!this.tail) {
      this.tail = newNode;
    }

    [this.head, newNode.next] = [newNode, this.head];

    this.size++;
  }

  /**
   * Add an element at the end of the Linked List.
   * @param {T} data Value to be inserted.
   */
  append(data: T): void {
    const newNode = new LinkedListNode<T>(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    if (this.tail) this.tail.next = newNode;

    this.tail = newNode;

    this.size++;
  }

  /**
   * Add an element at determined index
   *
   * @param {number} location  The index you want to insert.
   * @param {T} data Value to be inserted.
   */
  insertAt(location: number, data: T): void {
    const newNode = new LinkedListNode<T>(data);

    if (location > this.size) {
      throw new Error(
        "Insert position must not be greater then the Linked List"
      );
    }

    if (location === 0) {
      this.add(data);
      return;
    }

    if (location === this.size) {
      this.append(data);
      return;
    }

    let n = this.head;

    for (let i = 1; i < location; i++) {
      n = n?.next;
    }

    if (n?.next) [n.next, newNode.next] = [newNode, n.next];
    this.size++;
  }

  /**
   * Find a value of a node at determined index.
   * @param {number} index  The index of the node you want to find.
   */
  find(index: number): T {
    let n = this.head;

    if (index >= this.size) {
      throw new Error("Index must be less then the size of the linked list");
    }

    for (let i = 0; i < index; i++) {
      n = n?.next!;
    }

    const value = n?.value!;

    return value;
  }

  /**
   * Remove the last node.
   */
  pop(): T | void {
    if (!this.head) {
      return;
    }

    let n = this.head;
    let previusNode = n;
    let removedValue: T | undefined;

    while (n?.next) {
      previusNode = n;
      n = n.next;
    }

    removedValue = previusNode?.next?.value;

    if (previusNode) previusNode.next = undefined;
    this.tail = previusNode;

    this.size--;

    return removedValue;
  }

  /**
   * Remove the first node.
   */
  shift(): void {
    if (!this.head) return;

    let n = this.head;

    if (n?.next) this.head = n?.next;
    else this.head = undefined;

    if (!this.head) this.tail = undefined;

    this.size--;
  }

  reverse(): void {
    if (!this.head) return;

    let previusNode: LinkedListNode<T> | undefined;
    let nextNode: LinkedListNode<T> | undefined;

    this.tail = this.head;

    while (this.head) {
      nextNode = this.head.next;
      this.head.next = previusNode;
      previusNode = this.head;
      this.head = nextNode;
    }

    this.head = previusNode;
  }

  /**
   * Clear the intire list.
   */
  clear(): void {
    this.head = undefined;
    this.tail = undefined;
    this.size = 0;
  }

  toString(): string {
    const list: string[] = [];
    let n = this.head;

    while (n) {
      list.push(JSON.stringify(n.value));
      n = n.next;
    }

    return list.toString();
  }

  [Symbol.iterator](): Iterator<T, any, undefined> {
    let node = this.head;
    return {
      next: (): IteratorResult<T> => {
        if (node) {
          const value = node.value;
          node = node.next;

          return {
            value,
            done: false,
          };
        }

        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}

export default LinkedList;
