const challenge3 = {
  init: function (elevators, floors) {
    console.clear();
    let elevatorDirection = 'up';
    let goingUpQueue = [];
    let goingDownQueue = [];
    const elevator = elevators[0];

    elevator.on('idle', function () {
      console.log('elevator is IDLE>>>>>');
    });

    function runElevator() {
      console.log({ elevatorDirection });
      elevator.goingUpIndicator(elevatorDirection === 'up');
      elevator.goingDownIndicator(elevatorDirection === 'down');

      if (elevatorDirection === 'up') {
        elevator.destinationQueue = [4]; //goingUpQueue;
        //goingUpQueue=[]//TODO change with the remain floors
        elevator.checkDestinationQueue();
      } else if (elevatorDirection === 'down') {
        elevator.destinationQueue = [0]; // goingDownQueue;
        //goingDownQueue=[]//TODO change with the remain floors
        elevator.checkDestinationQueue();
      }
    }

    elevator.on('stopped_at_floor', function (floorNum) {
      if (floorNum === 4) {
        elevatorDirection = 'down';
        runElevator();
      }
      if (floorNum === 0) {
        elevatorDirection = 'up';

        runElevator();
      }
    });

    elevator.on('passing_floor', function (floorNum, direction) {
      if (direction === 'up' && goingUpQueue.includes(floorNum)) {
        console.log('Elevator is going UP and some is on floor ', floorNum);
        elevator.goToFloor(floorNum, true);
        goingUpQueue = goingUpQueue.filter((f) => f !== floorNum);
      }
      if (direction === 'down' && goingDownQueue.includes(floorNum)) {
        console.log('Elevator is going DOWN and some is on floor ', floorNum);
        elevator.goToFloor(floorNum, true);
        goingDownQueue = goingDownQueue.filter((f) => f !== floorNum);
      }
      console.log({ goingUpQueue, goingDownQueue });
    });

    elevator.on('floor_button_pressed', function (floorNum) {
      //console.log(">>>>>>>>>>>>>>:",elevator.getPressedFloors())

      if (elevatorDirection === 'up') {
        goingUpQueue.push(floorNum);
        goingUpQueue = [...new Set(goingUpQueue)];
        goingUpQueue.sort((a, b) => a - b); //[1234]

        console.log('floor-UP_button_pressed, new q:', goingUpQueue);
      }
      if (elevatorDirection === 'down') {
        goingDownQueue.push(floorNum);
        goingDownQueue = [...new Set(goingDownQueue)];
        goingDownQueue.sort((a, b) => b - a); //[4321]
        console.log('floor DOWN_button_pressed, new q:', goingDownQueue);
      }
      // runElevator()
    });

    floors.forEach((floor) => {
      floor.on('down_button_pressed', function () {
        goingDownQueue.push(floor.floorNum());
        goingDownQueue = [...new Set(goingDownQueue)];
        goingDownQueue.sort((a, b) => b - a); //[4321]
        console.log('SOMEONE CALLED FOR DOWN: ', goingDownQueue);
      });

      floor.on('up_button_pressed', function () {
        goingUpQueue.push(floor.floorNum());
        goingUpQueue = [...new Set(goingUpQueue)];
        goingUpQueue.sort((a, b) => a - b); //[1234]
        console.log('SOMEONE CALLED FOR UP: ', goingUpQueue);
      });
    });
  },

  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  },
};
