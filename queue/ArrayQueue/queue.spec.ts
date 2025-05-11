import Queue from "./queue";

describe("Queue", () => {
    const queue = new Queue<number>();

    beforeEach(() => queue.clear());

    it("Should create the queue when instantiate", () => {
        expect(queue).toBeTruthy();
    });

    it("Should enqueue new values when (@enqueue) is called", () => {
        queue.enqueue(5);

        expect(queue.size).toBe(1);

        queue.enqueue(4);
        queue.enqueue(3);

        expect(queue.size).toBe(3);
        expect(queue.peek()).toBe(5);
    });

    it("Should dequeue first element and return it when (@dequeue) is called", () => {
        for (let i = 0; i < 10; i++) {
            queue.enqueue(i);
        }

        expect(queue.size).toBe(10);

        expect(queue.dequeue()).toBe(0);

        expect(queue.peek()).toBe(1);
        expect(queue.size).toBe(9);
    });

    it("Should return first element without removing it when (@peek) is called", () => {
        queue.enqueue(5);

        expect(queue.peek()).toBe(5);
        expect(queue.size).toBe(1);
    });

    it("Should return if queue is empty when (@isEmpty) is called", () => {
        expect(queue.isEmpty()).toBe(true);

        queue.enqueue(1);

        expect(queue.isEmpty()).toBe(false);
    });

    it("Should clear queue when (@clear) is called", () => {
        for (let i = 0; i < 10; i++) {
            queue.enqueue(i);
        }

        queue.clear();

        expect(queue.size).toBe(0);
    });
});
