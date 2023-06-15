function handleTimeout() {
  console.log('Time out!');
}

const handleTimeout2 = () => {
  console.log('Time out again..!');
}

setTimeout(handleTimeout, 3000);
setTimeout(handleTimeout2, 4000);
setTimeout(() => {
  console.log('Time out again...!')
}, 5000);