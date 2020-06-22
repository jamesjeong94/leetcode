const UndergroundSystem = function () {
  this.passengers = {};
  this.trips = {};
};

UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.passengers[id] = { stationName, t };
};

UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let newName = this.passengers[id].stationName + stationName;
  let netTime = t - this.passengers[id].t;
  if (this.trips.hasOwnProperty(newName)) {
    this.trips[newName].time += netTime;
    this.trips[newName].count += 1;
  } else {
    this.trips[newName] = {
      time: netTime,
      count: 1,
    };
  }
};

UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  return (
    this.trips[startStation + endStation].time /
    this.trips[startStation + endStation].count
  );
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
