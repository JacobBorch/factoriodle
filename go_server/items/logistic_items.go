package items

var WOODEN_CHEST = Item{"wooden-chest", []int{BROWN}, []string{"wood"}, LOGISTICS, RED_SCIENCE, 0.5}
var IRON_CHEST = Item{"iron-chest", []int{GREY}, []string{"iron-plate"}, LOGISTICS, RED_SCIENCE, 0.5}

var TRANSPORT_BELT = Item{"transport-belt", []int{GREY, YELLOW}, []string{"iron-plate", "iron-gear-wheel"}, LOGISTICS, RED_SCIENCE, 0.5}
var FAST_TRANSPORT_BELT = Item{"fast-transport-belt", []int{GREY, RED}, []string{"iron-gear-wheel", "transport-belt"}, LOGISTICS, GREEN_SCIENCE, 0.5}