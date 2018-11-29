KeyList = [["a","d","w","s","q"],["f","h","t","g","r"],["j","l","i","k","u"]]
theta = 0;
Currentspeed = 0;
acceleration =0.1;
Maxspeed = 2;
//GravityX =
counter = 0
hitbox = 40
rocket_list = []
let DisarmList = []
totalDamage = 0;
//let bulletsGroup;

const images = { };
function preload(){
  for (const imageItem of ["EmojiOne Arrow","Apple trophy emoji","Emoji dex heart","Emoji dex rocket","Whatsapp rocket","Samsung rocket", "Emoji dex star", "Microsoft ring", "Whatsapp_radioactive", "block"]) {
    images[imageItem] = loadImage(`${imageItem}.png`);
  }
}
function drawMenu(){
blockSpacing = 1;
rocketOneLetters = [
     W = [["W","N","N","W","N","N","W"],
     ["W","N","N","W","N","N","W"],
     ["W","N","N","W","N","N","W"],
     ["W","N","N","W","N","N","W"],
     ["N","W","W","N","W","W"]],

     A = [["N","N","N","N","W","N","N"],
          ["N","N","N","W","N","W","N"],
          ["N","N","W","N","N","N","W"],
          ["N","N","W","W","W","W","W"],
          ["N","N","W","N","N","N","W"]],

      S = [["N","N","N","W","W","W","W"],
               ["N","N","W","N","N","N"],
               ["N","N","N","W","W","W"],
               ["N","N","N","N","N","N","W"],
               ["N","N","W","W","W","W"]],

      D = [["N","N","W","W","W","W"],
           ["N","N","W","N","N","N","W"],
           ["N","N","W","N","N","N","W"],
           ["N","N","W","N","N","N","W"],
           ["N","N","W","W","W","W"]],

      Q = [["N","N","N","W","W","W","N"],
          ["N","N","W","N","N","N","W"],
          ["N","N","W","N","N","N","W"],
          ["N","N","N","W","W","W","N"],
          ["N","N","N","N","N","W","W"]]]//new player controls

rocketTwoLetters = [
  T = [["W","W","W","W","W","W","W"],
  ["N","N","N","W","N","N","N"],
  ["N","N","N","W","N","N","N"],
  ["N","N","N","W","N","N","N"],
  ["N","N","N","W","N","N"]],

F = [["N","N","W","W","W","W","W"],
       ["N","N","W","N","N","N","N"],
       ["N","N","W","W","W","W","W"],
       ["N","N","W","N","N","N","N"],
       ["N","N","W","N","N","N","N"]],

       G = [["N","N","W","W","W","W","W"],
                 ["N","N","W","N","N","N","N"],
                 ["N","N","W","N","N","W","W"],
                 ["N","N","W","N","N","N","W"],
                 ["N","N","W","W","W","W"]],

   H = [["N","N","W","N","N","N","W"],
            ["N","N","W","N","N","N","W"],
            ["N","N","W","W","W","W","W"],
            ["N","N","W","N","N","N","W"],
            ["N","N","W","N","N","N","W"]],

   R = [["N","N","N","W","W","W","N"],
       ["N","N","W","N","N","N","W"],
       ["N","N","W","N","N","N","W"],
       ["N","N","W","W","W","W","N"],
       ["N","N","W","N","N","N","W"]]]

  rocketThreeLetters = [
         I = [["W","W","W","W","W","W","W"],
         ["N","N","N","W","N","N","N"],
         ["N","N","N","W","N","N","N"],
         ["N","N","N","W","N","N","N"],
         ["W","W","W","W","W","W","W"]],

       J = [["N","N","W","W","W","W","W"],
              ["N","N","N","N","N","W","N"],
              ["N","N","N","N","N","W","N"],
              ["N","N","N","N","N","W","N"],
              ["N","N","N","W","W","N","N"]],

              K = [["N","N","W","N","N","W","W"],
                        ["N","N","W","N","W","N","N"],
                        ["N","N","W","W","N","N","N"],
                        ["N","N","W","M","W","N","N"],
                        ["N","N","W","N","N","W","W"]],

          L = [["N","N","W","N","N","N","N"],
                   ["N","N","W","N","N","N","N"],
                   ["N","N","W","N","N","N","N"],
                   ["N","N","W","N","N","N","N"],
                   ["N","N","W","W","W","W","W"]],

          U = [["N","N","W","N","N","N","W"],
              ["N","N","W","N","N","N","W"],
              ["N","N","W","N","N","N","W"],
              ["N","N","W","N","N","N","W"],
              ["N","N","N","W","W","W","N"]]]

  Controls = [rocketOneLetters,rocketTwoLetters,rocketThreeLetters]
  for (blockSpacing = 0; blockSpacing < Controls.length; blockSpacing++){
    for (letterCount = 0; letterCount < Controls[blockSpacing].length; letterCount++){
      for (LetterColumn = 0; LetterColumn<Controls[blockSpacing][letterCount].length;LetterColumn++){
        for (LetterRow = 0; LetterRow < Controls[blockSpacing][letterCount][LetterColumn].length;LetterRow++){
          if (Controls[blockSpacing][letterCount][LetterColumn][LetterRow] == "W"){
            image((images["block"]),900+(30*letterCount)+(5*LetterRow),20*(10*blockSpacing+1)+(5*LetterColumn),(images["block"]).width/24,(images["block"]).height/24)
          }
        }
      }
    }
  }
image((images["block"]),850,0,(images["block"]).width/10,(images["block"]).height*10)

image((images["Emoji dex rocket"]),1080,10,(images["Emoji dex rocket"]).width/1.8,(images["Emoji dex rocket"]).height/1.8)
image((images["block"]),850,150,(images["block"]).width*3,(images["block"]).height/10)

image((images["Whatsapp rocket"]),1080,200)
image((images["block"]),850,345,(images["block"]).width*3,(images["block"]).height/10)

image((images["Samsung rocket"]),1080,400,(images["Samsung rocket"]).width/1.5,(images["Samsung rocket"]).height/1.5)
image((images["block"]),850,545,(images["block"]).width*3,(images["block"]).height/10)



for (healthBarCount = 0; healthBarCount < Math.floor(Rocket_1.healthpoint/10);healthBarCount++){
  image((images["Emoji dex heart"]),900+(healthBarCount*25),90,(images["Emoji dex heart"]).width/5,(images["Emoji dex heart"]).height/5)
}
for (healthBarCount = 0; healthBarCount < Math.floor(Rocket_2.healthpoint/10);healthBarCount++){
  image((images["Emoji dex heart"]),900+(healthBarCount*25),280,(images["Emoji dex heart"]).width/5,(images["Emoji dex heart"]).height/5)
}
for (healthBarCount = 0; healthBarCount < Math.floor(Rocket_3.healthpoint/10);healthBarCount++){
  image((images["Emoji dex heart"]),900+(healthBarCount*25),490,(images["Emoji dex heart"]).width/5,(images["Emoji dex heart"]).height/5)
}

image((images["Apple trophy emoji"]),1015,580,(images["Apple trophy emoji"]).width/3,(images["Apple trophy emoji"]).height/3)

if ((Rocket_1.score >= 100) && (Rocket_1.score > Rocket_2.score) && (Rocket_1.score > Rocket_3.score)){
  image((images["Emoji dex rocket"]),1000,650,(images["Emoji dex rocket"]).width/1.8,(images["Emoji dex rocket"]).height/1.8)
} else if ((Rocket_2.score >= 100) && (Rocket_2.score > Rocket_1.score) && (Rocket_2.score > Rocket_3.score)){
  image((images["Whatsapp rocket"]),1000,650)
} else if ((Rocket_3.score >= 100) && (Rocket_3.score > Rocket_2.score) && (Rocket_3.score > Rocket_1.score)){
  image((images["Samsung rocket"]),1000,650,(images["Samsung rocket"]).width/1.5,(images["Samsung rocket"]).height/1.5)
} else {

for (ScoreBarCount = 0; ScoreBarCount < Math.floor(Rocket_1.score/10);ScoreBarCount++){
  image((images["EmojiOne Arrow"]),950,770-(ScoreBarCount*10),(images["EmojiOne Arrow"]).width/10,(images["EmojiOne Arrow"]).height/10)
}
for (ScoreBarCount = 0; ScoreBarCount < Math.floor(Rocket_2.score/10);ScoreBarCount++){
  image((images["EmojiOne Arrow"]),1050,770-(ScoreBarCount*10),(images["EmojiOne Arrow"]).width/10,(images["EmojiOne Arrow"]).height/10)
}
for (ScoreBarCount = 0; ScoreBarCount < Math.floor(Rocket_3.score/10);ScoreBarCount++){
  image((images["EmojiOne Arrow"]),1050,770-(ScoreBarCount*10),(images["EmojiOne Arrow"]).width/10,(images["EmojiOne Arrow"]).height/10)
}
}



}
function setup() {

  Death_Radius = createSprite(400, 400, 0, 0)
  Death_Radius.addImage(images["Microsoft ring"])
  Death_Radius.scale = 3.2
  star = createSprite(400, 400, 10, 10);
  star.addImage(images["Emoji dex star"]);
  star.mass = 1000000;
  star.restitution = 0;
  star.scale = 1.2;
  star.setCollider("circle",0,0,40)

  rectMode(CENTER);
  createCanvas(1200,800);
  Rocket_1 = new Rocket()
  Rocket_2 = new Rocket()
  Rocket_3 = new Rocket()

}


