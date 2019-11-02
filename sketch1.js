var x = 230;
var y = 59;
//1 - jogar
//2 - regras
//3 - sair
var opcao = 1 
var telaAtiva = 1;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  switch(telaAtiva) {
    case 1:
      menu();
      break;
    case 2:
      regras();
      break;  
    case 3:
      sair();
      break; 
  }
}

function sair() {
   //R, G, B
  background('#7FDBFF');
   
  fill('white');
  stroke('black');
  strokeWeight(1);
  
  textSize(28);
  fill('black');
  
  text('saindo', 40, 55);
  window.close();
}


function regras() {
   //R, G, B
  background('#7FDBFF');
   
  fill('white');
  stroke('black');
  strokeWeight(1);
  
  textSize(28);
  fill('black');
  
  text('Aqui vao as regras', 40, 55);
}

function menu() {
  //R, G, B
  background('#000000');
   
  fill('#14283b');
  stroke('black');
  strokeWeight(1);
  rect(235, 65, 120, 55, 10);
  rect(235, 125, 130, 55, 10);
  rect(235, 185, 160, 55, 10);
  rect(235, 245, 100, 55, 10);
  
  textSize(32);
  fill('yellow');
  
  text('Jogar', 250, 100);
  text('Regras', 250, 160);
  text('Recordes', 250, 220);
  text('Sair', 250, 280);
  
  stroke('white');
  strokeWeight(3);
  point(30, 20);
  point(123, 37);
  point(456, 321);
  point(333, 05);
  point(567, 133);
  point(268, 345);
  point(115, 245);
  point(87, 132);
  point(17, 187);
  point(205, 195);
  point(532, 98);
  point(67, 376);
  point(454, 138);
  point(523, 261);
  point(176, 360);
  point(455, 50);
  point(569, 388);
  
  stroke('white');
  fill('white');
  circle(200, 200,60);// cabeca
  rect(170,230,60,50); // corpo
  rect(160,230,10,25); // braco e
  rect(230,230,10,25); // braco d
  rect(178,280,20,25); // perna e
  rect(202,280,20,25); // perna d
  stroke('orange')
  fill('orange')
  rect(160,255,10,7); // mao e
  rect(230,255,10,7); // mao d
  stroke('black');
  fill('black');
  ellipse(200, 202, 60, 40);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(4);
  rect(x, y, 130, 65);
}

function keyPressed() {
  console.log(keyCode);
  
  if(telaAtiva==2 || telaAtiva==3)
      telaAtiva=1;
  
  if (keyCode === ENTER) 
      telaAtiva=opcao;
     
  if (keyCode === DOWN_ARROW) {
    if(y<155) {
       y+=70;
       if(opcao==1)
           opcao=2;
       else 
          if(opcao==2)
             opcao=3; 
    }
    
  } else if (keyCode === UP_ARROW) {
    if(y>20) {
       y-=70;
       if(opcao==2) {
         opcao=1;
       } else { 
         if(opcao==3) {
           opcao=2;
         }
       }
    }
   
  }
  console.log("opcao: "+opcao);
  console.log("telaAtiva: "+telaAtiva);
}
