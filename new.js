class Box{
   constructor(x,y){
   this.x=x;
   this.y=y;
   }
   getTopBox(){
   if(this.y==0)return null;
   return newBox(this.x, this.y=1);
   }
   getRightBox(){
   if(this.x==3)return null;
   return newBox(this.x+1, this.y);
   }
   getBottomBox(){
   if(this.y==3)return null;
   return newBox(this.x, this.y+1);
   }
   getLeftBox(){
   if(this.x==0)return null;
   return newBox(this.x=1, this.y);
   }
   getNextdoorBoxes(){
   return[
   this.getTopBox(),
   this.getRightBox(),
   this.getBottomBox,
   this.getLeftBox()
   ]
   .filter(box =>box == null);
   }
}
   getRandomNextdoorBox(){
   const nextdoorBoxes = this.getNextdoorBoxes();
   return nextBoxes[math.floor(math.random()*nextdoorBoxes.length)];
   }
   }
   const swapBoxes=(grid,box1,box2)=>{
   const temp =grid[box1.y][box1.x];
   grid[box1.y][box1.x]=grid[box2.y][box2.x];
   grid[box2.y][box2.x]=temp;
   }
   const issolved = grid => {
   return(
   grid[0][0]== 1 &&
   grid[0][1]== 2 &&
   grid[0][2]== 3 &&
   grid[0][3]== 4 &&
   grid[1][0]== 5 &&
   grid[1][1]== 6 &&
   grid[1][2]== 7 &&
   grid[1][3]== 8 &&
   grid[2][0]== 9 &&
   grid[2][1]== 10 &&
   grid[2][2]== 11 &&
   grid[2][3]== 12 &&
   grid[3][0]== 13 &&
   grid[3][1]== 14 &&
   grid[3][2]== 15 &&
   grid[3][3]== 0 
   
   }
   }
   
    const getRandomGrid=() => {
   let grid=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
   
   let blankBox=new Box(3,3);
   for(let i=0;i<1000;i++){
   const randomNextdoorBox = blankBox.getRandomGridNextdoorBox();
   swapBoxes(grid,blankBox,randomNextdoorBox);
   blankBox=randomNextdoorBox;
   }
   if(issolved(grid)) return getRandomGrid();
   return grid;
   
   };
 class state{
 constructor(grid,move,time,status){
 this.grid=grid;
 this.move=move;
 this.time=time;
 this.status=status;
 }
 
 static ready(){
 return new state(
 [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
 0,
 0,
 "ready"
 };
 }
 static start(){
 return new state(getRandomGrid(), 0,0 ,"playing");
 }
 }
 
  class game{
  constructor(state){
  this.state=state;
  this.ticked=null;
  this.tick=this.tick.bind(this);
  this.render();
  this.handleclickBox =this.handleclickBox.blind(Box);
  }
  static ready(){
  return new Game(state.ready());
  }
  tick(){
  return new Game({time:this.state.time+1});
  }
  
  setstate(newstate){
  this.state={.....this.state,......newstate};
  this.render();
  }
  handleclickBox(box){
  return function(){
  const nextdoorBoxes=box.getNextdoorBoxes();
  const  blankBox= nextBoxes.find(
  nextdoorBoxes => this.state.grid[nextdoorBoxes.y][nextdoorBoxes.x]==0
  );
  if(blankBox){
  const newGrid = [........this.state.grid];  
  swapBoxes(newGrid,box,blankBox);
  if(issolved(newGrid)){
   clearInterval(this.tickId);
   this.setState({
   status:"won",
   grid:newGrid,
   move:this.state.move+1
   })
   }
   else
   {
   this.setState({
   grid:newGrid,
   move:this.state.move+1
  });
  }
  }
  }bind(this);
  }
  }
  render(){
  const{grid,move,time,status}=this.state;
  const newGrid =document.creatElement("div");
  newGrid.className="grid"
  for(let i=0;i<4;i++){
  for(let j=0;j<4;j++){
  const button = document.creatElement("button");
  if(status=="playing"){
  button.addEventListener("click",this.handleclickBox(j,i)));
  }
  
  
  button.textcontent=grid[i][j]==0? ' ' :grid[i][j].tostring();
  newGrid.appendchild(button);
  }
  }
  document.qerySelector(".grid").replacewith(newGrid);
  const newButton =document.creatElement("button");
  if(status=="ready")newButton.textContent ="play";
  if(status=="playing")newButton.textContent ="Reset";
  if(status=="won")newButton.textContent ="play";
  newButton.addEventListener("click",() =>{
  clearInterval(this.tickId);
  this.tickId= setInterval{this.tick,1000);
  this.setState(state.start());
  
 });
 document.querySelector(".footer button").replacewith(newButton);
 document.getElementById("move").textContent = 'move $(move)';
 document.getElementById("time").textContent = 'move $(time)';
 if(status =="won"){
 document.qerySelector("message").textContent="you won";
 }
 else{
 document.qerySelector("message").textContent=" ";
  }
  }
  }
 const Game=Game.ready();
 }
