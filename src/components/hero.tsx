import React from "react";
import Container from "./container";

const Hero = () => {
  return (
    <Container className="">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="mx-auto text-4xl text-foreground sm:text-5xl sm:leading-none lg:text-7xl">
          <span className="block text-balance text-center">One Two Three</span>
          <span className="block text-balance text-center text-primary">
            Four Five Six
          </span>
        </h1>
        <p className="mx-auto my-3 max-w-2xl text-balance pt-2 text-center text-sm text-foreground sm:mt-5 sm:text-base lg:mb-0 lg:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          accusamus nisi rem provident modi. Atque rem voluptas veritatis
          nostrum. Sequi minima, necessitatibus soluta dolorum maxime at itaque
          minus quaerat! Quis!
        </p>
      </div>
    </Container>
  );
};

export default Hero;
