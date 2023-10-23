const challenge3 = {
  init: function (elevators, floors) {
    console.clear();
    let elevatorDirection = 'down';
    let goingUpQueue = [];
    let goingDownQueue = [];

    const elevator = elevators[0];

    elevator.on('idle', function () {
      console.log('elevator is IDLE>>>>>>>>>>>>>>>>>>>>>>>>');
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
      console.log('STOPPED AT FLOOR', floorNum);
      if (floorNum === 4 || floorNum === 0) {
        elevatorDirection = elevatorDirection === 'up' ? 'down' : 'up';
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
      // console.log({goingUpQueue,goingDownQueue})
    });

    elevator.on('floor_button_pressed', function (floorNum) {
      if (floorNum > elevator.currentFloor()) {
        addFloorToGoingUpQueue(floorNum);
      }
      if (floorNum < elevator.currentFloor()) {
        addFloorToGoingDownQueue(floorNum);
      }
    });

    floors.forEach((floor) => {
      floor.on('down_button_pressed', function () {
        addFloorToGoingDownQueue(floor.floorNum());
      });

      floor.on('up_button_pressed', function () {
        addFloorToGoingUpQueue(floor.floorNum());
      });
    });

    function addFloorToGoingUpQueue(floorNumber) {
      if (!goingUpQueue.includes(floorNumber)) {
        goingUpQueue.push(floorNumber);
        goingUpQueue.sort((a, b) => a - b); //[1234]
      }
    }

    function addFloorToGoingDownQueue(floorNumber) {
      if (!goingDownQueue.includes(floorNumber)) {
        goingDownQueue.push(floorNumber);
        goingDownQueue.sort((a, b) => b - a); //[4321]
      }
    }
  },

  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  },
};
