package items

var WOODEN_CHEST = Item{"Wooden chest", []int{BROWN}, []string{"wood"}, LOGISTICS, RED_SCIENCE, 0.5}
var IRON_CHEST = Item{"Iron chest", []int{GREY}, []string{"Iron plate"}, LOGISTICS, RED_SCIENCE, 0.5}

var TRANSPORT_BELT = Item{"Transport belt", []int{GREY, YELLOW}, []string{"Iron plate", "Iron gear wheel"}, LOGISTICS, RED_SCIENCE, 0.5}
var FAST_TRANSPORT_BELT = Item{"Fast transport belt", []int{GREY, RED}, []string{"Iron gear wheel", "Transport belt"}, LOGISTICS, GREEN_SCIENCE, 0.5}