// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).

let oneTimeTasks = [];
let monitoringTaskId = null;

// Task 2: Add One-Time Task Function

// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. 
//This function should add an object containing both parameters into the `oneTimeTasks` array.


function addOneTimeTask(func, delay) {
    oneTimeTasks.push({ function: func, delay: delay });
}


// Task 3: Run One-Time Tasks Function

// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and 
//uses `setTimeout` to schedule each task according to its delay.
function runOneTimeTasks() {
    for (oneTimeTask of oneTimeTasks) {
        setTimeout(oneTimeTask.function, oneTimetask.delay)
    }
}

// Task 4: Start Monitoring Function

// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. 
//This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
function startMonitoring() {
    monitoringTaskId = setInterval(() => {
        console.log("Continuous monitoring in process");
    }, 3000);
}

// Task 5: Stop Monitoring Function

// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
function stopMonitoring() {
    clearInterval(monitoringTaskId);
}

// Task 6: Start Countdown Function

// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` 
//to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the 
//countdown when it reaches zero, printing a "Liftoff!" message.
function startCountdown(duration) {
    let count = duration;
    const countDownInterval = setInterval(() => {
        count--;
        console.log(`Time remaining: ${count}`);
        if (count === 0) {
            clearInterval(countDownInterval);
            console.log("LIFTOFF!");
        }
    }, 1000);

}

// Task 7: Schedule Pre-Launch Activities and Launch

// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, 
//and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
function scheduleMission() {
    startMonitoring(); //Starts continuous monitoring
    addOneTimeTask(function () { console.log("Pre-launch systems check") }); //Function to print pre-launch systems check
    addOneTimeTask(stopMonitoring, 12000); //Stops monitoring after 12 seconds
    addOneTimeTask(function () { startCountdown(10); }, 15000); //Starts countdown after 15 seconds (after the above has run)
    runOneTimeTasks(); //Calls all of the functions to run
}

scheduleMission(); // Starts the mission.
