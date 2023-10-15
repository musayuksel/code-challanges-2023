const challenge2 = {
  init: function (elevators, floors) {
    const elevator = elevators[0];

    // when passing a floor, if the floor is in the destination queue, remove it from the queue and stop at that floor
    elevator.on('passing_floor', function (floorNum, direction) {
      if (elevator.destinationQueue.includes(floorNum)) {
        elevator.destinationQueue = [
          ...new Set(
            elevator.destinationQueue.filter((flNum) => flNum !== floorNum)
          ),
        ]; //delete duplicates
        elevator.checkDestinationQueue();
        elevator.goToFloor(floorNum, true); //stop immediately
      }
    });

    // when a floor button is pressed, go to that floor
    elevator.on('floor_button_pressed', (floorNum) =>
      elevator.goToFloor(floorNum)
    );

    // when someone is waiting on a floor to go up, go to that floor
    floors.forEach((floor) =>
      floor.on('up_button_pressed', () => {
        elevator.goToFloor(floor.floorNum());
        elevator.destinationQueue = [...new Set(elevator.destinationQueue)];
        elevator.checkDestinationQueue();
      })
    );

    // when someone is waiting on a floor to go down, go to that floor
    floors.forEach((floor) =>
      floor.on('down_button_pressed', () => {
        elevator.goToFloor(floor.floorNum());
        elevator.destinationQueue = [...new Set(elevator.destinationQueue)];
        elevator.checkDestinationQueue();
      })
    );
  },

  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  },
};

// Approximate time : ~ 58s
