/* =///////////////////////////= 
   =  1. Variables Declaration =
   =///////////////////////////=
*/

/* =====================
   =  1.1 OBJECT TYPES   =
   ===================== 
   */

// 1.1.1 Background Shapes Object Type
var BackGroundShapes = function (x, y) {
  this.x = x;
  this.y = y;
};

// 1.1.2 Rectangle Shape Object Type
var RectangleShape = function (x, y, width, height) {
  BackGroundShapes.call(this, x, y);
  this.width = width;
  this.height = height;
};

// 1.1.2.1 Rectangle Shape Object Instance variables
// Variables for a lawn type rectangle shape
var lawnRectangleX = 50;
var lawnRectangleY = 100;
var lawnRectangleWidth = 50;
var lawnRectangleHeight = 50;

// Variables for a vertical fence type rectangle shape
var verticalFenceRectangleX = 50;
var verticalFenceRectangleY = 50;
var verticalFenceRectangleWidth = 10;
var verticalFenceRectangleHeight = 50;

// Variables for a horizontal fence type rectangle shape
var horizontalFenceRectangleX = 50;
var horizontalFenceRectangleY = 65;
var horizontalFenceRectangleWidth = 400;
var horizontalFenceRectangleHeight = 3;

// Variables for a sidewalk rectangle shape
var sidewalkRectangleX = 0;
var sidewalkRectangleY = 100;
var sidewalkRectangleWidth = 50;
var sidewalkRectangleHeight = 50;

// Variables for a street rectangle shape
var streetRectangleX = 500;
var streetRectangleY = 100;
var streetRectangleWidth = 100;
var streetRectangleHeight = 350;

// Variables for a street line rectangle shape
var streetLineRectangleX = 545;
var streetLineRectangleY = 100;
var streetLineRectangleWidth = 10;
var streetLineRectangleHeight = 25;

// Variables for pea shooter rectangle shape
var peaShooterRectangleX = 73;
var peaShooterRectangleY = 177;
var peaShooterRectangleWidth = 4;
var peaShooterRectangleHeight = 15;

// Variables for level finished sign rectangle shape
var levelFinishedX = 150;
var levelFinishedY = 200;
var levelFinishedWidth = 250;
var levelFinishedHeight = 150;

// 1.1.3 Circle Shape Object Type
var CircleShape = function (x, y, width, height) {
  BackGroundShapes.call(this, x, y);
  this.width = width;
  this.height = height;
};

// 1.1.3.1 Circle Shape Object Instance variables
// Variables for a cloud circle shape
var cloudCircleX = 50;
var cloudCircleY = 15;
var cloudCircleWidth = 15;
var cloudCircleHeight = 15;

// Variables for pea shooter circle shape
var peaShooterCircleX = 75;
var peaShooterCircleY = 165;
var peaShooterWidth = 25;
var peaShooterHeight = 25;

// Variables for pea shooter base
var peaShooterBaseX = 75;
var peaShooterBaseY = 190;
var peaShooterBaseWidth = 25;
var peaShooterBaseHeight = 5;

// Variables for a zombie face
var zombieFaceX = 630;
var zombieFaceY = 150;
var zombieFaceWidth = 20;
var zombieFaceHeight = 20;

// Variables for an armored zombie face
var armoredZombieFaceX = 630;
var armoredZombieFaceY = 150;
var armoredZombieFaceWidth = 20;
var armoredZombieFaceHeight = 20;

// Variables for a pea shape
var peaX = 110;
var peaY = 167;
var peaWidth = 9;
var peaHeight = 9;

// 1.1.4 Triangle Shape Object Type
var TriangleShape = function (x, y, x2, y2, x3, y3) {
  BackGroundShapes.call(this, x, y);
  this.x2 = x2;
  this.y2 = y2;
  this.x3 = x3;
  this.y3 = y3;
};

// 1.1.4.1 Triangle Shape Object Instance variables
// Variables for a stronger zombie face cone
var strongerZombieFaceX = 630;
var strongerZombieFaceY = 150;

/* =====================
   =     1.2 FLAGS     =
   ===================== 
   */
var peaShooterFlag = false;

/* =====================
   =   1.3 Counters    =
   ===================== 
*/
var peaCounter = 0;

/* =///////////////////////////= 
   =        2. Setup           =
   =///////////////////////////=
*/
function setup() {
  // Canvas creation
  createCanvas(650, 450);
}

