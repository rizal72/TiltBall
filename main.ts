let ball = game.createSprite(2, 2)
let a = 10
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > a) {
        ball.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < a * -1) {
        ball.change(LedSpriteProperty.Y, -1)
    }
    basic.pause((1024 - Math.abs(input.acceleration(Dimension.Y))) / 5)
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) > a) {
        ball.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < a * -1) {
        ball.change(LedSpriteProperty.X, -1)
    }
    basic.pause(100)
})
