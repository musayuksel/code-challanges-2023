{
  init: function (elevators, floors) {
    const MAX_FLOOR = floors.length - 1;

    const elevator = elevators[0];
    let elevatorDirection = 'stopped'; //up, down, stopped
    let goingUpQueue = []; //people who want to go up
    let goingDownQueue = []; // people who want to go down

    elevator.on('floor_button_pressed', (floorNum) =>
      // add floor to relevant queue
      {
        floorNum > elevator.currentFloor()
          ? addFloorToGoingUpQueue(floorNum)
          : addFloorToGoingDownQueue(floorNum);
      }
    );

    floors.forEach((floor) => {
      // add waiting passengers to relevant queue
      floor.on('down_button_pressed', () =>
        addFloorToGoingDownQueue(floor.floorNum())
      );

      floor.on('up_button_pressed', () =>
        addFloorToGoingUpQueue(floor.floorNum())
      );
    });

    elevator.on(
      'stopped_at_floor',
      (floorNum) =>
        (floorNum === MAX_FLOOR || floorNum === 0) &&
        elevatorDirection !== 'stopped' &&
        changeDirection()
    );

    elevator.on('passing_floor', (floorNum, direction) => {
      if (direction === 'up' && goingUpQueue.includes(floorNum)) {
        elevator.goToFloor(floorNum, true);
        goingUpQueue = deleteFloorFromQueue(floorNum, goingUpQueue);
      }
      if (direction === 'down' && goingDownQueue.includes(floorNum)) {
        elevator.goToFloor(floorNum, true);
        goingDownQueue = deleteFloorFromQueue(floorNum, goingDownQueue);
      }
    });

    function runElevator() {
      setElevatorIndicator();

      if (elevatorDirection === 'up') {
        elevator.destinationQueue = [MAX_FLOOR]; //TODO: instead of MAX_FLOOR, use the highest floor in the queue
        elevator.checkDestinationQueue();
      } else if (elevatorDirection === 'down') {
        elevator.destinationQueue = [0]; // TODO: instead of 0, use the lowest floor in the queue
        elevator.checkDestinationQueue();
      }
    }

    function setElevatorIndicator() {
      elevator.goingUpIndicator(elevatorDirection === 'up');
      elevator.goingDownIndicator(elevatorDirection === 'down');
    }

    function changeDirection() {
      elevatorDirection = elevatorDirection === 'up' ? 'down' : 'up';
      runElevator();
    }

    function deleteFloorFromQueue(floorNum, queue) {
      return queue.filter((f) => f !== floorNum);
    }

    function addFloorToGoingUpQueue(floorNumber) {
      if (!goingUpQueue.includes(floorNumber)) {
        goingUpQueue.push(floorNumber);
        goingUpQueue.sort((a, b) => a - b); //[1234]
      }
      if (elevatorDirection === 'stopped') {
        changeDirection();
      }
    }

    function addFloorToGoingDownQueue(floorNumber) {
      if (!goingDownQueue.includes(floorNumber)) {
        goingDownQueue.push(floorNumber);
        goingDownQueue.sort((a, b) => b - a); //[4321]
      }
      if (elevatorDirection === 'stopped') {
        changeDirection();
      }
    }
  },

  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  },
};
