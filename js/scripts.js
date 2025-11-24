let burgerBtn = document.querySelector("#burger-btn");
let mainMenu = document.querySelector("#main-menu");

let canSeeMenu = false;

burgerBtn.addEventListener("click", () => {
    console.log(canSeeMenu);

    if(!canSeeMenu){
        mainMenu.classList.add("show-menu");
        canSeeMenu = true;
    }else{
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
    }
})

mainMenu.addEventListener("click", () => {
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
})


//Animate on scroll
//figure out different animations/keyframes

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            // Optional: Remove 'in-view' class if you want animation to re-trigger on scroll back up
            entry.target.classList.remove('in-view');
        }
    });
});


//Duplicate this block for other animation types? Add to this block?
document.querySelectorAll('.blogcontainer2').forEach(element => {
    observer.observe(element);
});


const input1 = document.getElementById("myInput");
const input2 = document.getElementById("myInput2");
const input3 = document.getElementById("myInput3");





function calculateGains() {

  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;

  const num1 = parseFloat(value1);
  const num2 = parseFloat(value2);
  const num3 = parseFloat(value3);


  document.getElementById("demo").innerHTML = "$"+Math.round(((num1*(num3/num2)-num1.toFixed(2))*100)/100).toFixed(2);
  
}

var inbend1="Db" 

var inbend21="F" 
var inbend22="Gb" 

var inbend31="Ab" 
var inbend32="A" 
var inbend33="Bb" 

var inbend41="Db"



var inbend61="Ab"
var inbend71="Db*"

var inbend91="Ab*"
var inbend101="Db*"

var outbend1="Eb*"


var outbend41="Eb*"
var outbend51="Gb*"
var outbend61="Bb*"

var outbend81="Eb"
var outbend91="Gb"
var outbend101="B"
var outbend102="Bb"



