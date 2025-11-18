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
    }
    else if(dropid==1)
    {
        pos1="Bb Major"
        pos2="F Mixolydian"
        pos3="Cm Dorian"
        notes="A B C D E F G"
        outnotes="Bb D F Bb D F Bb D F Bb"
        innotes="C F A C Eb G A C Eb G"

    }
    else if(dropid==2)
    {
        pos1="B Major"
        pos2="F# Mixolydian"
        pos3="C#m Dorian"
        notes="A B C D E F G"
        outnotes="B Eb F# B Eb F# B Eb F# B"
        innotes="Db F# Bb Db E Ab Bb Db E Ab"

    }
    else if(dropid==3)
    {
        pos1="C Major"
        pos2="G Mixolydian"
        pos3="Dm Dorian"
        notes="A B C D E F G"
        outnotes="C E G C E G C E G C"
        innotes="D G B D F A B D F A"
        

    }
    else if(dropid==4)
    {
        pos1="Db Major"
        pos2="Ab Mixolydian"
        pos3="Ebm Dorian"
        notes="A B C D E F G"
        outnotes="Db F Ab Db F Ab Db F Ab Db"
        innotes="Eb Ab C Eb F# Bb C Eb F# Bb"

    }
    else if(dropid=5)
    {
        pos1="D Major"
        pos2="A Mixolydian"
        pos3="Em Dorian"
        notes="A B C D E F G"
        outnotes="D F# A D F# A D F# A D"
        innotes="E A Db E G B Db E G B"

    }
    else if(dropid==6)
    {
        pos1="Eb Major"
        pos2="Bb Mixolydian"
        pos3="F Dorian"
        notes="A B C D E F G"
        outnotes="Eb G Bb Eb G Bb Eb G Bb Eb"
        innotes="F Bb D F Ab C D F Ab C"

    }
    else if(dropid==7)
    {
        pos1="E Major"
        pos2="B Mixolydian"
        pos3="F#m Dorian"
        notes="A B C D E F G"
        outnotes="E A B E A B E A B E"
        innotes="F# B Eb F# A Db Eb F# A Db"

    }
    else if(dropid==8)
    {
        pos1="F Major"
        pos2="C Mixolydian"
        pos3="Gm Dorian"
        notes="A B C D E F G"
        outnotes="F A C F A C F A C F"
        innotes="G C E G Bb D E G Bb D"

    }
    else if(dropid==9)
    {
        pos1="Gb Major"
        pos2="C# Mixolydian"
        pos3="G#m Dorian"
        notes="A B C D E F G"
        outnotes="F# Bb Db F# Bb Db F# Bb Db F#"
        innotes="Ab Db D Ab B Eb F Ab B Eb"

    }
    else if(dropid==10)
    {
        pos1="G Major"
        pos2="D Mixolydian"
        pos3="Am Dorian"
        notes="A B C D E F G"
        outnotes="G B D G B D G B D G"
        innotes="A D F# A C E F# A C E"

    }
    else if(dropid==11)
    {
        pos1="Ab Major"
        pos2="Eb Mixolydian"
        pos3="Bbm Dorian"
        notes="A B C D E F G"
        outnotes="Ab C Eb Ab C Eb Ab C Eb Ab"
        innotes="Bb Eb G Bb Db F G Bb Db F"
    }
    




    document.getElementById("testout").innerHTML = str1;

    document.getElementById("first").innerHTML = "First Position: "+pos1;
    document.getElementById("second").innerHTML = "Second Position: "+pos2;
    document.getElementById("third").innerHTML = "Third Position: "+pos3;

    document.getElementById("firstnotes").innerHTML = "Mode Notes/Position"+notes;
    document.getElementById("secondnotes").innerHTML = notes;
    document.getElementById("thirdnotes").innerHTML = notes;
    

    document.getElementById("innotes").innerHTML = "Notes "+ outnotes;
    document.getElementById("outnotes").innerHTML = "Notes"+ innotes;





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












