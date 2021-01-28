ball = game.create_sprite(2, 2)
aMax = 1024
aThreshold = 10
v = 5

def on_forever():
    if input.acceleration(Dimension.X) > aThreshold:
        ball.change(LedSpriteProperty.X, 1)
    if input.acceleration(Dimension.X) < aThreshold * -1:
        ball.change(LedSpriteProperty.X, -1)
    basic.pause((aMax - abs(input.acceleration(Dimension.X))) / v)
basic.forever(on_forever)

def on_forever2():
    if input.acceleration(Dimension.Y) > aThreshold:
        ball.change(LedSpriteProperty.Y, 1)
    if input.acceleration(Dimension.Y) < aThreshold * -1:
        ball.change(LedSpriteProperty.Y, -1)
    basic.pause((aMax - abs(input.acceleration(Dimension.Y))) / v)
basic.forever(on_forever2)
