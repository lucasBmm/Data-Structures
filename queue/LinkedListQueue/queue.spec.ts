import Queue from "./queue";

describe('Queue', () => {
    const queue = new Queue<number>();

    beforeEach(() => queue.empty());

    it('Should create the queue when instantiate', () => {
        expect(queue).toBeTruthy();
    });

    it('Should enqueue new values when (@enqueue) is called', () => {
        queue.enqueue(5);

        expect(queue.getSize()).toBe(1);
        
        queue.enqueue(4);
        queue.enqueue(3);

        expect(queue.getSize()).toBe(3);
        expect(queue.firstElement()).toBe(5);
    });

    it('Should dequeue first element when (@dequeue) is called', () => {
        for (let i = 0; i < 10; i++) {
            queue.enqueue(i);
        }

        expect(queue.getSize()).toBe(10);

        queue.dequeue();

        expect(queue.firstElement()).toBe(1);
        expect(queue.getSize()).toBe(9);
    });

    it('Should clear queue when (@empty) is called', () => {
        for (let i = 0; i < 10; i++) {
            queue.enqueue(i);
        }

        queue.empty();

        expect(queue.getSize()).toBe(0);
    });
});