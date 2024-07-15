// Example: Using callbacks and chaining
gsap.to('#h1', { opacity: 0.5, duration: 1, onComplete: () => console.log('Animation completed') });


gsap.from("#box1", {
x:1200,
// y:1000,
delay: 1,
duration:2,
rotate:360,
backgroundColor:"purple",
borderRadius: "40%",
scale:.8
})


gsap.to("#box2", {
  x:1200,
  // y:700,
  delay: 1,
  rotate:360,
  duration:2,
  backgroundColor:"orange",
  borderRadius: "50%",
  scale:.8

  })
