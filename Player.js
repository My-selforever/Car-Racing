class Player
{
    constructor()
    {
      this.name = null
      this.distance = 0 
      this.index = null
    } 

 Read()
  {
    var PC = database.ref('PlayerC')
    PC.on("value",function(data)
    {
        count = data.val();
    })
  }

 Update(c)
  {
    database.ref('/').update(
        {
           'PlayerC':c
        });
  }

 Personlize()
  {
      var members = 
      "players/player"+this.index
    database.ref(members).set(
        {
           'Name':this.name,
            'Distance':this.distance
        });    
  }

    static fetchD()
     {
    var PC = database.ref('players');
    PC.on("value",(data)=>
    {
        everyone = data.val();
        
    })
     }

  }

 /* 
function Read(d)
{
   p = d.val()
   console.log(p)
   ball.x = p.X;
   ball.y = p.Y;
} */