function getPosition()
{

    var ex = document.getElementById('key');
    var str1= ex.options[ex.selectedIndex].value;
    var dropid = [ex.selectedIndex];

    if(dropid==0)
    {
        pos1="A Major"
        pos2="E Mixolydian"
        pos3="Bm Dorian"
        notes="A B C D E F G"
        outnotes="A Db E A Db E A Db E A"
        innotes="B E Ab B D F# Ab B D F#"
        out1="A"
        out2="Db"
        out3="E"
        out4="A"
        out5="Db"
        out6="E"
        out7="A"
        out8="Db"
        out9="E"
        out10="A"
        in1="B"
        in2="E"
        in3="Ab"
        in4="B"
        in5="D"
        in6="F#"
        in7="Ab"
        in8="B"
        in9="D"
        in10="F#"

        inbend1="A#" 
        inbend21="D#" 
        inbend22="D" 
        inbend31="G" 
        inbend32="F#" 
        inbend33="F" 
        inbend41="A#"
        inbend61="F"
        inbend71="C#*"
        inbend91="F*"
        inbend101="C#*"

        outbend1="C*"
        outbend41="C*"
        outbend51="D#*"
        outbend61="G*"
        outbend81="C"
        outbend91="D#"
        outbend101="G#"
        outbend102="G"


    }
    else if(dropid==1)
    {
        pos1="Bb Major"
        pos2="F Mixolydian"
        pos3="Cm Dorian"
        notes="A B C D E F G"
        outnotes="Bb D F Bb D F Bb D F Bb"
        innotes="C F A C Eb G A C Eb G"
        out1="Bb"
        out2="D"
        out3="F"
        out4="Bb"
        out5="D"
        out6="F"
        out7="Bb"
        out8="D"
        out9="F"
        out10="Bb"
        in1="C"
        in2="F"
        in3="A"
        in4="C"
        in5="Eb"
        in6="G"
        in7="A"
        in8="C"
        in9="Eb"
        in10="G"

        inbend1="B" 
        inbend21="E" 
        inbend22="Eb" 
        inbend31="Ab" 
        inbend32="G" 
        inbend33="Gb" 
        inbend41="B"
        inbend61="Gb"
        inbend71="B*"
        inbend91="Gb*"
        inbend101="B*"

        outbend1="Db*"
        outbend41="Db*"
        outbend51="E*"
        outbend61="Ab*"
        outbend81="Db"
        outbend91="E"
        outbend101="A"
        outbend102="Ab"

    }
    else if(dropid==2)
    {
        pos1="B Major"
        pos2="F# Mixolydian"
        pos3="C#m Dorian"
        notes="A B C D E F G"
        outnotes="B Eb F# B Eb F# B Eb F# B"
        innotes="Db F# Bb Db E Ab Bb Db E Ab"
        out1="B"
        out2="Eb"
        out3="F#"
        out4="B"
        out5="Eb"
        out6="F#"
        out7="B"
        out8="Eb"
        out9="F#"
        out10="B"
        in1="Db"
        in2="F#"
        in3="Bb"
        in4="Db"
        in5="E"
        in6="Ab"
        in7="Bb"
        in8="Db"
        in9="E"
        in10="Ab"

        inbend1="C" 
        inbend21="F" 
        inbend22="E" 
        inbend31="A" 
        inbend32="G#" 
        inbend33="G" 
        inbend41="C"
        inbend61="G"
        inbend71="C*"
        inbend91="G*"
        inbend101="C*"

        outbend1="D*"
        outbend41="D*"
        outbend51="F*"
        outbend61="A*"
        outbend81="D"
        outbend91="F"
        outbend101="A"
        outbend102="A#"

    }
    else if(dropid==3)
    {
        pos1="C Major"
        pos2="G Mixolydian"
        pos3="Dm Dorian"
        notes="A B C D E F G"
        outnotes="C E G C E G C E G C"
        innotes="D G B D F A B D F A"
        out1="C"
        popout1="Eb* Overblow"
        out2="E"
        out3="G"
        out4="C"
        popout4="Eb* Overblow"
        out5="E"
        popout5="Gb* Overblow"
        out6="G"
        popout6="Bb* Overblow"
        out7="C"
        out8="E"
        popout8="Eb Bend"
        out9="G"
        popout9="Gb Bend"
        out10="C"
        popout10="Bb/B Bends"
        in1="D"
        in2="G"
        in3="B"
        in4="D"
        in5="F"
        in6="A"
        in7="B"
        in8="D"
        in9="F"
        in10="A"

        inbend1="Db" 
        inbend21="Gb" 
        inbend22="F" 
        inbend31="Bb" 
        inbend32="A" 
        inbend33="Ab" 
        inbend41="Db"
        inbend61="Ab"
        inbend71="Db*"
        inbend91="Ab*"
        inbend101="Db*"

        outbend1="Eb*"
        outbend41="Eb*"
        outbend51="Gb*"
        outbend61="Bb*"
        outbend81="Eb"
        outbend91="Gb"
        outbend101="Bb"
        outbend102="B"
        

    }
    else if(dropid==4)
    {
        pos1="Db Major"
        pos2="Ab Mixolydian"
        pos3="Ebm Dorian"
        notes="A B C D E F G"
        outnotes="Db F Ab Db F Ab Db F Ab Db"
        innotes="Eb Ab C Eb F# Bb C Eb F# Bb"
        out1="Db"
        out2="F"
        out3="Ab"
        out4="Db"
        out5="F"
        out6="Ab"
        out7="Db"
        out8="F"
        out9="Ab"
        out10="Db"
        in1="Eb"
        in2="Ab"
        in3="C"
        in4="Eb"
        in5="F#"
        in6="Bb"
        in7="C"
        in8="Eb"
        in9="F#"
        in10="Bb"

        inbend1="D" 
        inbend21="G" 
        inbend22="Gb" 
        inbend31="B" 
        inbend32="Bb" 
        inbend33="A" 
        inbend41="D"
        inbend61="A"
        inbend71="D*"
        inbend91="A*"
        inbend101="D*"

        outbend1="E*"
        outbend41="E*"
        outbend51="G*"
        outbend61="B*"
        outbend81="E"
        outbend91="G"
        outbend101="C"
        outbend102="B"

    }
    else if(dropid==5)
    {
        pos1="D Major"
        pos2="A Mixolydian"
        pos3="Em Dorian"
        notes="A B C D E F G"
        outnotes="D F# A D F# A D F# A D"
        innotes="E A Db E G B Db E G B"
        out1="D"
        out2="F#"
        out3="A"
        out4="D"
        out5="F#"
        out6="A"
        out7="D"
        out8="F#"
        out9="A"
        out10="D"
        in1="E"
        in2="A"
        in3="Db"
        in4="E"
        in5="G"
        in6="B"
        in7="Db"
        in8="E"
        in9="G"
        in10="B"

        inbend1="D#" 
        inbend21="G#" 
        inbend22="G" 
        inbend31="C" 
        inbend32="B" 
        inbend33="A#" 
        inbend41="D#"
        inbend61="A#"
        inbend71="D#*"
        inbend91="A#*"
        inbend101="D#*"

        outbend1="F*"
        outbend41="F*"
        outbend51="G#*"
        outbend61="C*"
        outbend81="F"
        outbend91="G#"
        outbend101="C#"
        outbend102="C"

    }
    else if(dropid==6)
    {
        pos1="Eb Major"
        pos2="Bb Mixolydian"
        pos3="F Dorian"
        notes="A B C D E F G"
        outnotes="Eb G Bb Eb G Bb Eb G Bb Eb"
        innotes="F Bb D F Ab C D F Ab C"
        out1="Eb"
        out2="G"
        out3="Bb"
        out4="Eb"
        out5="G"
        out6="Bb"
        out7="Eb"
        out8="G"
        out9="Bb"
        out10="Eb"
        in1="F"
        in2="Bb"
        in3="D"
        in4="F"
        in5="Ab"
        in6="C"
        in7="D"
        in8="F"
        in9="Ab"
        in10="C"

        inbend1="E" 
        inbend21="A" 
        inbend22="Ab" 
        inbend31="Db" 
        inbend32="C" 
        inbend33="B" 
        inbend41="E"
        inbend61="B"
        inbend71="E*"
        inbend91="B*"
        inbend101="E*"

        outbend1="Gb*"
        outbend41="Gb*"
        outbend51="A*"
        outbend61="Db*"
        outbend81="Gb"
        outbend91="A"
        outbend101="D"
        outbend102="Db"

    }
    else if(dropid==7)
    {
        pos1="E Major"
        pos2="B Mixolydian"
        pos3="F#m Dorian"
        notes="A B C D E F G"
        outnotes="E A B E A B E A B E"
        innotes="F# B Eb F# A Db Eb F# A Db"
        out1="E"
        out2="A"
        out3="B"
        out4="E"
        out5="A"
        out6="B"
        out7="E"
        out8="A"
        out9="B"
        out10="E"
        in1="F#"
        in2="B"
        in3="Eb"
        in4="F#"
        in5="A"
        in6="Db"
        in7="Eb"
        in8="F#"
        in9="A"
        in10="Db"

        inbend1="F" 
        inbend21="A#" 
        inbend22="A" 
        inbend31="D" 
        inbend32="C#" 
        inbend33="C" 
        inbend41="F"
        inbend61="C"
        inbend71="F*"
        inbend91="C*"
        inbend101="F*"

        outbend1="G*"
        outbend41="G*"
        outbend51="A#*"
        outbend61="D*"
        outbend81="G"
        outbend91="A#"
        outbend101="D#"
        outbend102="D"

    }
    else if(dropid==8)
    {
        pos1="F Major"
        pos2="C Mixolydian"
        pos3="Gm Dorian"
        notes="A B C D E F G"
        outnotes="F A C F A C F A C F"
        innotes="G C E G Bb D E G Bb D"
        out1="F"
        out2="A"
        out3="C"
        out4="F"
        out5="A"
        out6="C"
        out7="F"
        out8="A"
        out9="C"
        out10="F"
        in1="G"
        in2="C"
        in3="E"
        in4="G"
        in5="Bb"
        in6="D"
        in7="E"
        in8="G"
        in9="Bb"
        in10="D"

        inbend1="Gb" 
        inbend21="B" 
        inbend22="Bb" 
        inbend31="Eb" 
        inbend32="D" 
        inbend33="Db" 
        inbend41="Gb"
        inbend61="Db"
        inbend71="Gb*"
        inbend91="Db*"
        inbend101="Gb*"

        outbend1="Ab*"
        outbend41="Ab*"
        outbend51="B*"
        outbend61="Eb*"
        outbend81="Ab"
        outbend91="B"
        outbend101="E"
        outbend102="Eb"

    }
    else if(dropid==9)
    {
        pos1="Gb Major"
        pos2="C# Mixolydian"
        pos3="G#m Dorian"
        notes="A B C D E F G"
        outnotes="F# Bb Db F# Bb Db F# Bb Db F#"
        innotes="Ab Db D Ab B Eb F Ab B Eb"
        out1="F#"
        out2="Bb"
        out3="Db"
        out4="F#"
        out5="Bb"
        out6="Db"
        out7="F#"
        out8="Bb"
        out9="Db"
        out10="F#"
        in1="Ab"
        in2="Db"
        in3="D"
        in4="Ab"
        in5="B"
        in6="Eb"
        in7="F"
        in8="Ab"
        in9="B"
        in10="Eb"

        inbend1="G" 
        inbend21="C" 
        inbend22="B" 
        inbend31="E" 
        inbend32="D#" 
        inbend33="D" 
        inbend41="G"
        inbend61="D"
        inbend71="G*"
        inbend91="D*"
        inbend101="G*"

        outbend1="A*"
        outbend41="A*"
        outbend51="C*"
        outbend61="E*"
        outbend81="A"
        outbend91="C"
        outbend101="F"
        outbend102="E"

    }
    else if(dropid==10)
    {
        pos1="G Major"
        pos2="D Mixolydian"
        pos3="Am Dorian"
        notes="A B C D E F G"
        outnotes="G B D G B D G B D G"
        innotes="A D F# A C E F# A C E"
        out1="G"
        out2="B"
        out3="D"
        out4="G"
        out5="B"
        out6="D"
        out7="G"
        out8="B"
        out9="D"
        out10="G"
        in1="A"
        in2="D"
        in3="F#"
        in4="A"
        in5="C"
        in6="E"
        in7="F#"
        in8="A"
        in9="C"
        in10="E"

        inbend1="G#" 
        inbend21="C#" 
        inbend22="C" 
        inbend31="F" 
        inbend32="E" 
        inbend33="D#" 
        inbend41="G#"
        inbend61="D#"
        inbend71="G#*"
        inbend91="D#*"
        inbend101="G#*"

        outbend1="A#*"
        outbend41="A#*"
        outbend51="C#*"
        outbend61="F*"
        outbend81="A#"
        outbend91="C#"
        outbend101="F#"
        outbend102="F"

    }
    else if(dropid==11)
    {
        pos1="Ab Major"
        pos2="Eb Mixolydian"
        pos3="Bbm Dorian"
        notes="A B C D E F G"
        outnotes="Ab C Eb Ab C Eb Ab C Eb Ab"
        innotes="Bb Eb G Bb Db F G Bb Db F"
        out1="Ab"
        out2="C"
        out3="Eb"
        out4="Ab"
        out5="C"
        out6="Eb"
        out7="Ab"
        out8="C"
        out9="Eb"
        out10="Ab"
        in1="Bb"
        in2="Eb"
        in3="G"
        in4="Bb"
        in5="Db"
        in6="F"
        in7="G"
        in8="Bb"
        in9="Db"
        in10="F"


        inbend1="A" 
        inbend21="D" 
        inbend22="Db" 
        inbend31="Gb" 
        inbend32="F" 
        inbend33="E" 
        inbend41="A"
        inbend61="E"
        inbend71="A*"
        inbend91="E*"
        inbend101="A*"

        outbend1="B*"
        outbend41="B*"
        outbend51="D*"
        outbend61="Gb*"
        outbend81="B"
        outbend91="D"
        outbend101="G"
        outbend102="Gb"
    }
    




    

    document.getElementById("first").innerHTML = "First Position: "+pos1;
    document.getElementById("second").innerHTML = "Second Position: "+pos2;
    document.getElementById("third").innerHTML = "Third Position: "+pos3;

 
  

    document.getElementById("out1").innerHTML = out1;
    document.getElementById("in1").innerHTML = in1;
    document.getElementById("out2").innerHTML = out2;
    document.getElementById("in2").innerHTML = in2;
    document.getElementById("out3").innerHTML = out3;
    document.getElementById("in3").innerHTML = in3;
    document.getElementById("out4").innerHTML = out4;
    document.getElementById("in4").innerHTML = in4;
    document.getElementById("out5").innerHTML = out5;

    document.getElementById("in5").innerHTML = in5;
    document.getElementById("out6").innerHTML = out6;

    document.getElementById("in6").innerHTML = in6;
    document.getElementById("out7").innerHTML = out7;
    document.getElementById("in7").innerHTML = in7;
    document.getElementById("out8").innerHTML = out8;

    document.getElementById("in8").innerHTML = in8;
    document.getElementById("out9").innerHTML = out9;

    document.getElementById("in9").innerHTML = in9;
    document.getElementById("out10").innerHTML = out10;

    document.getElementById("in10").innerHTML = in10;





}

