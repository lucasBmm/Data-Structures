import LinkedList  from './LinkedList';


describe("Linked List", () => {
    const list = new LinkedList<Number>;

    beforeEach(() => list.clear());

    it("Should create a linkedList", () => {
        const list = new LinkedList<Number>;
    
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.size).toBe(0);
    });
    
    it("Should add new nodes to the beginning of the Linked List", () => {
        list.add(1);
        list.add(2);
    
        expect(list.size).toBe(2);
        expect(list.tail?.value).toBe(1);
        expect(list.toString()).toBe("2,1");
    });
    
    it("Should add new nodes at the end of the Linked List", () => {
        list.append(1);
        list.append(2);
    
        expect(list.size).toBe(2);
        expect(list.tail?.value).toBe(2);
        expect(list.toString()).toBe("1,2");
    });
    
    it("Should add at determined place", () => {
        list.append(1);
        list.append(2);
        list.append(4);
    
        list.insertAt(2, 3);
    
        expect(() => list.insertAt(10, 1)).toThrowError();
        expect(list.size).toBe(4);
        expect(list.tail?.value).toBe(4);
        expect(list.toString()).toBe("1,2,3,4");
    });

    it("Should correct add to beggining or end of the linked list", () => {
        for (let i = 0; i < 8; i++) {
            list.append(i+1);
        }

        list.insertAt(0, 0);  
        list.insertAt(9, 9); 
        list.insertAt(4, 11);

        expect(list.size).toBe(11);
        expect(list.tail?.value).toBe(9);
        expect(list.toString()).toBe("0,1,2,3,11,4,5,6,7,8,9");
    });

    it("Should get an element of the linked list at determined index", () => {
        for (let i = 10; i > 0; i--) {
            list.append(i);
        }

        expect(list.find(0)).toBe(10);
        expect(list.find(5)).toBe(5);
        expect(list.find(9)).toBe(1);
        expect(() => list.find(100)).toThrowError();
    });

    it("Should delete the last element", () => {
        list.pop();

        for (let i = 0; i < 10; i++) {
            list.append(i);
        }

        list.pop();
        
        expect(list.size).toBe(9);
        expect(list.tail?.value).toBe(8);
        expect(list.toString()).toBe("0,1,2,3,4,5,6,7,8");

        list.pop();

        expect(list.pop()).toBe(7);
        expect(list.size).toBe(7);
        expect(list.tail?.value).toBe(6);
        expect(list.toString()).toBe("0,1,2,3,4,5,6");
    });

    it("Should delete the first element", () => {
        list.append(1);
        list.append(2);
        list.append(3);

        list.shift();

        expect(list.size).toBe(2);
        expect(list.tail?.value).toBe(3);
        expect(list.toString()).toBe("2,3");

        list.shift();
        list.shift();
        list.shift();

        expect(list.size).toBe(0);
        expect(list.tail).toBeNull();
        expect(list.toString()).toBe("");
    });

    it("Should reverse the entire linked list", () => {
        list.append(1);
        list.append(2);
        list.append(3);

        list.reverse();

        expect(list.toString()).toBe("3,2,1");
        expect(list.tail?.value).toBe(1);
    });

    it("Should create a linked list of objects", () => {
        let objList = new LinkedList<object>();

        objList.append({key: "hey", value: "hola"});

        expect(objList.size).toBe(1);
        expect(JSON.parse(objList.toString())).toStrictEqual({key: 'hey', value: 'hola'});
    })
})
