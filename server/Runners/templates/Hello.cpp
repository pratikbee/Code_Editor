#include <iostream>

// Define a class named "Printer"
class Printer {
public:
    // Constructor
    Printer() {
        count = 5;  // Initialize count to 5
    }

    // Member function to print "i" 'count' times
    void printI() {
        for (int i = 0; i < count; i++) {
            std::cout << "i ";
        }
        std::cout << std::endl;  // Print a newline character at the end
    }

private:
    int count;  // Private member variable
};

int main() {
    // Create an object of the Printer class
    Printer printer;

    // Call the printI() member function on the object
    printer.printI();

    return 0;
}

