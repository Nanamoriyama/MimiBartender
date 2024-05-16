import Wrapper from "../assets/wrappers/AboutPage";
import mimiimage from "../assets/mimi.jpg";
import cocktail1image from "../assets/cocktail1.jpg";

const About = () => {
  return (
    <Wrapper>
      <h3 className="text-stone-400">About Me</h3>
      <div className="">
        <div className="">
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
            <span className="flex justify-end">All the best, Mimi</span>
          </p>
        </div>
        <div className="flex w-28 lg:w-48">
          <img src={mimiimage} alt="../assets/mimi.jpg" className="" />
          <img
            src={cocktail1image}
            alt="../assets/cocktail1.jpg"
            className=""
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default About;
