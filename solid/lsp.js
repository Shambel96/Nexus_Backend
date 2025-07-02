// When extending a class, remember that you should be
// able to pass objects of the subclass in place of objects of
// the parent class without breaking the client code.

//we can replace the father with the child

// Violating LSP

// class Bird {
//   fly() {
//     console.log("FLying");
//   }

//   eat() {
//     console.log("Eating");
//   }
// }
// class Hen extends Bird {
//   eat() {
//     console.log("Eating a Worm");
//   }
// }


// const newHen = new Hen()

// newHen.fly()


class File {
    write(content) {
        console.log(`Writing ${content}`);
    }
    save(content) {

    }

    read(content) {
        console.log(`Reading ${content}`);
        
    }
}

class ReadonlyFile extends File {
    // this bad
    // we are breaking the expected outcome of our class
}



// Solution
class Readable {
    read() {
        throw Error("Should be Implemented")
    }
}


class Writable {
    write() {
        throw new Error("Should be Implemented")
    }
}
// Savable



class ReadableFile extends Readable {
    read() {

    }
}

class WritableFile extends Writable {
    write() {

    }
}

// class multippurposeFile extends File{

// }

// class multippurposeFile implements Readable,Writable {

// }
// 
