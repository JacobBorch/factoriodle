package main

import (
	"fmt"
	"net/http"
)

func handleGuess(w http.ResponseWriter, r *http.Request) {
	enableCORS(&w)
	input := r.URL.Query().Get("input")
	fmt.Println("Received: ", input)
	if input == "" {
		http.Error(w, "No input provided", http.StatusBadRequest)
		return
	}
	w.Header().Set("Content-Type", "text/plain")
	fmt.Fprintf(w, "Go")
}

func enableCORS(w *http.ResponseWriter) {

	(*w).Header().Set("Access-Control-Allow-Origin", "*") // Allows all domains; for development only!
}

func main() {
	http.HandleFunc("/echo", handleGuess)
	
	fmt.Println("Server starting on port 8000...")
	if err := http.ListenAndServe(":8000", nil); err != nil {
		fmt.Println("Error starting server: ", err)
	}
}
