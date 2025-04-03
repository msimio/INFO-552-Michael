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
            PercentValue.innerHTML = InitialValue+"%";
        })

    }
}












///Game
//
//












