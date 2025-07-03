// Interface Segregation Principle(ISP):
// Definition: Clients shouldn’t be forced to depend on methods they don't use.

// Interface
class Machine {
  print(doc) {
    throw new Error("Implement it");
  }
  scan(doc) {
    throw new Error("Implement it");
  }
  copy(doc) {
    throw new Error("Implement it");
  }
}

// // violates ISP
class SimplePrinter extends Machine {
  scan(doc) {}

  copy(doc) {}
  print(doc) {
    console.log("Printing " + doc);
  }
}

// Interface Printer
class Printer {
  print(doc) {
    throw new Error("Implement it");
  }
}

// Interface Scanner
class Scanner {
  scan(doc) {
    throw new Error("Implement it");
  }
}

class SimplePrinter extends Printer {
  print(doc) {}
}

// class multippurposeMachine implements Printer,Scanner {

// }
//
