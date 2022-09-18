import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const parallax = document.querySelector(".parallax");

const scrollTrackingTimeline = new ScrollTimeline({
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

if (parallax) {
  const height = parallax.clientHeight;
  const viewPortFraction = height / window.innerHeight;
  const changePercent = 20 * viewPortFraction ** 3;
  parallax.animate(
    {
      //   backgroundPositionY: [`-${diff}px`, `${diff}px`],
      backgroundPositionY: [`${50 + changePercent}%`, `${50 - changePercent}%`],
    },
    {
      duration: 1,
      timeline: scrollTrackingTimeline,
    }
  );
}