class Rocket {
  constructor(){
    this.score = 0
    this.healthpoint = 100
    this.team = rocket_list.length
    rocket_list.push(this.team)
    this.name = createSprite(200*rocket_list.length,20,2,2)
    if (this.team == 0){
    this.texture = (images["Emoji dex rocket"])
    this.name.scale = 0.2
  } else if (this.team == 1){
    this.texture = (images["Whatsapp rocket"])
    this.name.scale = 0.35
  } else {
    this.texture = (images["Samsung rocket"])
    this.name.scale = 0.25

  }
  this.name.addImage(this.texture)
    this.name.setCollider("circle",0,0,hitbox)
    //this.name.debug = true
    this.name.restituion = 0
    this.name.mass = 10

    this.current_positionX = this.name.position.x
    this.current_positionY = this.name.position.x
    this.theta = 0
    this.Currentspeed = 0
    this.acceleration =0.1
    this.Maxspeed = 2;
    this.bulletsGroup = new Group();
    this.actions = {
      RotateClockwise: {
      key: KeyList[this.team][0],
      outcome: () => {

        this.theta += -3}
    },
      RotateCounter: {
      key: KeyList[this.team][1],
      outcome: () => {this.theta += 3}
    },
      Accelerate: {
      key: KeyList[this.team][2],
      outcome: () => {
        if (this.Currentspeed <= this.Maxspeed){
          this.Currentspeed += this.acceleration
        }
       }
     },
      Deccelerate: {
        key: KeyList[this.team][3],
        outcome: () => {
          //console.log("CHanging; ", this.acceleration, this.Currentspeed)
          if (this.Currentspeed >= 0.05){
            this.Currentspeed += -this.acceleration
          }
        }
      },
      Shoot: {
        key: KeyList[this.team][4],
        outcome: () => {
        if ((frameCount %30 == 0) && (this.name.removed != true)){
            this.bullet = new Bullet(this.team,this.name.position.x,this.name.position.y,this.theta,this.Currentspeed)
          }
        }
      }
    }
  }
  Behave() {
    console.log()
    for (let property in this.actions){

      if (keyDown(this.actions[property].key)){
        this.actions[property].outcome()

      }
    }
    this.position_from_sun = ((star.position.x - this.name.position.x)**2 + (star.position.y - this.name.position.y)**2)**0.5
    this.name.rotation = this.theta+45
    this.Y_Move = this.Currentspeed*sin(this.theta*PI/180)
    this.X_Move = this.Currentspeed*cos(this.theta*PI/180)
    this.name.velocity.y = this.Y_Move //+ GravityX
    this.name.velocity.x = this.X_Move //+ GravityY
    this.name.attractionPoint((20000/(this.position_from_sun**2)),star.position.x,star.position.y)

    for (var i = 0; i < DisarmList.length; i++){
        DisarmList[i].disarm()
        DisarmList[i].Maploop()
    }
    }

