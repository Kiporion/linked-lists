class linkedList {
    constructor(head = null) {
        this.head = head;
    };

    append(value) {
        // adds a new node containing value to the end of the list
        if (!this.head) {
            this.head = new node(value);
            return this;
        }
        let tail = this.getTail();
        tail.next = new node(value);
        return tail;
    };

    prepend(value) {
        // adds a new node containing value to the start of the list
        if (!this.head) {
            this.head = new node(value);
            return this;
        }
        const prevHead = this.head;
        this.head = new node(value, prevHead);
    };

    size() {
        // returns the total number of nodes in the list
        let nodeCount = 0;
        let counter = this.head;
        while (counter !== null) {
            nodeCount++;
            counter = counter.next;
          }
        return nodeCount;
    };

    getHead() {
        // returns the first node in the list
        return this.head;
    };

    
    getTail() {
        // returns the last node in the list
        if (!this.head) return null;
        let tail = this.head;
        while (tail.next !== null) {
          tail = tail.next;
        }
        return tail;
    };

    at(index) {
        // returns the node at the given index
        if (!this.head) return null;
        
        let counter = this.head;
        for (let i = 0; i < index; i++) {
         counter = counter.next;
        }
        return counter ? counter : null;
    };

    pop() {
        // removes the last element from the list
        if (!this.head) return null;
        
        if (!this.head.next) {
            this.head = null;
            return;
        }
        
        let pointerBeforeTail = this.at(this.size() - 2);
        pointerBeforeTail.next = null;
        return this.head;
    };

    contains(value) {
        // returns true if the passed in value is in the list and otherwise returns false
        if (!this.head) return null;

        let counter = this.head;
        while (counter !== null) {
            if (value === counter.value) {
                return true;
            }
            counter = counter.next;
        }
        return false;
    };

    find(value) {
        // returns the index of the node containing value, or null if not found.
        if (!this.head) return null;

        let index = 0;
        let counter = this.head;
        while (counter !== null) {
            index++;
            if (value === counter.value) {
                return index;
            }
            counter = counter.next;
        }
        return null;
    };

    toString() {
        // represents your LinkedList objects as strings, so you can print them out and preview them in the console.
        if (!this.head) return "null";

        let output = "";
        let counter = this.head;
        while (counter.next !== null) {
            output = `${output} ( ${counter.value} ) ->`;
            counter = counter.next;
            
        }
        return `${output} ( ${counter.value} ) -> null`;
    };
};

class node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
};

const list = new linkedList();
console.log(list.prepend(1));
console.log(list.append(2));
console.log(list.append(3));
console.log(list.append(4));
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(2));
console.log(list.pop());
console.log(list.contains(3));
console.log(list.find(2));
console.log(list.append(6));
console.log(list.toString());