/* =///////////////////////////= 
   =     3. Main Program       =
   =///////////////////////////=
*/
function draw() {
  //Drawing the background with a sunny sky color
  background(117, 167, 228);

  /*===========================
    = Drawing lawn rectangles =
    ===========================
  */

  // Removing line borders
  noStroke();

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 8; j++) {
      //Selecting a lawn color depending of the (i,j) position
      var lawnRectangleColor = getRectangleShapeColor(i, j);
      fill(lawnRectangleColor);

      /*Creating a new rectangleShape instance
        to draw it on the canva
      */
      var lawnRectangle = new RectangleShape(
        lawnRectangleX + lawnRectangleX * j,
        lawnRectangleY + lawnRectangleHeight * i,
        lawnRectangleWidth,
        lawnRectangleHeight
      );
      lawnRectangle.drawRectangle();
    }
  }

  /*===========================
    = Drawing vertical fences =
    ===========================
  */

  // Giving fences a grey color
  strokeWeight(2);
  stroke(110, 102, 101);
  fill(202, 188, 179);

  for (i = 0; i < 9; i++) {
    /*Creating a new rectangleShape instance
      to draw it on the canva
    */
    var verticalFenceRectangle = new RectangleShape(
      verticalFenceRectangleX + verticalFenceRectangleX * i,
      verticalFenceRectangleY,
      verticalFenceRectangleWidth,
      verticalFenceRectangleHeight
    );
    verticalFenceRectangle.drawRectangle();
  }

  /*=============================
    = Drawing horizontal fences =
    =============================
  */

  for (i = 0; i < 2; i++) {
    /*Creating a new rectangleShape instance
     to draw it on the canva
    */
    var horizontalFenceRectangle = new RectangleShape(
      horizontalFenceRectangleX,
      horizontalFenceRectangleY + (horizontalFenceRectangleY * i * 1) / 4,
      horizontalFenceRectangleWidth,
      horizontalFenceRectangleHeight
    );

    horizontalFenceRectangle.drawRectangle();
  }

  /*=============================
    =     Drawing sidewalk      =
    =============================
  */

  // Giving sidewalk a cream color
  stroke(182, 160, 128);
  fill(247, 236, 200);

  for (i = 0; i < 7; i++) {
    for (j = 0; j < 13; j++) {
      /*Creating a new rectangleShape instance
      to draw it on the canva
      */
      if (isOutsideLawn(i, j)) {
        var sidewalkRectangle = new RectangleShape(
          sidewalkRectangleX + sidewalkRectangleWidth * j,
          sidewalkRectangleY + sidewalkRectangleHeight * i,
          sidewalkRectangleWidth,
          sidewalkRectangleHeight
        );
      }
      sidewalkRectangle.drawRectangle();
    }
  }

  /*=============================
    =     Drawing street      =
    =============================
  */

  // Giving street a dark grey color
  stroke(182, 160, 128);
  fill(108, 106, 109);

  /*Creating a new rectangleShape instance
      to draw it on the canva
  */
  var streetRectangle = new RectangleShape(
    streetRectangleX,
    streetRectangleY,
    streetRectangleWidth,
    streetRectangleHeight
  );
  streetRectangle.drawRectangle();

  /*=============================
    =    Drawing street lines    =
    ==============================
  */
  // Giving the street line a white color
  noStroke();
  fill(255, 255, 255);

  /*Creating a new rectangleShape instance
      to draw it on the canva
  */

  for (i = 0; i < 7; i++) {
    var streetLineRectangle = new RectangleShape(
      streetLineRectangleX,
      streetLineRectangleY + (streetLineRectangleY * i * 1) / 2,
      streetLineRectangleWidth,
      streetLineRectangleHeight
    );
    streetLineRectangle.drawRectangle();
  }

  /*=============================
    =    Drawing clouds         =
    =============================
  */
  // Giving the cloud line a white color
  fill(255, 255, 255);
  drawCloud(cloudCircleX - 50, cloudCircleY + 10);
  drawCloud(cloudCircleX, cloudCircleY);
  drawCloud(cloudCircleX + 50, cloudCircleY + 10);

  /*=============================
    =    Drawing peashooters    =
    =============================
  */
  for (i = 0; i < 5; i++) {
    drawPeaShooter(
      peaShooterCircleX,
      peaShooterCircleY + (peaShooterCircleY / 3.5) * i,
      peaShooterRectangleX,
      peaShooterRectangleY + (peaShooterCircleY / 3.5) * i,
      peaShooterBaseX,
      peaShooterBaseY + (peaShooterCircleY / 3.5) * i
    );
  }

  /*=============================
    =     Drawing zombies       =
    =============================
  */
  for (i = 0; i < 5; i++) {
    // Draw a normal zombie
    if (i <= 1) {
      drawZombie(zombieFaceX, zombieFaceY + (zombieFaceY / 3) * i);
    }
    //Draw a stronger zombie
    else if (i > 1 && i <= 3) {
      drawStrongerZombie(
        strongerZombieFaceX,
        strongerZombieFaceY + (strongerZombieFaceY / 3) * i
      );
    }
    //Draw an armored zombie
    else {
      drawArmoredZombie(
        armoredZombieFaceX,
        armoredZombieFaceY + (armoredZombieFaceY / 3) * i
      );
    }
  }

  /*=============================
    =      Drawing peas         =
    =============================
  */
  for (i = 0; i < 5; i++) {
    drawPea(peaX, peaY + (peaShooterCircleY / 3.5) * i);
  }

  /*=============================
    =    Animating the canvas   =
    =============================
  */

  // Cloud animation to loop infinite clouds moving
  /*If condition: if last cloud position is greater
    than the canvas width, restart the cloud x
    position to zero
  */
  if (cloudCircleX - 100 === 650) {
    cloudCircleX = 0;
  } else {
    cloudCircleX++;
  }

  // Peashooter iddle movement
  /* If peaShooterFlag is true, this means that the plant
     has to move to the left side 0.1 unit 
     */
  if (peaShooterFlag === true) {
    peaShooterCircleX -= 0.1;
    /* If the pea shooter has reached the x position 73,
       the flag needs to be deactivated to stop moving
       the plant to the left
    */
    if (Math.round(peaShooterCircleX * 100) / 100 === 73) {
      peaShooterFlag = false;
    }
  } else {
    /* If peaShooterFlag is false, this means that the plant
     has to move to the right side 0.1 unit
  */
    peaShooterCircleX += 0.1;
    /* If the pea shooter has reached the x position 77,
       the flag needs to be activated to start moving
       the plant to the left
    */
    if (Math.round(peaShooterCircleX * 100) / 100 === 77) {
      peaShooterFlag = true;
    } else {
      peaShooterFlag = false;
    }
  }

  // Zombie's animation
  zombieFaceX -= 0.5;

  // Stronger Zombie's animation
  strongerZombieFaceX -= 0.5;

  // Armored Zombie's animation
  armoredZombieFaceX -= 0.5;

  // Pea's animation
  peaX += 1;

  // Animating pea's collition
  if (
    peaX === zombieFaceX ||
    peaX === strongerZombieFaceX ||
    peaX === armoredZombieFaceX ||
    peaX - 1 === zombieFaceX ||
    peaX - 1 === strongerZombieFaceX - 1 ||
    peaX - 1 === armoredZombieFaceX ||
    peaX + 1 === zombieFaceX ||
    peaX + 1 === strongerZombieFaceX ||
    peaX + 1 === armoredZombieFaceX
  ) {
    peaX = 110;
    peaCounter++;
  }

  switch (peaCounter) {
    case 3:
      /* If 3 pea's have been shot, remove the 
         stronger zombie and convert it into a
         normal zombie
      */
      strongerZombieFaceX = -15;
      drawZombie(zombieFaceX, (strongerZombieFaceY / 3) * 5);
      drawZombie(zombieFaceX, (strongerZombieFaceY / 3) * 6);
      break;
    case 4:
      /* If 4 pea's have been shot, remove the 
         armored zombie and convert it into a
         normal zombie
      */
      armoredZombieFaceX = -15;
      drawZombie(zombieFaceX, (strongerZombieFaceY / 3) * 5);
      drawZombie(zombieFaceX, (strongerZombieFaceY / 3) * 6);
      drawZombie(zombieFaceX, (armoredZombieFaceY / 3) * 7);
      break;
    case 5:
      /* If 5 pea's have been shot, remove 
         all the zombies from the yard
      */
      zombieFaceX = -15;
      peaX = 670;
      peaCounter++;
      break;
    default:
      break;
  }

  /* Once the zombies have been removed, finish
     the level
  */
  if (peaCounter > 5) {
    drawLevelFinished(levelFinishedX, levelFinishedY);
  }
}

