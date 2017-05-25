
$( document ).ready(function() {

  //Variables
  var finalNumber = Math.floor(Math.random()*100)+1;
  var userNumber=0;

  var crystal1={
    name: "crystalb",
    points: 1,
    image: $("<img>"),
  };
  var crystal2={
    name: "crystalg",
    points: 5,
    image: $("<img>"),   
  };
  var crystal3={
    name: "crystalr",
    points: 10,
    image: $("<img>"),
  };
  var crystal4={
    name: "crystalp",
    points: 25,
    image: $("<img>"),
  };  

    //Adding class to child of Crystal1, 2, 3, 4
    crystal1.image.addClass("crystalImg1");
    crystal2.image.addClass("crystalImg2");
    crystal3.image.addClass("crystalImg3");
    crystal4.image.addClass("crystalImg4");

    // Each Crystal image src link to the crystal image
    crystal1.image.attr("src", "assets/images/lscrystalb.jpg");
    crystal2.image.attr("src", "assets/images/lscrystalg.jpg");
    crystal3.image.attr("src", "assets/images/lscrystalr.jpg");
    crystal4.image.attr("src", "assets/images/lscrystalp.jpg");
    console.log(userNumber);
    console.log(crystal1.image);
    console.log(crystal1.points);
    
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(crystal1.image,crystal2.image,crystal3.image,crystal4.image);
    document.getElementById("pointsToReach").innerHTML=finalNumber;

    //On Image click events//
    $(".crystalImg1").on("click", function(){

     userNumber += crystal1.points;
     document.getElementById("second-number").innerHTML=userNumber;
     checkWin();
   });

    $(".crystalImg2").on("click", function(){

     userNumber += crystal2.points;
     document.getElementById("second-number").innerHTML=userNumber;
     checkWin();
   });

    $(".crystalImg3").on("click", function(){

     userNumber += crystal3.points;
     document.getElementById("second-number").innerHTML=userNumber;
     checkWin();
   });

    $(".crystalImg4").on("click", function(){

     userNumber += crystal4.points;
     document.getElementById("second-number").innerHTML=userNumber;
     checkWin();
   });

    function checkWin(){

      if (userNumber==finalNumber){
        alert("The Jedi have won the battle!");
        finalNumber = Math.floor(Math.random()*100)+1;
        userNumber=0;
        document.getElementById("second-number").innerHTML = userNumber;
        document.getElementById("pointsToReach").innerHTML = finalNumber;
      }

      if (userNumber>finalNumber) {
        alert("The Sith have the crystals!")
        finalNumber = Math.floor(Math.random()*100)+1; 
        userNumber=0;
        document.getElementById("second-number").innerHTML = userNumber;
        document.getElementById("pointsToReach").innerHTML = finalNumber;
      }
    }
  });

