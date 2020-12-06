class GameStates
{
    constructor()
    {

    }

    readState()
    {
        var games = database.ref('GameState')
        games.on("value",function(data)
        {
            state = data.val();
        })
    }

    updateState(s)
    {
        database.ref('/').update(
        {
           'GameState':s
        });
    }

    check()
    {
       if(state===0)
       {
           player = new Player();
           player.Read();
           form = new Form();
           form.display();
       }
       car1 = createSprite(50,750,50,50)
       car2 = createSprite(110,750,50,50)
       car3 = createSprite(170,750,50,50)
       car4 = createSprite(230,750,50,50)
       car1.addImage(c);
       car2.addImage(a);
       car3.addImage(r);
       car4.addImage(car);
       cars = [car1,car2,car3,car4]

    }

    gamePlay()
    {
      
      form.invisible();
        Player.fetchD();
        
       // var v= 0
        var h = 510
        var i = 0
        for(var p in everyone)
        {
          image(track,0,displayHeight*-4,displayWidth,displayHeight*10)
          cars[i].x = h
          h+=290
          cars[i].y = displayHeight - everyone[p].Distance
          if(player.index===i+1)
          {
            cars[i].shapeColor = rgb(255,46,99);
            camera.position.x = displayWidth/2
            camera.position.y = cars[i].y
          }
          i+=1
        }
        if (keyDown(UP_ARROW)  &&  player.index != null)
        {
         
         /*  d = 10
          if (form.s.mousePressed)
          {
            d = 30
          }

          else
          {
            d = 10
          } */

          player.distance = player.distance + d
          player.Personlize();
          
        }
        if (player.distance>=4900)
        {
          state = 2
        }
        drawSprites();
        if (mouseIsPressed)
        {
        console.log(mouseX);
        } 


    }

    EndGame()
    {
      console.log("player"+ player.index + " Has reached The End!")
    }
}