/* =///////////////////////////= 
   =     4. Functions          =
   =///////////////////////////=
*/

/* =============================
   = 4.1 OBJECT TYPES METHODS  =
   ============================= 
*/

// 4.1.1 Rectangle Shape Methods
// drawRectangle(): Draws a rectangle on the canvas
RectangleShape.prototype.drawRectangle = function () {
  rect(this.x, this.y, this.width, this.height);
};

// 4.1.2 Circle Shape Methods
// drawCircle(): Draws a circle on the canvas
CircleShape.prototype.drawCircle = function () {
  ellipse(this.x, this.y, this.width, this.height);
};

// 4.1.3 Triangle Shape Methods
// drawTriangle(): Draws a triangle on the canvas
TriangleShape.prototype.drawTriangle = function () {
  triangle(this.x, this.y, this.x2, this.y2, this.x3, this.y3);
};

/* =============================
   =   4.2 DRAWING FUNCTIONS   =
   ============================= 
*/

/* 4.2.1 drawCloud(): Draws a cloud with a set of circles given
a x and y position
*/
function drawCloud(cloudCircleX, cloudCircleY) {
  for (var i = 0; i < 5; i++) {
    /* Creating an if condition that let the program
      create a bigger circle if i is odd in order
      to simulate a cloud
      */
    if (i % 2 === 0) {
      var cloudCircle = new CircleShape(
        cloudCircleX - (cloudCircleWidth * i) / 1.8,
        cloudCircleY,
        cloudCircleWidth,
        cloudCircleHeight
      );
    } else {
      cloudCircle = new CircleShape(
        cloudCircleX - (cloudCircleWidth * i) / 1.8,
        cloudCircleY,
        cloudCircleWidth * 1.2,
        cloudCircleHeight * 1.2
      );
    }
    cloudCircle.drawCircle();
  }
}

