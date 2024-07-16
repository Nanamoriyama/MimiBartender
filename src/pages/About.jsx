import React from "react";
import Wrapper from "../assets/wrappers/AboutPage";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // カルーセルのスタイルをインポート
import mimiimage from "../assets/mimi.jpg";
import cocktail1image from "../assets/cocktail1.jpg";
import a1image from "../assets/a1.jpg";
import a2image from "../assets/a2.jpg";
import a3image from "../assets/a3.jpg";
import a4image from "../assets/a4.jpg";
import a5image from "../assets/a5.jpg";

const carouselImages = [
  a1image,
  a2image,
  a3image,
  a4image,
  a5image,
  mimiimage,
  cocktail1image,
];

const About = () => {
  return (
    <Wrapper>
      <h3>About Me</h3>
      <div>
        <div>
          <p>
            Hey there! I’m Mimi, your go-to private bartender here in the
            Netherlands. <br />
            <br />A little about me: I started mixing drinks at the Hard Rock
            Cafe in Osaka during my college years and later became a bar
            trainer. I picked up all the mixology basics there, and I’ve been
            building on those skills ever since, especially during my time at
            the Hilton Hotel in The Hague. <br />
            <br />
            Got an event coming up and need a bartender? Just give me a shout! I
            love mixing up everything from the classic cocktails to custom
            drinks that’ll make your event unique. Let’s make your party the
            talk of the town!
            <br />
            <br />
            Got questions or want to chat more? Drop me a line anytime! <br />
            <br />
            <span>All the best, Mimi</span>
          </p>
        </div>
        <div className="mt-6">
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            {carouselImages.map((image) => (
              <div key={image} className="carousel-item">
                <img
                  src={image}
                  alt="carousel"
                  className="max-h-48 w-auto object-contain mx-auto"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
