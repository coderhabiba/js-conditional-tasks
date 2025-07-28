var yourScore = 80;
var friendsScore = 80;
if (yourScore >= 80) {
  if (friendsScore >= 80) {
    console.log("Let's go for lunch");
  } else if (friendsScore >= 60) {
    console.log('Good luck for the next time');
  } else if (friendsScore >= 40) {
    console.log("keep your friend's message unseen");
  } else {
    console.log('block');
  }
} else {
  console.log('go to home and sleep and act sad');
}
