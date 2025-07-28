var mark = 33;

if (mark >= 90 && mark <= 100) {
  console.log('A');
} else if (mark >= 80 && mark <= 89) {
  console.log('B');
}
else if (mark >= 70 && mark <= 79) {
  console.log('C');
}
else if (mark >= 60 && mark <= 69) {
  console.log('D');
}
else if (mark >= 33 && mark < 60) {
  console.log('You have passed');
}
else {
  console.log('You have failed');
}