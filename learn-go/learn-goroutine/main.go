package main

import (
	"fmt"
	"learn-goroutine/library" // Import my own library
	"runtime"
)

func print(till int, message string) {
	for i := 0; i < till; i++ {
		fmt.Println((i + 1), message)
	}
}

func main() {
	// Check CPU core with my own library
	library.CheckCPUCore()

	runtime.GOMAXPROCS(2) // Set the maximum number of CPUs that can be executing simultaneously to 2

	go print(5, "Hello") // This will run concurrently with the main goroutine

	print(5, "World!")

	// Variable to hold user input
	var input string

	fmt.Scanln(&input) // This will wait for the user to type something and press Enter, but only 1 line of input will be read. If you want to read multiple lines, you can use bufio.NewScanner(os.Stdin) instead.

	fmt.Printf("Typed: %s\n", input) // This will print the input typed by the user
}
