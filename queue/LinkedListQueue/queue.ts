import LinkedList from "../../Linked List/linkedList";

class Queue<T> {
    private linkedList = new LinkedList<T>();

    enqueue(value: T): void {
        this.linkedList.append(value);
    }

    dequeue(): void {
        return this.linkedList.shift();
    }

    firstElement(): T | void {
        return this.linkedList.head?.value;
    }

    empty(): void {
        this.linkedList.clear();
    }

    getSize(): number {
        return this.linkedList.size;
    }
}

export default Queue;