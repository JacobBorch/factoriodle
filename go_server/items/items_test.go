package items

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestWoodIsEqualToWood(t *testing.T) {
	res := IsGuessCorrect("wood", "wood")
	assert.Equal(t, GuessResponse{2, 2, 2, 2, 2}, res)
}