var tog1=1;
var tog2=1;
var tog3=1;
var tog4=1;
var tog5=1;
var tog6=1;
var tog7=1;
var tog8=1;
var tog9=1;
var tog10=1;

var tog10=1;
var tog11=1;
var tog12=1;
var tog13=1;
var tog14=1;
var tog15=1;
var tog16=1;
var tog17=1;
var tog18=1;
var tog19=1;
var tog20=1;




function togglePopupin1() 
{    
    if(tog1==0)
    {
        document.getElementById("1x1").innerHTML = "";
        

        
        tog1=1;
    }
    else
    {
        document.getElementById("1x1").innerHTML = inbend1;
        
        
        tog1=0;
    }
}

function togglePopupin2() 
{
    if(tog2==0)
    {
        
        document.getElementById("1x2").innerHTML = "";
       
        document.getElementById("2x2").innerHTML = "";
        

   
        tog2=1;
    }
    else
    {
       
        document.getElementById("1x2").innerHTML = inbend21;
       

        document.getElementById("2x2").innerHTML = inbend22;
        

       
        tog2=0;
    }
}

function togglePopupin3() 
{
    if(tog3==0)
    {
        
        document.getElementById("1x3").innerHTML = "";
       
        document.getElementById("2x3").innerHTML = "";
        document.getElementById("3x3").innerHTML = "";

       
        tog3=1;
    }
    else
    {
        
        document.getElementById("1x3").innerHTML = inbend31;
       

       
        document.getElementById("2x3").innerHTML = inbend32;
        document.getElementById("3x3").innerHTML = inbend33;

       
        tog3=0;
    }
}
function togglePopupin4() {
    if(tog4==0)
    {
        
        document.getElementById("1x4").innerHTML = "";
       
       
       
        tog4=1;
    }
    else
    {
       
        document.getElementById("1x4").innerHTML = inbend41;
        
       
        tog4=0;
    }
  }

