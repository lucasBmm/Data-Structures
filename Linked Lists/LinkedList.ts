class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null = null;

    constructor(data: T) {
        this.value = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: LinkedListNode<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Add an element at the beggining of the Linked List.
     *
     * @param data      Value to be inserted.
     */
    add(data: T): void {
        let newNode = new LinkedListNode<T>(data);

        if (!this.head) {
            this.head = newNode;
            this.size++;
            return;
        }

        [this.head, newNode.next] = [newNode, this.head];
        this.size++;
    }

    /**
     * Add an element at the end of the Linked List.
     *
     * @param data      Value to be inserted.
     */
    append(data: T): void {
        let newNode = new LinkedListNode<T>(data);

        if (!this.head) {
            this.head = newNode;
            this.size++;
            return;
        }

        let n = this.head;

        while(n.next) {
            n = n.next;
        }

        n.next = newNode;
        this.size++;
    }

    /**
     * Add an element at determined index
     *
     * @param location  The index you want to insert.
     * @param data      Value to be inserted.
     */

    insertAt(location: number, data: T): void {
        let newNode = new LinkedListNode<T>(data);

        if (location > this.size) {
            throw new Error("Insert local must not be greater then the Linked List");
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
            n = n?.next!;
        }

        if (n?.next) [n.next, newNode.next] = [newNode, n.next];
        this.size++;
    }
    
    /**
     * Find a value of a node at determined index.
     *
     * @param index  The index of the node you want to find.
     */
    find(index: number): T {
        let n = this.head;

        if (index >= this.size) {
            throw new Error("Index must be less then the size of the linked list")
        }

        for (let i = 0; i < index; i++) {
            n = n?.next!;
        }

        let value = n?.value!;

        return value;
    }

    toString(): String {
        const list: T[] = [];
        let n = this.head;

        while(n) {
            list.push(n.value);
            n = n.next;
        }

        return list.toString();
    }
}

export default LinkedList;