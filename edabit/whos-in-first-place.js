const firstPlace = road => {
  if (!road.length) {
    return 'No road available'
  }

  let newRoad = road.replace(/=/g, '');
  if (!newRoad) {
    return 'No car available'
  }

  return [...newRoad].pop();
}

// alt

const firstPlace1 = road => {
  if (road === "") {
    return "No road available"
  } else if (road.match(/[A-Z]/gi) === null) {
    return "No car available"
  } else {
    return road.match(/[A-Z]/gi).pop()
  }
}
