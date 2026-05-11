package library

import (
	"fmt"
	"runtime"
)

func CheckCPUCore() {
	totalCores := runtime.NumCPU()
	fmt.Printf("Total Logical CPUs on Machine: %d\n", totalCores)
}
