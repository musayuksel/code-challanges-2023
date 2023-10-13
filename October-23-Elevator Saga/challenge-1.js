const challenge1 = {
  init: function (elevators, floors) {
    const elevator = elevators[0];

    // when a floor button is pressed, go to that floor
    elevator.on('floor_button_pressed', (floorNum) =>
      elevator.goToFloor(floorNum)
    );

    // when someone is waiting on a floor to go up, go to that floor
    floors.forEach((floor) =>
      floor.on('up_button_pressed', () => elevator.goToFloor(floor.floorNum()))
    );

    // when someone is waiting on a floor to go down, go to that floor
    floors.forEach((floor) =>
      floor.on('down_button_pressed', () =>
        elevator.goToFloor(floor.floorNum())
      )
    );
  },

  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  },
};
// Approximate time : ~ 53s
