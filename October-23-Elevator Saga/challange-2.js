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
        ];
        //  elevator.destinationQueue = elevator.getPressedFloors()
        elevator.checkDestinationQueue();

        elevator.goToFloor(floorNum, true);
      }
    });

    // when a floor button is pressed, go to that floor
    elevator.on('floor_button_pressed', (floorNum) => {
      elevator.goToFloor(floorNum);
      console.log(
        `PAssenger pressed for Floor:${floorNum} elevator.destinationQueue: `,
        elevator.destinationQueue
      );
    });

    // when someone is waiting on a floor to go up, go to that floor
    floors.forEach((floor) => {
      floor.on('up_button_pressed', () => {
        elevator.goToFloor(floor.floorNum());
        elevator.destinationQueue = [...new Set(elevator.destinationQueue)];
        elevator.checkDestinationQueue();
        console.log(
          `Up button pressed from Floor:${floor.floorNum()} elevator.destinationQueue: `,
          elevator.destinationQueue
        );
      });
    });

    // when someone is waiting on a floor to go down, go to that floor
    floors.forEach((floor) => {
      floor.on('down_button_pressed', () => {
        elevator.goToFloor(floor.floorNum());
        elevator.destinationQueue = [...new Set(elevator.destinationQueue)];
        elevator.checkDestinationQueue();
        console.log(
          `Down button pressed from Floor:${floor.floorNum()} elevator.destinationQueue: `,
          elevator.destinationQueue
        );
      });
    });
  },

  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  },
};

// Approximate time : ~ 58s
