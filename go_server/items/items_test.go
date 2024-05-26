package items

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestWoodIsEqualToWood(t *testing.T) {
	res := GetGuessResponse(WOODEN_CHEST, WOODEN_CHEST)
	assert.Equal(t, GuessResponse{2, 2, 2, 2, 2, WOODEN_CHEST}, res)
}