/* 4.2.2 drawPeaShooter(): draws the famous peashooter from
plants vs zombies using circle and rectangle shapes given
a set of coordinates.
*/
function drawPeaShooter(
  peaShooterCircleX,
  peaShooterCircleY,
  peaShooterRectangleX,
  peaShooterRectangleY,
  peaShooterBaseX,
  peaShooterBaseY
) {
  /* =============================
     = Drawing peashooter's face =
     =============================
  */
  strokeWeight(3);
  stroke(21, 45, 9);
  fill(86, 174, 36);

  var peaShooterFace = new CircleShape(
    peaShooterCircleX,
    peaShooterCircleY,
    peaShooterWidth,
    peaShooterHeight
  );

  peaShooterFace.drawCircle();

  /* =============================
     = Drawing peashooter's eyes =
     =============================
  */
  noStroke();
  fill(0, 0, 0);

  //Scleras
  //Left Sclera
  var peaShooterEyes = new CircleShape(
    peaShooterCircleX - peaShooterWidth / 12,
    peaShooterCircleY - peaShooterHeight / 12,
    peaShooterWidth / 5,
    peaShooterHeight / 3.5
  );
  peaShooterEyes.drawCircle();

  //Right Sclera
  peaShooterEyes = new CircleShape(
    peaShooterCircleX + peaShooterWidth / 5,
    peaShooterCircleY - peaShooterHeight / 5,
    peaShooterWidth / 5,
    peaShooterHeight / 3.5
  );
  peaShooterEyes.drawCircle();

  //Pupils
  fill(255, 255, 255);
  //Left Pupil
  peaShooterEyes = new CircleShape(
    peaShooterCircleX - peaShooterWidth / 12,
    peaShooterCircleY - peaShooterHeight / 12,
    peaShooterWidth / 10,
    peaShooterHeight / 10
  );
  peaShooterEyes.drawCircle();

  //Right Pupil
  peaShooterEyes = new CircleShape(
    peaShooterCircleX + peaShooterWidth / 5,
    peaShooterCircleY - peaShooterHeight / 5,
    peaShooterWidth / 10,
    peaShooterHeight / 10
  );
  peaShooterEyes.drawCircle();

  /* ==============================
     = Drawing peashooter's mouth =
     ==============================
  */
  strokeWeight(3);
  stroke(21, 45, 9);
  fill(86, 174, 36);

  var peaShooterMouth = new CircleShape(
    peaShooterCircleX + peaShooterWidth / 2,
    peaShooterCircleY + peaShooterHeight / 20,
    peaShooterWidth / 3,
    peaShooterHeight / 2
  );
  peaShooterMouth.drawCircle();

  /* ==============================
     = Drawing peashooter's stem  =
     ==============================
  */
  strokeWeight(2);

  var peaShooterStem = new RectangleShape(
    peaShooterRectangleX,
    peaShooterRectangleY,
    peaShooterRectangleWidth,
    peaShooterRectangleHeight
  );
  peaShooterStem.drawRectangle();

  /* =============================
     = Drawing peashooter's base  =
     ==============================
  */
  var peaShooterBase = new CircleShape(
    peaShooterBaseX,
    peaShooterBaseY,
    peaShooterBaseWidth,
    peaShooterBaseHeight
  );
  peaShooterBase.drawCircle();
}

