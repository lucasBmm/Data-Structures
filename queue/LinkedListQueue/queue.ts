import LinkedList from "../../LinkedLists/LinkedList";
import Queue from "../queue.interface";

export default class LinkedListQueue<T> implements Queue<T> {
	private linkedList = new LinkedList<T>();

    /**
     * Add value at the end of the queue
     * @param value
     */
	enqueue(value: T): void {
		this.linkedList.append(value);
	}

    /**
	 * Remove the first element of the queue and return it
	 * @param value
	 */
	dequeue(): T | undefined {
		return this.linkedList.shift();
	}

    /**
     * Return the first element without removing it
     * @param value
     */
	peek(): T | undefined {
		return this.linkedList.head?.value;
	}

    /**
     * Return if the queue is empty
     * @returns {boolean}
     */
	isEmpty(): boolean {
		return this.linkedList.size === 0;
	}

    /**
     * Clear the entire queue 
     */
	clear(): void {
		this.linkedList.clear();
	}

    /**
     * Return the size of the queue
     */
	get size(): number {
		return this.linkedList.size;
	}
}
