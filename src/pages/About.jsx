import React from "react";
import bar from "../assets/bar.jpg";
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
    <div
      className="relative mt-10 mb-24 pb-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bar})` }}
    >
      {/* オーバーレイ効果 */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* コンテンツ */}
      <div className="relative z-10">
        <h3 className="text-pink-400 flex text-3xl justify-center pt-10">
          About Me
        </h3>

        <div className="font-serif text-lg text-center m-6 max-w-xs mx-auto text-stone-200">
          <p>
            Hey there! I’m Mimi, your go-to private bartender here in the
            Netherlands. <br />
            <br />
            A little about me: I started mixing drinks at the Hard Rock Cafe in
            Osaka during my college years and later became a bar trainer. I
            picked up all the mixology basics there, and I’ve been building on
            those skills ever since, especially during my time at the Hilton
            Hotel in The Hague. <br />
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

        {/* カルーセル */}

        <div className="mt-6">
          <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            {carouselImages.map((image) => (
              <div key={image} className="carousel-item">
                <img
                  src={image}
                  alt="carousel"
                  className="max-h-56 w-auto object-contain mx-auto"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default About;