function togglePopupin5() {
    if(tog5==0)
    {
        
        

       
        
        tog5=1;
    }
    else
    {
        
        
        tog5=0;
    }
  }
function togglePopupin6() {
    if(tog6==0)
    {
        
        document.getElementById("1x6").innerHTML = "";
        

        
        
        tog6=1;
    }
    else
    {
        
        document.getElementById("1x6").innerHTML = inbend61;
        
        
        tog6=0;
    }
  }
function togglePopupin7() {
    if(tog7==0)
    {
        
        document.getElementById("1x7").innerHTML = "";
        

        
       
        tog7=1;
    }
    else
    {
       
        document.getElementById("1x7").innerHTML = inbend71;
       
        tog7=0;
    }
  }
function togglePopupin8() {
    if(tog8==0)
    {
        
        
        
        tog8=1;
    }
    else
    {
        
        
        tog8=0;
    }
  }
function togglePopupin9() {
    if(tog9==0)
    {
       
        document.getElementById("1x9").innerHTML = "";
        
        
        tog9=1;
    }
    else
    {
       
        document.getElementById("1x9").innerHTML = inbend91;
       
       
        tog9=0;
    }
  }
function togglePopupin10() {
    if(tog10==0)
    {
       
        document.getElementById("1x10").innerHTML = "";
       
        
        tog10=1;
    }
    else
    {
       
        document.getElementById("1x10").innerHTML = inbend101;

    
        tog10=0;
    }
  }