/*  4.2.3 drawZombie(): draws a zombie that wants to
    eat the plants. It is drawn using circle and
    rectangle shapes.It receives a set of coordinates.
*/
function drawZombie(zombieFaceX, zombieFaceY) {
  /* =============================
     =  Drawing zombie's face    =
     =============================
  */
  strokeWeight(3);
  stroke(53, 61, 50);
  fill(146, 162, 133);

  var zombieFace = new CircleShape(
    zombieFaceX,
    zombieFaceY,
    zombieFaceWidth,
    zombieFaceHeight
  );

  zombieFace.drawCircle();

  /* =============================
     =  Drawing zombie's eyes    =
     =============================
  */
  //Scleras
  fill(253, 251, 191);
  noStroke();
  //Left Sclera
  var zombieEyes = new CircleShape(
    zombieFaceX - zombieFaceWidth / 4,
    zombieFaceY - zombieFaceHeight / 5,
    zombieFaceWidth / 5,
    zombieFaceHeight / 5
  );
  zombieEyes.drawCircle();

  //Right Sclera
  zombieEyes = new CircleShape(
    zombieFaceX + zombieFaceWidth / 10,
    zombieFaceY - zombieFaceHeight / 15,
    zombieFaceWidth / 5,
    zombieFaceHeight / 5
  );
  zombieEyes.drawCircle();

  //Pupils
  fill(0, 0, 0);
  //Left Pupil
  zombieEyes = new CircleShape(
    zombieFaceX - zombieFaceWidth / 4,
    zombieFaceY - zombieFaceHeight / 4,
    zombieFaceWidth / 10,
    zombieFaceHeight / 10
  );
  zombieEyes.drawCircle();

  //Right Pupil
  zombieEyes = new CircleShape(
    zombieFaceX + zombieFaceWidth / 8,
    zombieFaceY - zombieFaceHeight / 11,
    zombieFaceWidth / 10,
    zombieFaceHeight / 10
  );
  zombieEyes.drawCircle();

  /* ==============================
     =  Drawing zombie's mouth    =
     ==============================
  */
  strokeWeight(1);
  stroke(49, 0, 0);
  fill(209, 141, 152);

  var zombieMouth = new CircleShape(
    zombieFaceX - zombieFaceWidth / 5,
    zombieFaceY + zombieFaceHeight / 10,
    zombieFaceWidth / 3,
    zombieFaceHeight / 5
  );
  zombieMouth.drawCircle();

  /* ==============================
     =   Drawing zombie's body    =
     ==============================
  */

  // Zombie's torso
  strokeWeight(2);
  stroke(46, 30, 15);
  fill(120, 86, 48);

  var zombieTorso = new RectangleShape(
    zombieFaceX,
    zombieFaceY + zombieFaceHeight / 2,
    zombieFaceWidth / 3,
    zombieFaceHeight / 2
  );
  zombieTorso.drawRectangle();

  // Zombie's arm
  strokeWeight(2);
  stroke(46, 30, 15);
  fill(120, 86, 48);

  var zombieArm = new RectangleShape(
    zombieFaceX - zombieFaceWidth / 3,
    zombieFaceY + zombieFaceHeight / 2,
    zombieFaceWidth / 3,
    zombieFaceHeight / 6
  );
  zombieArm.drawRectangle();

  // Zombie's hand
  strokeWeight(1);
  stroke(53, 61, 50);
  fill(146, 162, 133);

  var zombieHand = new RectangleShape(
    zombieFaceX - zombieFaceWidth / 1.9,
    zombieFaceY + zombieFaceHeight / 2.15,
    zombieFaceWidth / 8,
    zombieFaceHeight / 4.5
  );
  zombieHand.drawRectangle();

  // Zombie's Leg
  strokeWeight(2);
  stroke(0, 1, 49);
  fill(82, 97, 152);

  var zombieLeg = new RectangleShape(
    zombieFaceX,
    zombieFaceY + zombieFaceHeight,
    zombieFaceWidth / 3,
    zombieFaceHeight / 2
  );
  zombieLeg.drawRectangle();

  // Zombie's shoe
  strokeWeight(2);
  stroke(46, 30, 15);
  fill(120, 86, 48);

  var zombieShoe = new CircleShape(
    zombieFaceX + zombieFaceWidth / 8,
    zombieFaceY + zombieFaceHeight * 1.5,
    zombieFaceWidth / 2,
    zombieFaceHeight / 5
  );
  zombieShoe.drawCircle();
}

