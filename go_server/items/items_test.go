package items

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestWoodIsEqualToWood(t *testing.T) {
	item_name := "Wooden chest"
	res := GetGuessResponse(item_name, item_name)
	assert.Equal(t, GuessResponse{2, 2, 2, 2, 2, WOODEN_CHEST}, res)
}
