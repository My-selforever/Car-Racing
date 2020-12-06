class Form

{
constructor()
{
  this.title = createElement('h2');
  this.input = createInput("Enter Your Username");
  this.button = createButton("Submit");
  this.Greet = createElement('h1');

  this.s = createButton("Accelerator")

  this.reset= createButton("RESET!")




}

display()
{
    this.title.html("WELCOME TO THE RACE GAME!!!")
    this.title.position(displayWidth/2,displayHeight/2);
    this.input.position(displayWidth/2,displayHeight/2-25);
    this.button.position(displayWidth/2,displayHeight/2-50);
    this.reset.position(0,50)
    this.reset.mousePressed(()=>
    {
      player.Update(0);
      game.updateState(0);
      var x = database.ref('players');
      x.remove();
    })
    this.button.mousePressed(()=>
    {
      this.input.hide();
      this.button.hide();
      this.title.hide();
      player.name  = this.input.value()
      count+=1;
      player.index = count;
      player.Update(count)
      player.Personlize();
      this.Greet.html("Welcome "+ player.name+" To This Race Game c:")
      this.Greet.position(displayWidth/2,displayHeight/2);
      this.s.position(50,500)
      this.s.mousePressed(()=>
      {
        d = 30
      })
      
      
    })
}
invisible()
{
  this.Greet.hide()
  this.input.hide();
  this.button.hide();
  this.title.hide();
}

  
}