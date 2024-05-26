package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

func todaysCorrect() string {
	return "Wooden chest"
}

func getItemNames(path string) ([]string, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	var lines []string
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}

	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return lines, nil
}

func handleGetItemNames(w http.ResponseWriter, r *http.Request) {
	enableCORS(&w)
	file_path := "../data/items.txt"
	itemNames, err := getItemNames(file_path)
	if err != nil {
		fmt.Println("Error reading item names: ", err)
		http.Error(w, "Error reading item names", http.StatusInternalServerError)
		return
	}
	jsonResponse, err := json.Marshal(itemNames)
	if err != nil {
		http.Error(w, "Error marshalling JSON", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonResponse)
}


func handleGuess(w http.ResponseWriter, r *http.Request) {
	enableCORS(&w)
	input := r.URL.Query().Get("input")
	fmt.Println("Received: ", input)
	if input == "" {
		http.Error(w, "No input provided", http.StatusBadRequest)
		return
	}
	logic := NewInMemoryGuessLogic(todaysCorrect())
	response := logic.MakeGuess(input)

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
	http.HandleFunc("/itemNames", handleGetItemNames)

	fmt.Println("Server starting on port 8000...")
	if err := http.ListenAndServe(":8000", nil); err != nil {
		fmt.Println("Error starting server: ", err)
	}
}
