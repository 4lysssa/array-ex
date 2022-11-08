input.onButtonPressed(Button.A, function () {
    basic.showString("" + (text_list[1]))
})
input.onButtonPressed(Button.AB, function () {
    p1 = text_list[0]
    p2 = text_list[1]
    if (p1 == p2) {
        basic.showString("" + (p1))
        basic.showString("win")
    } else {
        basic.showString("" + (p2))
        basic.showString("Hello!")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (text_list[1]))
})
let p2 = ""
let p1 = ""
let text_list: string[] = []
text_list = ["spiderman", "batman", "lebron james"]
text_list = ["thanos", "joker", "dr doom"]
basic.forever(function () {
	
})
