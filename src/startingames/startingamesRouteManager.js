
let startingamesRouteHistory;

export default class startingamesRouteManager
{
  static init(history)
  {
    startingamesRouteHistory = history;
  }

  static goto(newLink)
  {
    startingamesRouteHistory.push(newLink);
  }

};

