import React, { useState } from "react";
import Question from "../../components/Question/Question";
import confused_dog from "..//..//assets/confused__dog.png";
import "./questions.css";
const items = [
  {
    title: "How do I become a pet sitter or dog walker on PetMe?",
    content: `Welcome, pet lover!

    If you're interested in becoming a pet sitter or dog walker, you can sign up anytime and fill out the different sections at your own pace. You can also complete each of the steps in any order.
    Here's how to get started:Go to PetMe.com and select "Become a sitter", then scroll down the page to select Get started.
     Type in your personal e-mail so we can contact you, where you will recieve further instructions.`,
  },
  {
    title: "Why book through PetMe?",
    content:
      "Safety is our number one priority at PetMe. Your booking is protected by the PetMe Guarantee, which includes free veterinary coverage in case of accident or illlness. All booking payments are cashless and secure.",
  },

  {
    title: "Why is paying via PetMe safer than directly to Pet Sitter?",
    content:
      "When you pay via PetMe your payment is protected and will only be paid out to Pet Sitters when the job has been completed successfully. A refund may also be provided if the job was not completed satisfactorily by the Pet Sitter.",
  },
  {
    title: "What are the service fees?",
    content:
      "PetMe exists to make it easier to have a dog in your life. We do this by providing an innovative and secure platform, offering 24/7 customer support, and building better tools. Service fees allow PetMe to operate and continually make improvements based on the needs of our growing community.",
  },
  {
    title: "How do I submit a background check?",
    content:
      "Pet parents want to know that their dog will be safe while in the care of a sitter. That's why all pet sitters and dog walkers who list their services on PetMe complete a background check.",
  },
  {
    title: "What information you look for in background check?",
    content:
      "Current full legal name including middle name, social security number, criminal record, education, employment history and experience with dogs.",
  },
];

const Questions = () => {
  return (
    <div id="Questions">
      <h1 className="questions__heading">Frequently asked questions</h1>
      <div className="questions__wrapper">
        <div className="questions__question">
          <Question items={items} />
        </div>
        <div className="questions__image">
          <img src={confused_dog} />
        </div>
      </div>
    </div>
  );
};

export default Questions;