/*  4.2.4 drawStrongerZombie(): draws a stronger zombie that 
    wants to eat the plants. It is drawn using circle,
    rectangle and triangle shapes.It receives a set of 
    coordinates.
*/
function drawStrongerZombie(strongerZombieFaceX, strongerZombieFaceY) {
  /* =============================
     =  Drawing zombie's model    =
     =============================
  */
  drawZombie(strongerZombieFaceX, strongerZombieFaceY);
  /* =============================
     =  Drawing zombie's helmet  =
     =============================
  */

  // Zombie's cone
  strokeWeight(2);
  stroke(101, 3, 2);
  fill(255, 102, 0);

  var zombieCone = new TriangleShape(
    strongerZombieFaceX - 2,
    strongerZombieFaceY - 5,
    strongerZombieFaceX + 3,
    strongerZombieFaceY - 20,
    strongerZombieFaceX + 8,
    strongerZombieFaceY - 5
  );
  zombieCone.drawTriangle();
}

/*  4.2.5 drawArmoredZombie(): draws an armored zombie that 
    wants to eat the plants. It is drawn using circle,
    and rectangle shapes.It receives a set of 
    coordinates.
*/
function drawArmoredZombie(armoredZombieFaceX, armoredZombieFaceY) {
  /* =============================
     =  Drawing zombie's model    =
     =============================
  */
  drawZombie(armoredZombieFaceX, armoredZombieFaceY);
  /* =============================
     =  Drawing zombie's helmet  =
     =============================
  */

  // Zombie's helmet
  strokeWeight(2);
  stroke(47, 47, 47);
  fill(204, 204, 204);

  var zombieHelmet = new RectangleShape(
    armoredZombieFaceX - armoredZombieFaceWidth / 2,
    armoredZombieFaceY - armoredZombieFaceHeight / 1.2,
    armoredZombieFaceWidth,
    armoredZombieFaceHeight / 1.5
  );
  zombieHelmet.drawRectangle();
}

/*  4.2.6 drawPea(): draws a pea leaving the
peashooter's mouth. The pea is drawn given
an (x,y) position.
*/
function drawPea(peaX, peaY) {
  /* =============================
     =        Drawing pea        =
     =============================
  */
  strokeWeight(3);
  stroke(21, 45, 9);
  fill(86, 174, 36);

  var pea = new CircleShape(peaX, peaY, peaWidth, peaHeight);
  pea.drawCircle();
}

/* 4.2.7 drawLevelFinished(): draws a sign that lets the player 
know that the level has been finished
*/
function drawLevelFinished(levelFinishedX, levelFinishedY) {
  strokeWeight(3);
  stroke(0, 0, 0);
  fill(247, 236, 200);

  var levelFinished = new RectangleShape(
    levelFinishedX,
    levelFinishedY,
    levelFinishedWidth,
    levelFinishedHeight
  );
  levelFinished.drawRectangle();

  textSize(17);
  text(
    "Ok, you win. No more eating brains for us unless you want to try again your luck... Reload this page to restart the animation. Sincerely, The Zombies.",
    160,
    210,
    230,
    150
  );
}

/* =============================
   =   4.3 USEFUL FUNCTIONS    =
   ============================= 
*/
// 4.3.1 Rectangle Shape Color Functions
/* getRectangleShapeColor(): returns the color of the
   lawn depending of the rectangle's (i,j) position
   on the 9*9 land to simulate lawn mowing 
*/
function getRectangleShapeColor(i, j) {
  if (i % 2 === 0) {
    if (j % 2 === 0) {
      return color(11, 142, 29);
    } else {
      return color(4, 124, 27);
    }
  } else {
    if (j % 2 === 0) {
      return color(10, 200, 55);
    } else {
      return color(2, 166, 32);
    }
  }
}
// 4.3.2 is Outside Lawn?
/* isOutsideLawn(): checks if the sidewalk is outside 
   of the lawn depending of the (i, j) position.
*/
function isOutsideLawn(i, j) {
  if (i === 0 || i === 6 || j === 0 || j === 9 || j === 12) {
    return true;
  } else {
    return false;
  }
}
