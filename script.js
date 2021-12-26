let calculator;
let geo;
let h;
let quads;
let cubics;
let h2;
let calc;
let simul;
let opening = true;
let home;
let a;
let rXS = 0;
let cP = "black";
let cX = "black";
let b;
let c;
let W = 0;
let res;
let xs2;
let sy2;
let res2;
let simulT = false;
let def = "black";
let pTOc;
let cTOp;
let plotter;
let summer = false;
let intercept;
let rP1;
let aP1;
let rP2;
let aP2;
let rP3;
let aP3;
let rP4;
let aP4;
let numInput;
let add;
let minus;
let divide;
let multi;
let modulus;
let roots;
let expo;
let ln;
let euler;
let pi;
let phi;
let cosine;
let sinn;
let tang;
let acosine;
let asinn;
let atang;
let numInput2;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let dx;
let dx2;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  if (opening == true) {
    h = (height - 100) / 2;
    h2 = height / 2;
    calculator = createButton("Regular calculator");
    calculator.position(350, (height - 100) / 2);
    geo = createButton("Geometry");
    geo.position(525, h);
    quads = createButton("Quadratic equations");
    quads.position(650, h);
    plotter = createButton("Graph Plotter");
    plotter.position(350, h2);
    calc = createButton("Calculus");
    calc.position(525, h2);
    simul = createButton("Simultaneous equations");
    simul.position(650, h2);
  }
  calculator.mousePressed(calcu);
  plotter.mousePressed(cubic1);
  calc.mousePressed(calc1);
  geo.mousePressed(geometry);
  quads.mousePressed(quadratics);
  simul.mousePressed(simulEqn);
  dx = createSlider(-5, 5, 1, 0.1);
  dx.position(100, 560);
  dx.hide();
  dx2 = createSlider(0.1, 1, 0.5, 0.01);
  dx2.position(900, 560);
  dx2.hide();
  c1 = createInput(" ");
  c1.size(50);
  c1.position(250, 70);
  c2 = createInput(" ");
  c2.size(50);
  c2.position(350, 70);
  c3 = createInput(" ");
  c3.size(50);
  c3.position(450, 70);
  c4 = createInput(" ");
  c4.size(50);
  c4.position(550, 70);
  c5 = createInput(" ");
  c5.size(50);
  c5.position(650, 70);
  c6 = createInput(" ");
  c6.size(50);
  c6.position(750, 70);
  c1.hide();
  c2.hide();
  c3.hide();
  c4.hide();
  c5.hide();
  c6.hide();
  numInput = createInput("Input first number here");
  numInput.position(150, 100);
  numInput.size(150);
  numInput2 = createInput("Input second number here");
  numInput2.position(550, 100);
  numInput2.size(150);
  numInput2.hide();
  rp1 = createInput(" ");
  rp1.position((width - 150) / 2, 90);
  rp1.size(50);
  rp2 = createInput(" ");
  rp2.position((width - 150) / 2, 140);
  rp2.size(50);
  rp3 = createInput(" ");
  rp3.position((width - 150) / 2, 190);
  rp3.size(50);
  rp4 = createInput(" ");
  rp4.position((width - 150) / 2, 240);
  rp4.size(50);
  ap1 = createInput(" ");
  ap1.position((width + 25) / 2, 90);
  ap1.size(50);
  ap2 = createInput(" ");
  ap2.position((width + 25) / 2, 140);
  ap2.size(50);
  ap3 = createInput(" ");
  ap3.position((width + 25) / 2, 190);
  ap3.size(50);
  ap4 = createInput(" ");
  ap4.position((width + 25) / 2, 240);
  ap4.size(50);
  ap1.hide();
  ap2.hide();
  ap3.hide();
  ap4.hide();
  rp1.hide();
  rp2.hide();
  rp3.hide();
  rp4.hide();
  back = createButton("<--Back to home page");
  back.position(0, 0);
  back.mousePressed(homepg);
  a = createInput(" ");
  a.position(300, 20);
  a.size(100);
  a.hide();
  b = createInput(" ");
  b.position(475, 20);
  b.size(100);
  b.hide();
  add = createButton("+");
  add.position(350, 200);
  minus = createButton("-");
  minus.position(400, 200);
  multi = createButton("*");
  multi.position(350, 250);
  modulus = createButton("mod");
  modulus.position(400, 250);
  roots = createButton("√");
  roots.position(350, 300);
  expo = createButton("a^b");
  expo.position(400, 300);
  ln = createButton("ln");
  ln.position(350, 350);
  euler = createButton("e");
  euler.position(400, 350);
  pi = createButton("π");
  pi.position(350, 400);
  phi = createButton("φ");
  phi.position(400, 400);
  cosine = createButton("cos");
  cosine.position(350, 450);
  sinn = createButton("sin");
  sinn.position(400, 450);
  tang = createButton("tan");
  tang.position(350, 500);
  acosine = createButton("arccos");
  acosine.position(338, 500);
  asinn = createButton("arcsin");
  asinn.position(400, 500);
  atang = createButton("arctan");
  atang.position(366, 550);
  numInput.hide();
  add.hide();
  add.mousePressed(addition);
  minus.hide();
  minus.mousePressed(subtraction);
  multi.hide();
  multi.mousePressed(multipli);
  modulus.hide();
  modulus.mousePressed(modulur);
  roots.hide();
  roots.mousePressed(sqrtt);
  expo.hide();
  expo.mousePressed(powered);
  ln.hide();
  ln.mousePressed(natlog);
  euler.hide();
  euler.mousePressed(e271828);
  pi.hide();
  pi.mousePressed(pi3145);
  phi.hide();
  phi.mousePressed(goldenrat);
  cosine.hide();
  cosine.mousePressed(cossine);
  sinn.hide();
  sinn.mousePressed(oh);
  tang.hide();
  tang.mousePressed(ao);
  acosine.hide();
  acosine.mousePressed(acossine);
  asinn.hide();
  asinn.mousePressed(aoh);
  atang.hide();
  atang.mousePressed(aao);
  res = createInput(" ");
  res.position(650, 20);
  res.size(100);
  res.hide();
  xs2 = createInput(" ");
  xs2.position(300, 70);
  xs2.size(100);
  xs2.hide();
  ys2 = createInput(" ");
  ys2.position(475, 70);
  ys2.size(100);
  ys2.hide();
  res2 = createInput(" ");
  res2.position(650, 70);
  res2.size(100);
  res2.hide();
  c = createInput(" Input constant here");
  c.position(650, 20);
  c.hide();
  pTOc = createButton("1. Polar to cartesian point converter");
  pTOc.position(25, 70);
  pTOc.mousePressed(pTOcB);
  pTOc.hide();
  cTOp = createButton("2. Cartesian to polar point converter");
  cTOp.position(25, 110);
  cTOp.mousePressed(cTOpB);
  cTOp.hide();
  intercept = createInput(" ");
  intercept.position(650, 20);
  intercept.size(100);
  intercept.hide();
}
let discriminant;
let x1;
let x2;
let m;
let m2;
let cS;
let cS1;
let gx1;
let gyN = 0;
let gyD = 0;
let gy = 0;
let geom = false;
let grapher = false;
let convPC = false;
let convCP = false;
let Cvisual = false;
let summer1;
let summer2;
let yi;
let grad;
let delta = 10 ** -6;
let g = 255;
let area;
function draw() {
  area = 0;
  background("black");
  translate(width / 2, height / 2);
  Strive.scale(1, -1);
  //Strive.drawTickAxes();
  gyN = res2.value() - (xs2.value() * res.value()) / a.value();
  gyD = ys2.value() - (xs2.value() * b.value()) / a.value();
  gy = gyN / gyD;
  gx1 = res.value() / a.value() - (b.value() * gy) / a.value();
  push();
  textSize(16);
  fill(rXS, 0, 0);
  stroke(rXS, 0, 0);
  scale(1, -1);
  text("x^2", -150, -280);
  fill(cP);
  stroke(cP);
  text("+", -110, -280);
  text("+", 60, -280);
  stroke(cX);
  fill(cX);
  text("x", 30, -280);
  pop();
  if (opening == true) {
    push();
    scale(1, -1);
    stroke("white");
    fill("white");
    textSize(32);
    textFont("Roboto Mono");
    text("How can I help you today?", -170, -100);
    pop();
  }
  //quadratic eqns
  discriminant = b.value() ** 2 - 4 * a.value() * c.value();
  push();
  stroke(cP);
  fill(cP);
  textSize(16);
  scale(1, -1);
  strokeWeight(W);
  text(
    "The discriminant of this equation is:" + " " + discriminant,
    -260,
    -250
  );
  if (discriminant > 0) {
    text("Hence as discriminant>0, there are ", -260, -225);
    text("2 solutions", -260, -205);
    x1 = (-b.value() + sqrt(discriminant)) / (2 * a.value());
    x1 = round(x1, 5);
    x2 = (-b.value() - sqrt(discriminant)) / (2 * a.value());
    x2 = round(x2, 5);
    text("First solution:" + " " + x1, -260, -175);
    text("Second solution:" + " " + x2, -260, -150);
  } else if (discriminant == 0) {
    text("Hence as discriminant=0, there is", -260, -225);
    text("1 solution", -260, -205);
    x1 = (-b.value() + sqrt(discriminant)) / (2 * a.value());
    x1 = round(x1, 5);
    text("Solution:" + " " + x1, -260, -175);
  } else if (discriminant < 0) {
    text("Hence as discriminant<0, there are", -260, -225);
    text("no real solutions", -260, -205);
  }
  text("How can the solutions be derived?", 0, -225);
  text("1. Quadratic formula:", 0, -200);
  text("-b ± (√b-4ac)", 155, -205);
  push();
  textSize(6);
  text("2", 207, -215);
  pop();
  text("____________", 155, -204);
  text("2a", 190, -190);
  text("2. Completing the sqaure: https://youtu.be/McDdEw_Fb5E", 0, -170);
  text("3. Factorisation: https://youtu.be/X-djBcWVizM", 0, -140);
  pop();
  //end of quadratic eqns
  //simul eqns start
  push();
  if (simulT == true) {
    stroke("white");
    push();
    scale(1, -1);
    fill("white");
    text("1.", -280, -280);
    text("2.", -280, -230);
    //refer to line 71 for coords
    text("X", -150, -280);
    text("X", -150, -230);
    a.show();
    b.show();
    res.show();
    res2.show();
    xs2.show();
    ys2.show();
    push();
    textSize(20);
    text("+", -110, -280);
    text("+", -110, -230);
    text("=", 60, -280);
    text("=", 60, -230);
    pop();
    text("Y", 30, -280);
    text("Y", 30, -230);
    m1 = -a.value() / b.value();
    m2 = -xs2.value() / ys2.value();
    cS = res.value() / b.value();
    cS2 = res2.value() / ys2.value();
    textSize(16);
    text("Different ways to solve simulatneous equations:", -280, -160);
    text(
      "1. Substitution: https://www.youtube.com/watch?v=ZSJ32Bq9sbQ",
      -280,
      -130
    );
    text(
      "2. Elimination: https://www.youtube.com/watch?v=d6vyYvx8URw",
      -280,
      -100
    );
    text(
      "3. Intersection of graphs, you can go to the graph plotter under the geometry section",
      -280,
      -70
    );
    if (m1 == m2 && cS2 != cS) {
      textSize(16);
      text(
        "This system has no solutions as the 2 lines do not intersect",
        -280,
        -200
      );
    } else if (m1 == m2 && cS == cS2) {
      textSize(16);
      text("There are inifinitely many solutions to this system ", -280, -200);
    } else {
      textSize(16);
      text(
        "The solutions to this system is x= " + gx1 + " and y= " + gy,
        -280,
        -200
      );
    }
  }
  pop();
  //end of simul eqns
  push();
  stroke("white");
  fill("white");
  scale(1, -1);
  if (geom == true) {
    pTOc.show();
    cTOp.show();
    textSize(16);
    text("Different geometric topics:", -550, -275);
  }
  pop();

  summer1 = float(numInput.value());
  summer2 = float(numInput2.value());
  push();
  stroke("white");
  //fill("white");
  scale(1, -1);
  if (summer == true) {
    noFill();
    rect(-450, -250, 900, 530);
    //numInput.show();
    text("Begin by choosing a function:", -250, -150);
    add.show();
    if (adder == true) {
      summer2 += summer1;
      numInput.show();
      numInput2.show();
      text("+", -150, -200);
      push();
      textSize(16);
      text("=" + "     " + summer2, 150, -200);
      pop();
    }
    minus.show();
    if (subtract == true) {
      summer1 -= summer2;
      numInput.show();
      numInput2.show();
      text("-", -150, -200);
      push();
      textSize(16);
      text("=" + "     " + summer1, 150, -200);
      pop();
    }
    multi.show();
    if (multiplier == true) {
      numInput.show();
      numInput2.show();
      summer1 *= summer2;
      text("*", -150, -200);
      push();
      textSize(16);
      text("=" + "     " + summer1, 150, -200);
      pop();
    }
    modulus.show();
    if (modular == true) {
      numInput.show();
      numInput2.show();
      summer1 = summer1 % summer2;
      text("mod", -150, -200);
      push();
      textSize(16);
      text("=" + "     " + summer1, 150, -200);
      pop();
    }
    roots.show();
    if (sqroot == true) {
      numInput.hide();
      numInput2.show();
      push();
      textSize(16);
      text("Square root of", -150, -200);
      text("=" + "     " + sqrt(summer2), 150, -200);
      pop();
    }
    expo.show();
    if (powers == true) {
      numInput.show();
      numInput2.show();
      summer1 = summer1 ** summer2;
      text("to the power of", -150, -200);
      push();
      textSize(16);
      text("=" + "     " + summer1, 150, -200);
      pop();
    }
    ln.show();
    if (natlg == true) {
      numInput.hide();
      numInput2.show();
      push();
      textSize(16);
      text("Natural log of", -150, -200);
      text("=" + "     " + log(summer2), 150, -200);
      pop();
    }
    euler.show();
    if (e271 == true) {
      numInput.hide();
      numInput2.hide();
      push();
      textSize(16);
      text("Eulers number (e) ", -150, -200);
      text("=" + "     " + exp(1), 0, -200);
      pop();
    }
    pi.show();
    if (pi314 == true) {
      numInput.hide();
      numInput2.hide();
      push();
      textSize(16);
      text("Pi (π) ", -150, -200);
      text("=" + "     " + PI, -70, -200);
      pop();
    }
    phi.show();
    if (golden == true) {
      numInput.hide();
      numInput2.hide();
      push();
      textSize(16);
      text("Phi (φ) ", -150, -200);
      text("=" + "     " + (1 + sqrt(5)) / 2, -70, -200);
      pop();
    }
    cosine.show();
    if (coss == true) {
      numInput.hide();
      numInput2.show();
      push();
      textSize(16);
      text("cosine of", -150, -200);
      text("=" + "     " + cos(summer2), 150, -200);
      pop();
    }
    sinn.show();
    if (sinnn == true) {
      numInput.hide();
      numInput2.show();
      push();
      textSize(16);
      text("sine of", -150, -200);
      text("=" + "     " + sin(numInput2.value()), 150, -200);
      pop();
    }
    tang.show();
    acosine.show();
    if (acoss == true) {
      numInput.hide();
      numInput2.show();
      push();
      textSize(16);
      text("arccosine of", -150, -200);
      text("=" + "     " + acos(numInput2.value()), 150, -200);
      pop();
    }
    asinn.show();
    if (asinnn == true) {
      numInput.hide();
      numInput2.show();
      push();
      textSize(16);
      text("arcsin of", -150, -200);
      text("=" + "     " + asin(numInput2.value()), 150, -200);
      pop();
    }
    atang.show();
    if (atangent == true) {
      numInput.hide();
      numInput2.show();
      push();
      textSize(16);
      text("arctan of", -150, -200);
      text("=" + "     " + atan(numInput2.value()), 150, -200);
      pop();
    }
  }
  pop();

  push();
  stroke("white");
  fill("white");
  //scale(1, -1);
  if (grapher == true) {
    a.show();
    b.show();
    intercept.show();
    push();
    scale(1, -1);
    textSize(16);
    text("x^2   +", -145, -280);
    text("x     + ", 30, -280);
    pop();
    push();
    Strive.drawTickAxes();
    for (let i = -100; i < 400; i++) {
      push();
      Strive.scale(1, -1);
      line(i, f(i), i + 1, f(i + 1));
      pop();
    }
    pop();
  }
  push();
  stroke("white");
  fill("white");
  scale(1, -1);
  if (convPC == true) {
    line(0, -300, 0, -50);
    for (let i = 0; i < 5; i++) {
      line(-75, -250 + 50 * i, 75, -250 + 50 * i);
    }
    line(0, 0, 0, 250);
    for (let i = 0; i < 5; i++) {
      line(-75, 250 - 50 * i, 75, 250 - 50 * i);
    }
    ap1.show();
    ap2.show();
    ap3.show();
    ap4.show();
    rp1.show();
    rp2.show();
    rp3.show();
    rp4.show();
    push();
    textSize(16);
    text("Radius", -60, -253);
    text("Angle", 10, -253);
    text("Y", -40, 40);
    text("X", 40, 40);
    text(ry(rp1.value(), ap1.value()), -70, 90);
    text(ry(rp2.value(), ap2.value()), -70, 140);
    text(ry(rp3.value(), ap3.value()), -70, 190);
    text(ry(rp4.value(), ap4.value()), -70, 240);
    text(rx(rp1.value(), ap1.value()), 10, 90);
    text(rx(rp2.value(), ap2.value()), 10, 140);
    text(rx(rp3.value(), ap3.value()), 10, 190);
    text(rx(rp4.value(), ap4.value()), 10, 240);
    pop();
  }
  pop();
  push();
  stroke("white");
  fill("white");
  scale(1, -1);
  if (convCP == true) {
    line(0, -300, 0, -50);
    for (let i = 0; i < 5; i++) {
      line(-75, -250 + 50 * i, 75, -250 + 50 * i);
    }
    line(0, 0, 0, 250);
    for (let i = 0; i < 5; i++) {
      line(-75, 250 - 50 * i, 75, 250 - 50 * i);
    }
    ap1.show();
    ap2.show();
    ap3.show();
    ap4.show();
    rp1.show();
    rp2.show();
    rp3.show();
    rp4.show();
    push();
    textSize(16);
    text("Y", -60, -253);
    text("X", 10, -253);
    text("Radius", -60, 40);
    text("Angle", 20, 40);
    text(xyr(rp1.value(), ap1.value()), -70, 90);
    text(xyr(rp2.value(), ap2.value()), -70, 140);
    text(xyr(rp3.value(), ap3.value()), -70, 190);
    text(xyr(rp4.value(), ap4.value()), -70, 240);
    text(xya(rp1.value(), ap1.value()), 10, 90);
    text(xya(rp2.value(), ap2.value()), 10, 140);
    text(xya(rp3.value(), ap3.value()), 10, 190);
    text(xya(rp4.value(), ap4.value()), 10, 240);
    pop();
  }
  pop();
  push();
  stroke("white");
  fill("white");
  scale(1, -1);
  if (Cvisual == true) {
    c1.show();
    c2.show();
    c3.show();
    c4.show();
    c5.show();
    c6.show();
    dx.show();
    dx2.show();
    text("x^5 +", -245, -230);
    text("x^4 +", -145, -230);
    text("x^3 +", -45, -230);
    text("x^2 +", 55, -230);
    text("x +", 155, -230);
    text("X coord = ", -545, 255);
    text(dx.value(), -490, 255);
    text("Gradient of tangent:    " + -1 * grad, -545, 280);
    text("Distance between rectangles under curve:", 100, 260);
    text("<--Representation of differentiation", -300, 0);
    text(
      "Derivative calculator:     https://www.derivative-calculator.net/",
      -545,
      230
    );
    text("Representation of integration-->", 100, 0);
    text("Integral calculator: https://www.integral-calculator.com/", 100, 230);
    push();
    translate(-400, 50);
    scale(2, 2);
    for (let i = -5; i < 5; i++) {
      line(i, w(i), i + 1, w(i + 1));
    }
    push();
    stroke("red");
    for (let i = -10; i < 10; i++) {
      line(i, t(i), i + 1, t(i + 1));
    }
    pop();
    push();
    stroke("blue");
    line(-60, 0, 60, 0);
    line(0, -60, 0, 60);
    pop();
    pop();
    push();
    translate(400, 50);
    scale(2, 2);
    for (let i = -5; i < 5; i++) {
      line(i, w(i), i + 1, w(i + 1));
    }
    push();
    for (let i = -5; i < 5; i += dx2.value()) {
      rect(i, 0, dx2.value(), w(i));
    }
    pop();
    push();
    stroke("blue");
    line(-60, 0, 60, 0);
    line(0, -60, 0, 60);
    pop();
    pop();
  }
  pop();
}
function homepg() {
  dx2.hide();
  dx.hide();
  Cvisual = false;
  c1.hide();
  c2.hide();
  c3.hide();
  c4.hide();
  c5.hide();
  c6.hide();
  numInput2.hide();
  opening = true;
  intercept.hide();
  plotter.show();
  calculator.show();
  calc.show();
  geo.show();
  quads.show();
  simul.show();
  a.hide();
  b.hide();
  rXS = 0;
  cP = "black";
  cX = "black";
  c.hide();
  def = "black";
  res.hide();
  xs2.hide();
  ys2.hide();
  res2.hide();
  simulT = false;
  geom = false;
  cTOp.hide();
  pTOc.hide();
  summer = false;
  grapher = false;
  convPC = false;
  convCP = false;
  ap1.hide();
  ap2.hide();
  ap3.hide();
  ap4.hide();
  rp1.hide();
  rp2.hide();
  rp3.hide();
  rp4.hide();
  numInput.hide();
  add.hide();
  minus.hide();
  multi.hide();
  modulus.hide();
  roots.hide();
  expo.hide();
  ln.hide();
  euler.hide();
  pi.hide();
  phi.hide();
  cosine.hide();
  sinn.hide();
  tang.hide();
  acosine.hide();
  asinn.hide();
  atang.hide();
}
function quadratics() {
  opening = false;
  plotter.hide();
  calculator.hide();
  calc.hide();
  geo.hide();
  quads.hide();
  simul.hide();
  a.show();
  cP = "white";
  rXS = 255;
  cX = "green";
  b.show();
  c.show();
  def = "black";
}
function geometry() {
  opening = false;
  plotter.hide();
  calculator.hide();
  calc.hide();
  geo.hide();
  quads.hide();
  simul.hide();
  res.hide();
  def = "black";
  simulT = false;
  geom = true;
  summer = false;
  grapher = false;
}
function simulEqn() {
  opening = false;
  simulT = true;
  plotter.hide();
  calculator.hide();
  calc.hide();
  geo.hide();
  quads.hide();
  simul.hide();
}
function calc1() {
  Cvisual = true;
  opening = false;
  plotter.hide();
  calculator.hide();
  calc.hide();
  geo.hide();
  quads.hide();
  simul.hide();
  a.hide();
  b.hide();
  rXS = 0;
  cP = "black";
  cX = "black";
  c.hide();
  def = "black";
}
function calcu() {
  opening = false;
  plotter.hide();
  calculator.hide();
  calc.hide();
  geo.hide();
  quads.hide();
  simul.hide();
  rXS = 0;
  cP = "black";
  cX = "black";
  def = "black";
  cTOp.hide();
  pTOc.hide();
  summer = true;
}
function cubic1() {
  opening = false;
  calculator.hide();
  plotter.hide();
  calc.hide();
  geo.hide();
  quads.hide();
  simul.hide();
  rXS = 0;
  cP = "black";
  cX = "black";
  def = "black";
  summer = false;
  grapher = true;
}
let af;
let bf;
let cf;
function f(x) {
  af = a.value();
  bf = b.value();
  cf = intercept.value();
  return (af * x ** 2 + bf * x + cf) * -1;
}
function pTOcB() {
  cTOp.hide();
  pTOc.hide();
  opening = false;
  rXS = 0;
  cP = "black";
  cX = "black";
  def = "black";
  convPC = true;
}
function cTOpB() {
  cTOp.hide();
  pTOc.hide();
  opening = false;
  rXS = 0;
  cP = "black";
  cX = "black";
  def = "black";
  convCP = true;
}
function ry(r, a) {
  return round(r * sin(a), 5);
}
function rx(r, a) {
  return round(r * cos(a), 5);
}
function xyr(x, y) {
  return round(sqrt(x ** 2 + y ** 2), 5);
}
function xya(y, x) {
  return round(atan(y / x), 5);
}
let adder = false;
function addition() {
  adder = true;
  sinnn = false;
  coss = false;
  tangnet = false;
  atangent = false;
  acoss = false;
  asinnn = false;
  tangent = false;
  coss = false;
  golden = false;
  pi314 = false;
  e271 = false;
  natlg = false;
  powers = false;
  sqroot = false;
  modular = false;
  multiplier = false;
  subtract = false;
}
let subtract = false;
function subtraction() {
  subtract = true;
  sinnn = false;
  coss = false;
  tangnet = false;
  atangent = false;
  acoss = false;
  asinnn = false;
  tangent = false;
  coss = false;
  golden = false;
  pi314 = false;
  e271 = false;
  natlg = false;
  powers = false;
  sqroot = false;
  modular = false;
  multiplier = false;
  adder = false;
}
let multiplier = false;
function multipli() {
  multiplier = true;
  atangent = false;
  acoss = false;
  asinnn = false;
  sinnn = false;
  coss = false;
  tangnet = false;
  golden = false;
  pi314 = false;
  e271 = false;
  natlg = false;
  powers = false;
  sqroot = false;
  modular = false;
  subtract = false;
  adder = false;
}
let modular = false;
function modulur() {
  modular = true;
  atangent = false;
  acoss = false;
  asinnn = false;
  sinnn = false;
  coss = false;
  tangnet = false;
  golden = false;
  pi314 = false;
  e271 = false;
  natlg = false;
  powers = false;
  sqroot = false;
  multiplier = false;
  subtract = false;
  adder = false;
}
let sqroot = false;
function sqrtt() {
  sqroot = true;
  atangent = false;
  acoss = false;
  asinnn = false;
  sinnn = false;
  tangent = false;
  coss = false;
  golden = false;
  pi314 = false;
  e271 = false;
  natlg = false;
  powers = false;
  modular = false;
  multiplier = false;
  subtract = false;
  adder = false;
}
let powers = false;
function powered() {
  powers = true;
  atangent = false;
  acoss = false;
  asinnn = false;
  sinnn = false;
  tangent = false;
  coss = false;
  golden = false;
  pi314 = false;
  e271 = false;
  natlg = false;
  sqroot = false;
  modular = false;
  multiplier = false;
  subtract = false;
  adder = false;
}
let natlg = false;
function natlog() {
  natlg = true;
  atangent = false;
  acoss = false;
  asinnn = false;
  sinnn = false;
  tangent = false;
  coss = false;
  golden = false;
  pi314 = false;
  powers = false;
  e271 = false;
  sqroot = false;
  modular = false;
  multiplier = false;
  subtract = false;
  adder = false;
}
let e271 = false;
function e271828() {
  e271 = true;
  numInput.hide();
  atangent = false;
  acoss = false;
  asinnn = false;
  sinnn = false;
  tangent = false;
  coss = false;
  golden = false;
  pi314 = false;
  natlg = false;
  powers = false;
  sqroot = false;
  modular = false;
  multiplier = false;
  subtract = false;
  adder = false;
}
let pi314 = false;
function pi3145() {
  pi314 = true;
  numInput.hide();
  atangent = false;
  acoss = false;
  asinnn = false;
  sinnn = false;
  tangent = false;
  coss = false;
  golden = false;
  e271 = false;
  natlg = false;
  powers = false;
  sqroot = false;
  modular = false;
  multiplier = false;
  subtract = false;
  adder = false;
}
let golden = false;
function goldenrat() {
  golden = true;
  numInput.hide();
  atangent = false;
  acoss = false;
  asinnn = false;
  sinnn = false;
  tangent = false;
  coss = false;
  pi314 = false;
  e271 = false;
  natlg = false;
  powers = false;
  sqroot = false;
  modular = false;
  multiplier = false;
  subtract = false;
  adder = false;
}
let coss = false;
function cossine() {
  coss = true;
  numInput.hide();
  sinnn = false;
  atangent = false;
  asinnn = false;
  tangent = false;
  golden = false;
  pi314 = false;
  e271 = false;
  natlg = false;
  powers = false;
  sqroot = false;
  modular = false;
  multiplier = false;
  subtract = false;
  adder = false;
}
let sinnn = false;
function oh() {
  sinnn = true;
  numInput.hide();
  coss = false;
  tangent = false;
  atangent = false;
  acoss = false;
  asinnn = false;
  golden = false;
  pi314 = false;
  e271 = false;
  natlg = false;
  powers = false;
  sqroot = false;
  modular = false;
  multiplier = false;
  subtract = false;
  adder = false;
}
let tangent = false;
function ao() {
  tangent = true;
  numInput.hide();
  atangent = true;
  acoss = false;
  asinnn = false;
  sinnn = false;
  coss = false;
  golden = false;
  pi314 = false;
  e271 = false;
  natlg = false;
  powers = false;
  sqroot = false;
  modular = false;
  multiplier = false;
  subtract = false;
  adder = false;
}
let acoss = false;
function acossine() {
  acoss = true;
  numInput.hide();
  atangent = false;
  asinnn = false;
  tangent = false;
  sinnn = false;
  coss = false;
  tangent = false;
  golden = false;
  pi314 = false;
  e271 = false;
  natlg = false;
  powers = false;
  sqroot = false;
  modular = false;
  multiplier = false;
  subtract = false;
  adder = false;
}
let asinnn = false;
function aoh() {
  asinnn = true;
  numInput.hide();
  atangent = false;
  acoss = false;
  tangent = false;
  sinnn = false;
  coss = false;
  golden = false;
  pi314 = false;
  e271 = false;
  natlg = false;
  powers = false;
  sqroot = false;
  modular = false;
  multiplier = false;
  subtract = false;
  adder = false;
}
let atangent = false;
function aao() {
  numInput.hide();
  atangent = true;
  asinnn = false;
  acoss = false;
  tangent = false;
  sinnn = false;
  coss = false;
  golden = false;
  pi314 = false;
  e271 = false;
  natlg = false;
  powers = false;
  sqroot = false;
  modular = false;
  multiplier = false;
  subtract = false;
  adder = false;
}
function w(x) {
  return (
    -1 *
    (c1.value() * x ** 5 +
      c2.value() * x ** 4 +
      c3.value() * x ** 3 +
      c4.value() * x ** 2 +
      c5.value() * x +
      c6.value())
  );
}
function t(x) {
  grad = (w(delta + dx.value()) - w(dx.value())) / delta;
  yi = -grad * dx.value() + w(dx.value());
  return grad * x + yi;
}