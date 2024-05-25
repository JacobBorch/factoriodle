package main

import (
	"encoding/json"
	"factoriodle_server/items"
	"fmt"
	"net/http"
)

func todaysCorrect() string {
	return "wooden-chest"
}


func handleGuess(w http.ResponseWriter, r *http.Request) {
	enableCORS(&w)
	input := r.URL.Query().Get("input")
	fmt.Println("Received: ", input)
	if input == "" {
		http.Error(w, "No input provided", http.StatusBadRequest)
		return
	}
	response := items.GetGuessResponse(input, todaysCorrect())
	jsonResponse, err := json.Marshal(response)
	if err != nil {
		http.Error(w, "Error marshalling JSON", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	fmt.Println("Sending: ", string(jsonResponse))
	w.Write(jsonResponse)
}

func enableCORS(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	(*w).Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func main() {
	http.HandleFunc("/guess", handleGuess)
	
	fmt.Println("Server starting on port 8000...")
	if err := http.ListenAndServe(":8000", nil); err != nil {
		fmt.Println("Error starting server: ", err)
	}
}
