const challenge3 = {
  init: function (elevators, floors) {
    console.clear();
    let elevatorDirection = 'down';
    let goingUpQueue = [];
    let goingDownQueue = [];
    const MAX_FLOOR = floors.length - 1;

    const elevator = elevators[0];

    elevator.on('floor_button_pressed', (floorNum) =>
      floorNum > elevator.currentFloor()
        ? addFloorToGoingUpQueue(floorNum)
        : addFloorToGoingDownQueue(floorNum)
    );

    floors.forEach((floor) => {
      floor.on('down_button_pressed', () =>
        addFloorToGoingDownQueue(floor.floorNum())
      );

      floor.on('up_button_pressed', () =>
        addFloorToGoingUpQueue(floor.floorNum())
      );
    });

    elevator.on('stopped_at_floor', (floorNum) => {
      if (floorNum === MAX_FLOOR || floorNum === 0) {
        elevatorDirection = elevatorDirection === 'up' ? 'down' : 'up';
        runElevator();
      }
    });

    elevator.on('passing_floor', function (floorNum, direction) {
      if (direction === 'up' && goingUpQueue.includes(floorNum)) {
        elevator.goToFloor(floorNum, true);
        // goingUpQueue = goingUpQueue.filter((f) => f !== floorNum);
        goingUpQueue = deleteFloorFromQueue(floorNum, goingUpQueue);
      }
      if (direction === 'down' && goingDownQueue.includes(floorNum)) {
        elevator.goToFloor(floorNum, true);
        // goingDownQueue = goingDownQueue.filter((f) => f !== floorNum);
        goingDownQueue = deleteFloorFromQueue(floorNum, goingDownQueue);
      }
    });

    function deleteFloorFromQueue(floorNum, queue) {
      return queue.filter((f) => f !== floorNum);
    }

    function runElevator() {
      console.log({ elevatorDirection });
      elevator.goingUpIndicator(elevatorDirection === 'up');
      elevator.goingDownIndicator(elevatorDirection === 'down');

      if (elevatorDirection === 'up') {
        elevator.destinationQueue = [MAX_FLOOR];
        elevator.checkDestinationQueue();
      } else if (elevatorDirection === 'down') {
        elevator.destinationQueue = [0];
        elevator.checkDestinationQueue();
      }
    }

    elevator.on('idle', function () {
      console.log('elevator is IDLE>>>>>>>>>>>>>>>>>>>>>>>>');
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
