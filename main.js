function parser() {
    var eq = document.querySelector(".Equation").value;
    alert(math.evaluate(eq));
}

class Node{
    constructor(value){
        this.value = value;
        this.parent = null;
        this.child = null;
    }
}

class Tree{
    constructor(){
        this.head = null;
        this.roots = null;
        this.height = 0;
    }
    find(val){

    }

    insert(val){

    }

    remove(val){

    }

    remove(index){

    }
}