    Collision() {
      var _this = this

      if ((Rocket_1.bullet !== undefined) && (Rocket_1.bullet.name.removed == false) && (this.team != Rocket_1.bullet.team)){
    _this.name.collide(Rocket_1.bulletsGroup, ((rocket,bullet) =>{
    bullet.remove()
    if (this.healthpoint <= 50){
    Rocket_1.score += 20;
  } else {
    Rocket_1.score += 10;
  }
    _this.healthpoint += -50
  }));

} else if ((Rocket_2.bullet !== undefined) && (Rocket_2.bullet.name.removed == false) && (this.team != Rocket_2.bullet.team)){
    _this.name.collide(Rocket_2.bulletsGroup, ((rocket,bullet) =>{
    bullet.remove()
    if (this.healthpoint <= 50){
    Rocket_2.score += 20;
  } else {
    Rocket_2.score += 10;
  }
    _this.healthpoint += -50
  }));

} else if ((Rocket_3.bullet !== undefined) && (Rocket_3.bullet.name.removed == false) && (this.team != Rocket_3.bullet.team)){
    _this.name.collide(Rocket_3.bulletsGroup, ((rocket,bullet) => {
      bullet.remove()
      if (this.healthpoint <= 50){
      Rocket_3.score += 20;
    } else {
      Rocket_3.score += 10;
    }
      _this.healthpoint += -50
  }));

  }

  this.name.collide(star,(() =>{
    _this.healthpoint = 0
  }));
  if (this.healthpoint <= 0){

    this.Respawn()
  }
}
  Slingshot() {
    if (this.position_from_sun < 200){
      this.acceleration += 2000000000/((this.position_from_sun)**5);
      this.Maxspeed += 1500000/((this.position_from_sun)**4);
      this.healthpoint += -(5/((this.position_from_sun)))
    } else if (this.acceleration > 0.1){
      this.acceleration = 0.1;

    } else {
      this.Maxspeed = 2
    }
  }
  Respawn() {

    if (this.healthpoint != 100){
      this.Currentspeed = 0;
      this.Maxspeed = 2;
      this.respawn_positions = [[50,50],[50,500],[750,50],[750,750],[250,50],[50,250],[250,250]]
      this.respawn_selection = Math.floor(Math.random(1)*7)
      this.name.position.x = (this.respawn_positions[this.respawn_selection])[0]
      this.name.position.y = (this.respawn_positions[this.respawn_selection])[1]


    }
    this.healthpoint = 100
  }
  Maploop() {
  if (this.name.position.x < 0){
  this.name.position.x = 800
} else if (this.name.position.x > 800){
  this.name.position.x = 0
}

if (this.name.position.y < 0){
this.name.position.y = 800
} else if (this.name.position.y > 800){
this.name.position.y = 0
}

}
}
class Bullet {
  constructor(team,X,Y,theta,speed){

  this.team = team
  this.initialTime = frameCount
  this.theta = theta
  this.name = createSprite(X,Y,5,5);
  if (this.team == 0){
  Rocket_1.bulletsGroup.add(this.name);
} else if (this.team ==1){
  Rocket_2.bulletsGroup.add(this.name);
} else if (this.team ==2){
  Rocket_3.bulletsGroup.add(this.name)
  }
  DisarmList.push(this);
  //this.name.debug = true
  this.name.addImage(images["Whatsapp_radioactive"])
  this.name.setCollider('circle',0,0,30)
  this.name.velocity.y = (0.5+speed/4)*sin((this.theta)*PI/180)
  this.name.velocity.x = (0.5+speed/4)*cos((this.theta)*PI/180)
  this.name.mass = 0.05
  this.name.scale = 0.2
}
disarm(){
  this.newTime = frameCount
  if ((this.newTime - this.initialTime) > 1200){
    this.name.remove()
  }
}
  Maploop() {
  if (this.name.position.x < 0){
  this.name.position.x = 800
} else if (this.name.position.x > 800){
  this.name.position.x = 0
}

if (this.name.position.y < 0){
this.name.position.y = 800
} else if (this.name.position.y > 800){
this.name.position.y = 0
}
}
}
function Detect_Key() {
  Rocket_1.Behave()
  Rocket_2.Behave()
  Rocket_3.Behave()

}

function draw(){
  background(0,0,0);
  drawMenu()


Rocket_1.Collision()
Rocket_2.Collision()
Rocket_3.Collision()

Rocket_1.Slingshot()
Rocket_2.Slingshot()
Rocket_3.Slingshot()

Rocket_1.Maploop()
Rocket_2.Maploop()
Rocket_3.Maploop()



  Detect_Key();
  drawSprites();
}
