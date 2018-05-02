
var windowWidth = 0
var windowHeight = 0

// start position
var startX = 0
var startY = 0

// end position
var stopX = 0
var stopY = 0

var moveDirection = null
var snakeDirection = 'right'

function getMoveDirection(startX, startY, stopX, stopY) {
  var diffX = stopX - startX
  var diffY = stopY - startY
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // left or right
    if (diffX > 0) {
      return 'right'
    } else if (diffX < 0) {
      return 'left'
    }
  } else if (Math.abs(diffX) < Math.abs(diffY)) {
    //  top or bottom
    if (diffY > 0) {
      return 'bottom'
    } else if (diffY < 0) {
      return 'top'
    }
  }
  return null
}

var snakeHead = {
  x: 0,
  y: 0,
  width: 8,
  height: 8,
  color: 'red'
}

var snakeBody = []

//存放食物的位置信息
var foods = [];

function rand(min, max) {
  return parseInt(Math.random() * (max - min) + min)
}

function Food() {
  this.width = snakeHead.width
  this.height = snakeHead.height
  this.color = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
  this.x = rand(0, windowWidth - this.width)
  this.y = rand(0, windowHeight - this.height)
  this.resetPosition=function(){
    this.x = rand(0, windowWidth - this.width)
    this.y = rand(0, windowHeight - this.height)
    this.color = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
  }


}

function collideFn(head, foodObj) {

  var x1 = head.x
  var y1 = head.y
  var x2 = foodObj.x
  var y2 = foodObj.y
  if (x1 + head.width > x2 && x1 < x2 + foodObj.width && y1 + head.height > y2 && y1 < y2 + foodObj.height) {
    return true
  } else {
    return false
  }
}

// var collide =false
//是否删除蛇的身体
var removeBodyBol = true;
Page({
  data:{
    snakeLength: snakeBody.length +1,
    score:0
  },
  onLoad: function (options) {
    var that = this;

    wx.getSystemInfo({
      success: function (res) {
        // console.log(res)
        windowHeight = res.windowHeight
        windowWidth = res.windowWidth
      },
    })
    that.context = wx.createCanvasContext('snake', this)

    function moveDirection() {

      switch (snakeDirection) {
        case "top":
          snakeHead.y -= snakeHead.height
          break
        case 'bottom':
          snakeHead.y += snakeHead.height
          break
        case 'right':
          snakeHead.x += snakeHead.width
          break
        case 'left':
          snakeHead.x -= snakeHead.width
          break
      }
      if (snakeHead.x >= windowWidth) {
        snakeHead.x = 0
      } else if (snakeHead.x < 0) {
        snakeHead.x = windowWidth

      }
      if (snakeHead.y >= windowHeight) {
        snakeHead.y = 0
      } else if (snakeHead.y < 0) {
        snakeHead.y = windowHeight
      }
    }

    function drawCanvas(color, x, y, width, height, continueDraw) {

      that.context.setFillStyle(color)
      that.context.fillRect(x, y, width, height)

      that.context.draw(continueDraw)

    }

    for (var i = 0; i < 30; i++) {
      var foodObj = new Food()
      foods.push(foodObj)
    }

    var frameTime = 0;
    function snakeAnimate() {
      // while(num<20){
      frameTime++
      if (frameTime % 20 == 0) {
        // snakeHead.x += snakeHead.width
        snakeBody.push({
          x: snakeHead.x,
          y: snakeHead.y,
          width: snakeHead.width,
          height: snakeHead.height,
          color: 'black'
        })
        // that.setData({ snakeLength: snakeBody.length + 1 })
        moveDirection()
        if (snakeBody.length >= 6) {
          if (removeBodyBol) {
            snakeBody.shift()
          }else{
            removeBodyBol=true
          }
          console.log('snakeBody.length------------', snakeBody.length)
         
            
        }


        that.setData({ snakeLength: snakeBody.length + 1 })

        drawCanvas(snakeHead.color, snakeHead.x, snakeHead.y, snakeHead.width, snakeHead.height, false)

        for (var i = 0; i < snakeBody.length; i++) {

          drawCanvas(snakeBody[i].color, snakeBody[i].x, snakeBody[i].y, snakeBody[i].width, snakeBody[i].height, true)
        }
        for (var i = 0; i < foods.length; i++) {

          var collide = collideFn(snakeHead, foods[i])
          if(collide){
            foods[i].resetPosition()
            removeBodyBol=false
            // console.log('snake head collide food :', collide)
          }
          // foods[i].resetPosition()
          drawCanvas(foods[i].color, foods[i].x, foods[i].y, foods[i].width, foods[i].height, true)
            
        }

      }

      // that.context.draw()   //true

      requestAnimationFrame(snakeAnimate)
    }

    snakeAnimate()

  },
  touchStart: function (e) {
    startX = e.touches[0].x
    startY = e.touches[0].y
    // console.log('---touchStart--position--x:', startX, '---y:', startY)
  },
  touchMove: function (e) {
    stopX = e.touches[0].x
    stopY = e.touches[0].y
    // console.log('---touchMove--position--x:', stopX, '---y:', stopY)


  },
  touchEnd: function (e) {
    // console.log('---touchEnd----')
    moveDirection = getMoveDirection(startX, startY, stopX, stopY)

    switch (moveDirection) {
      case 'left':
        if (snakeDirection != 'right') {
          snakeDirection = 'left'
        }
        break
      case 'right':
        if (snakeDirection != 'left') {
          snakeDirection = 'right'
        }
        break
      case 'top':
        if (snakeDirection != 'bottom') {
          snakeDirection = 'top'
        }
        break
      case 'bottom':
        if (snakeDirection != 'top') {
          snakeDirection = 'bottom'
        }
        break
    }
    // console.log('direction:', moveDirection)
  }
})