//I built and tested this function first and then built the React App to utilize it

export function scoreBowling(framesArr) {
  let oneBallMultiplier = 1;
  let twoBallMultiplier = 1;
  let total = 0;
  for (let i = 0; i < framesArr.length; i++) {
    const ball1 = framesArr[i][0];
    if (i < 9) {
      total += ball1 * oneBallMultiplier;
      oneBallMultiplier = twoBallMultiplier;
      twoBallMultiplier = 1;
      if (ball1 === 10) {
        oneBallMultiplier++;
        twoBallMultiplier++;
      } else {
        const ball2 = (framesArr[i][1] || framesArr[i][1] === 0) ? framesArr[i][1] : null;
        if (ball2 !== null) {
          total += ball2  * oneBallMultiplier;
          oneBallMultiplier = twoBallMultiplier;
          twoBallMultiplier = 1;
          if (ball1 + ball2 === 10) {
            oneBallMultiplier++;
          }
        }
      }
    } else {
      const ball2 = framesArr[i][1] || 0;
      const ball3 = framesArr[i][2] || 0;
      total += ball1 * oneBallMultiplier + ball2 * twoBallMultiplier + ball3;
    }
  }
  return total;
}