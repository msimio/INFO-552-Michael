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


var popin1 = "works0"
var popin2 = "works00"
var popin3 = "works000"
var popin4 = "works0000"
var popin5 = "works00000"
var popin6 = "works00000"
var popin7 = "works0000"
var popin8 = "works000"
var popin9 = "works00"
var popin10 = "works0"

var popout1 = "works0"
var popout2 = "works00"
var popout3 = "works000"
var popout4 = "works0000"
var popout5 = "works00000"
var popout6 = "works00000"
var popout7 = "works0000"
var popout8 = "works000"
var popout9 = "works00"
var popout10 = "works0"

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
    }
    




    

    document.getElementById("first").innerHTML = "First Position: "+pos1;
    document.getElementById("second").innerHTML = "Second Position: "+pos2;
    document.getElementById("third").innerHTML = "Third Position: "+pos3;

 
  

    document.getElementById("out1").innerHTML = out1;
    document.getElementById("in1").innerHTML = in1;
    document.getElementById("myPopupout1").innerHTML = "popout1";
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


function togglePopupin1() 
{
  var popup = document.getElementById("myPopupin1");
  popup.innerHTML=popin1
  popup.classList.toggle("show"); // Toggles the 'show' class
}
function togglePopupin2() 
{
    var popup = document.getElementById("myPopupin2");
    popup.innerHTML=popin2
    popup.classList.toggle("show"); // Toggles the 'show' class
}

function togglePopupin3() 
{
    var popup = document.getElementById("myPopupin3");
    popup.innerHTML=popin3
    popup.classList.toggle("show"); // Toggles the 'show' class
}
function togglePopupin4() {
    var popup = document.getElementById("myPopupin4");
    popup.innerHTML=popin4
    popup.classList.toggle("show"); // Toggles the 'show' class
  }

function togglePopupin5() {
    var popup = document.getElementById("myPopupin5");
    popup.innerHTML=popin5
    popup.classList.toggle("show"); // Toggles the 'show' class
  }
function togglePopupin6() {
    var popup = document.getElementById("myPopupin6");
    popup.innerHTML=popin6
    popup.classList.toggle("show"); // Toggles the 'show' class
  }
function togglePopupin7() {
    var popup = document.getElementById("myPopupin7");
    popup.innerHTML=popin7
    popup.classList.toggle("show"); // Toggles the 'show' class
  }
function togglePopupin8() {
    var popup = document.getElementById("myPopupin8");
    popup.innerHTML=popin8
    popup.classList.toggle("show"); // Toggles the 'show' class
  }
function togglePopupin9() {
    var popup = document.getElementById("myPopupin9");
    popup.innerHTML=popin9
    popup.classList.toggle("show"); // Toggles the 'show' class
  }
function togglePopupin10() {
    var popup = document.getElementById("myPopupin10");
    popup.innerHTML=popin10
    popup.classList.toggle("show"); // Toggles the 'show' class
  }
function togglePopupout1() {
    var popup = document.getElementById("myPopupout1");
    popup.innerHTML=popout1
    popup.classList.toggle("show"); // Toggles the 'show' class
  }
function togglePopupout2() {
      var popup = document.getElementById("myPopupout2");
      popup.innerHTML=popout2
      popup.classList.toggle("show"); // Toggles the 'show' class
    }
function togglePopupout3() {
      var popup = document.getElementById("myPopupout3");
      popup.innerHTML=popout3
      popup.classList.toggle("show"); // Toggles the 'show' class
    }
function togglePopupout4() {
      var popup = document.getElementById("myPopupout4");
      popup.innerHTML=popout4
      popup.classList.toggle("show"); // Toggles the 'show' class
    }
function togglePopupout5() {
      var popup = document.getElementById("myPopupout5");
      popup.innerHTML=popout5
      popup.classList.toggle("show"); // Toggles the 'show' class
    }
function togglePopupout6() {
      var popup = document.getElementById("myPopupout6");
      popup.innerHTML=popout6
      popup.classList.toggle("show"); // Toggles the 'show' class
    }
function togglePopupout7() {
      var popup = document.getElementById("myPopupout7");
      popup.innerHTML=popout7
      popup.classList.toggle("show"); // Toggles the 'show' class
    }
function togglePopupout8() {
      var popup = document.getElementById("myPopupout8");
      popup.innerHTML=popout8
      popup.classList.toggle("show"); // Toggles the 'show' class
    }
function togglePopupout9() {
      var popup = document.getElementById("myPopupout9");
      popup.innerHTML=popout9
      popup.classList.toggle("show"); // Toggles the 'show' class
    }
    
function togglePopupout10() {
        var popup = document.getElementById("myPopupout10");
        popup.innerHTML=popout10
        popup.classList.toggle("show"); // Toggles the 'show' class
      }









const progressBar = document.getElementsByClassName('progress-bar')[0]

//Add logic for goals


//Circle Stuff

let CircularBar = document.querySelector(".circular-bar");
let PercentValue = document.querySelector(".percent");

let InitialValue = 0;
let finaleValue = 100;
let speed = 10;


//Step Counter
//
//

let stepCount = 0;
let motionHandler = null;
let isCounting = false;

const stepDisplay = document.getElementById('stepCount');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');


// Function to start step counting
startButton.addEventListener('click', () => {
    if (!isCounting) {
        isCounting = true;
        if ('Accelerometer' in window || 'DeviceMotionEvent' in window) {
            window.addEventListener('devicemotion', countSteps);
        } else {
            alert('Your device does not support motion sensors.');
        }
    }
});

// Function to stop step counting
stopButton.addEventListener('click', () => {
    isCounting = false;
    window.removeEventListener('devicemotion', countSteps);
});

// Function to stop step counting
resetButton.addEventListener('click', () => {
  isCounting = false;
  window.removeEventListener('devicemotion', countSteps);
  stepCount=0;
  stepDisplay.textContent = stepCount;
  setInterval(() => {
    const width = stepCount
    progressBar.style.setProperty('--width', stepCount)
  })
});

// Function to count steps based on motion
function countSteps(event) {
    const acceleration = event.accelerationIncludingGravity;
    const threshold = 10; // Adjust the sensitivity as necessary

    // Calculate the overall acceleration
    let totalAcceleration = Math.sqrt(
        acceleration.x * acceleration.x +
        acceleration.y * acceleration.y +
        acceleration.z * acceleration.z
    );

    // Check if the total acceleration exceeds the threshold
    if (totalAcceleration > threshold) {
        stepCount++;
        stepDisplay.textContent = Math.round(stepCount/20);
        
        setInterval(() => {
          const width = stepCount
          progressBar.style.setProperty('--width', stepCount/20)

            InitialValue += 1;

            CircularBar.style.background = `conic-gradient(#4285f4 ${(stepCount/20)/100 * 360}deg, #e8f0f7 0deg)`;
            PercentValue.innerHTML = (Math.round(stepCount/20))+"%";
        })

    }
}












///Game
//
//












