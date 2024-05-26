package main

import (
	"factoriodle_server/items"
	"fmt"
)

type GuessLogic interface {
	MakeGuess(input string) items.GuessResponse
}

type InMemoryGuessLogic struct {
	correct string
	itemMap map[string]items.Item
}

func (l InMemoryGuessLogic) MakeGuess(input string) items.GuessResponse {
	item, ok := l.itemMap[input]
	correct := l.itemMap[l.correct]
	if !ok {
		fmt.Println("Item not found: ", input)
		return items.GuessResponse{Item: items.Item{}}
	}
	return items.GetGuessResponse(item, correct)
}

func constructMap() map[string]items.Item {
	itemMap := make(map[string]items.Item)
	itemMap["Wooden chest"] = items.WOODEN_CHEST
	itemMap["Iron chest"] = items.IRON_CHEST
	itemMap["Transport belt"] = items.TRANSPORT_BELT
	itemMap["Fast transport belt"] = items.FAST_TRANSPORT_BELT
	return itemMap
}

func NewInMemoryGuessLogic(correct string) InMemoryGuessLogic {
	itemMap := constructMap()
	return InMemoryGuessLogic{correct, itemMap}
}
