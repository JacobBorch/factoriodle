package items

const BROWN = 0
const GREY = 1
const YELLOW = 2
const RED = 3

const RED_SCIENCE = 0
const GREEN_SCIENCE = 1
const GREY_SCIENCE = 2
const BLUE_SCIENCE = 3
const YELLOW_SCIENCE = 4

const LOGISTICS = 0
const AUTOMATION = 1
const INTERMEDIATE = 2
const COMBAT = 3

type Item struct {
	Name string

	Color        []int
	Ingredients  []string
	Category     int
	Science      int
	CraftingTime float32
}

/*
*0 is wrong, 1 right is partially correct, 2 is correct
For science and craftingTime 0 is less, 1 is more, and 2 is correct
*/
type GuessResponse struct {
	Color        int
	Ingredients  int
	Category     int
	Science      int
	CraftingTime int
	Item         Item
}

func stringSlicesAreEqual[T comparable](a []T, b []T) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}

func stringSlicesArePartiallyEqual[T comparable](a []T, b []T) bool {
	seen := make(map[T]bool)
	for _, item := range a {
		seen[item] = true
	}
	for _, item := range b {
		if seen[item] {
			return true
		}
	}
	return false
}

func compareSlice[T comparable](guess []T, correct []T) int {
	if stringSlicesAreEqual(guess, correct) {
		return 2
	}
	if stringSlicesArePartiallyEqual(guess, correct) {
		return 1
	}
	return 0
}

func compareCategory(correct int, guess int) int {
	if guess == correct {
		return 2
	}
	return 0
}

func compareScience(correct int, guess int) int {
	if correct < guess {
		return 0
	}
	if correct > guess {
		return 1
	}
	return 2
}

func compareCraftingTime(correct float32, guess float32) int {
	if correct < guess {
		return 0
	}
	if correct > guess {
		return 1
	}
	return 2
}

func GetGuessResponse(guess Item, correct Item) GuessResponse {
	return GuessResponse{
		compareSlice[int](correct.Color, guess.Color),
		compareSlice[string](correct.Ingredients, guess.Ingredients),
		compareCategory(correct.Category, guess.Category),
		compareScience(correct.Science, guess.Science),
		compareCraftingTime(correct.CraftingTime, guess.CraftingTime),
		guess,
	}
}
