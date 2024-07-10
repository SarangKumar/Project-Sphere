import React from "react";
import Container from "./container";

const Hero = () => {
  return (
    <Container className="">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="mx-auto text-4xl font-bold text-foreground sm:text-5xl sm:leading-none lg:text-7xl">
          <span className="block text-balance text-center">
            Collaborate, Create, and
          </span>
          <span className="block text-balance text-center text-primary">
            Conquer Projects with Ease!
          </span>
        </h1>
        <p className="mx-auto my-3 max-w-xl text-balance pt-2 text-center text-sm text-foreground sm:mt-5 sm:text-base lg:mb-0">
          {/* Project Sphere is open source
          <br /> */}
          Ultimate tool for team collaboration and workflow efficiency, perfect
          for solo developers or large teams to create, manage, and share
          projects effortlessly.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
