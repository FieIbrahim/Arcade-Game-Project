//Enmemy function
var Enemy = function(x, y, velocity) {
  // The image sprite for our enemies
  this.sprite = 'images/enemy-bug.png';
  // Variables for x, y axis and velocity
  this.x = x;
  this.y = y;
  this.velocity = velocity;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  //multiply velocity by the dt parameter
  this.x += this.velocity * dt;
  //enmies appears randomly with different speeds
  this.x = this.x + this.velocity * dt;
  if (this.x >= 400) {
    this.x = 0;
  }

  //when player hits the enemy the game start over
  if (player.x < this.x + 40 &&
    player.x + 40 > this.x &&
    player.y < this.y + 30 &&
    30 + player.y > this.y) {

    player.x = 200;
    player.y = 400;
  };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player class with x and y axis
var Player = function(x, y) {
  // Variables for the player to move
  this.x = x;
  this.y = y;
  //image of the player
  this.player = 'images/char-cat-girl.png';

};

Player.prototype.update = function(dt) {

};

// Renders the image of the character into the game
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.player), this.x, this.y);
};
//Define enmies
const e1 = new Enemy(0, 100, 50);
const e2 = new Enemy(0, 200, 50);
const e3 = new Enemy(0, 230, 50);
const allEnemies = [];
//input the enmies in the array
for (item of [1, 2, 3]) {
  const enemy = new Enemy(0, 70 * item, 50 * item);
  allEnemies.push(enemy);
}
//controle the game by keyboard
Player.prototype.handleInput = function(Keys) {

  //move left on the x axis by 50
  // not to go off the game on the left side
  if (Keys === 'left' ) {
console.log(this.x);
    if(this.x<=50){
      this.x=50;
    };

        this.x -= 50;

  }

  //move right on the x axis by 50
  // not to go off the game on the right side
  else if (Keys === 'right' ) {

    console.log(this.x);
    if(this.x>=350){
      this.x=350;
    };
            this.x += 50;
  }
  //move up on the y axis by 50
  // not to go off the game on the upper side

  else if (Keys === 'up' ) {

        console.log(this.y);
        if(this.y>=500){
          this.y=500;
        };
    this.y -= 50;
  }

  //move down on the y axis by 50
  // not to go off the game on the down side
  else if (Keys === 'down' ) {
    console.log(this.y);

    if(this.y>=350 ){
      this.y=350;

    };

    this.y += 50;
  }

  // when you reach to the water the position of  character reset
  if (this.y < 0) {
alert("You won!");
    setTimeout(() => {

        this.x = 200;


        this.y = 400;

      },
      600);


  };
};


var player = new Player(200, 400);
// This listens for key presses
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
