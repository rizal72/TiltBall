let ball = game.createSprite(2, 2)
let aMax = 1024
let aThreshold = 10
let v = 5
basic.forever(function () {
    if (input.acceleration(Dimension.X) > aThreshold) {
        ball.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < aThreshold * -1) {
        ball.change(LedSpriteProperty.X, -1)
    }
    basic.pause((aMax - Math.abs(input.acceleration(Dimension.X))) / v)
})
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > aThreshold) {
        ball.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < aThreshold * -1) {
        ball.change(LedSpriteProperty.Y, -1)
    }
    basic.pause((aMax - Math.abs(input.acceleration(Dimension.Y))) / v)
})