function togglePopupout1() {
    if(tog11==0)
    {


        document.getElementById("ox1").innerHTML = "";
  
        tog11=1;
    }
    else
    {
     

        document.getElementById("ox1").innerHTML = outbend1;
        
        tog11=0;
    }
  }
function togglePopupout2() {
    if(tog12==0)
    {
        
        
        document.getElementById("ox2").innerHTML = "";
        
        tog12=1;
    }
    else
    {
        
        tog12=0;
    }
    }
function togglePopupout3() {
    if(tog13==0)
    {
        
        
        document.getElementById("ox3").innerHTML = "";
       
        tog13=1;
    }
    else
    {
        
        tog13=0;
    }
    }
function togglePopupout4() {
    if(tog14==0)
    {
        
        document.getElementById("ox4").innerHTML = "";
        
        tog14=1;
    }
    else
    {
        
        document.getElementById("ox4").innerHTML = outbend41;
       
        tog14=0;
    }
    }
function togglePopupout5() {
    if(tog15==0)
    {
        
        document.getElementById("ox5").innerHTML = "";
        
        tog15=1;
    }
    else
    {
        
        document.getElementById("ox5").innerHTML = outbend51;
        
        tog15=0;
    }
    }
function togglePopupout6() {
    if(tog16==0)
    {
        
        document.getElementById("ox6").innerHTML = "";
        
        tog16=1;
    }
    else
    {
        
        document.getElementById("ox6").innerHTML = outbend61;
       
        tog16=0;
    }
    }
function togglePopupout7() {
    if(tog17==0)
    {
        
        document.getElementById("ox7").innerHTML = "";
        
        tog17=1;
    }
    else
    {
        
        tog17=0;
    }
    }
function togglePopupout8() {
    if(tog18==0)
    {
        
        document.getElementById("ox8").innerHTML = "";
        
        tog18=1;
    }
    else
    {
        
        document.getElementById("ox8").innerHTML = outbend81;
        
        tog18=0;
    }
    }
function togglePopupout9() {
    if(tog19==0)
    {
        
        document.getElementById("ox9").innerHTML = "";
        
        tog19=1;
    }
    else
    {
        
        document.getElementById("ox9").innerHTML = outbend91;
        
        tog19=0;
    }
    }
    
function togglePopupout10() 
{
    if(tog20==0)
    {
        
        document.getElementById("ox10").innerHTML = "";
        document.getElementById("o2x10").innerHTML = "";
        tog20=1;
    }
    else
    {
        
        document.getElementById("ox10").innerHTML = outbend101;
        document.getElementById("o2x10").innerHTML = outbend102;
        tog20=0;
    }
      }








