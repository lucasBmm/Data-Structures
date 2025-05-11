export default interface Queue<T> {
	enqueue(value: T): void;
	dequeue(): T | undefined;
    peek(): T | undefined; 
	isEmpty(): boolean;
    clear(): void;
	size: number;
}
