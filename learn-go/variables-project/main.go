package main

import "fmt"

func main() {
	var firstName string = "John"

	var lastName string
	lastName = "Wick"

	fmt.Printf("Hello, John Wick!\n")
	fmt.Printf("Hello, %s %s!\n", firstName, lastName)
	fmt.Println("Hello,", firstName, lastName+"!")
}
