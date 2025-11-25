import { gsap } from "gsap";
    
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
let split, animation;
document.fonts.ready.then(() => {
animation && animation.revert();
  animation = gsap.from(split.words, {
    y: -100,
    opacity: 0,
    rotation: "random(-80, 80)",
    duration: 0.7, 
    ease: "back",
    stagger: 0.15
  })
  
});
function setup() {
  split && split.revert();
  animation && animation.revert();
  split = SplitText.create(".text", {type:"chars,words,lines"});
}
setup();
window.addEventListener("resize", setup);

document.fonts.ready.then(() => {
  gsap.set(".split", { opacity: 1 });

  let split;
  SplitText.create(".split", {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
    onSplit: (self) => {
      split = gsap.from(self.lines, {
        duration: 0.6,
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
      });
      return split;
    }
  });
  });