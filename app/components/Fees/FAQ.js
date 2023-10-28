"use client";
import React from "react";
import { Accordion } from "flowbite-react";

const FAQ = () => {
  return (
    <div className="mt-10 p-5">
      <h2 className="text-center text-xl md:text-3xl ">FAQs ABOUT FEES</h2>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>Do we accept insurance?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              <p>
                Wholistic Haven does not accept insurance as payment for
                services at this time.
              </p>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <p>Your health and peace of mind are your greatest assets.</p>
              <p>
                Our individualized, whole-person treatment model is an
                INVESTMENT
              </p>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>WHAT ARE OUR FEES?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <p>INDIVIDUAL SESSIONS: $200</p>
                </li>
                <li>
                  <p>COUPLES SESSIONS: $250</p>
                </li>
                <li>
                  ONE-TIME SURGICAL ASSESSMENTS FOR GENDER-AFFIRMING CARE: $300
                </li>
              </ul>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <p>
                (Includes 1-2 visits as well as the mental health support letter
                should you meet guidelines for surgical readiness)
              </p>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>HOW DO WE ASSIST WITH FEES?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              <p>
                If you have out-of-network benefits with your insurer, we can
                provide a superbill (receipt), upon request, for you to use to
                seek reimbursement from your insurer.
              </p>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default FAQ;
