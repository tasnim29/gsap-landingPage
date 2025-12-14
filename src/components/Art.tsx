import React from "react";
import { featureLists, goodLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const Art = () => {
  const isMobile = useMediaQuery({ width: 767 });
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom top",
        scrub: 1.5,
        pin: true, //the art section will be stop scrolling when the scroll bar will scroll
      },
    });
    maskTimeline
    .to(".will-fade",{opacity:0,stagger:0.02,ease:"power1.inOut"})
    .to(".masked-img",{scale:1.3,maskPosition:"center",maskSize:"400%",duration:1,ease:"power1.inOut"})
    .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'})
  });
  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The Art</h2>

        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((features, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="" />
                <p>{features}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              className="abs-center masked-img size-full object-contain"
              src="/images/under-img.jpg"
              alt=""
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((features, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="" />
                <p className="md:w-fit w-60">{features}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content" >
            <h3 >Made with Craft, Poured with Passion</h3>
            <p>
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
