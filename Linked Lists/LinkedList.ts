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