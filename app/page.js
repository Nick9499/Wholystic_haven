"use client";
import Image from "next/image";
import RootLayout from "./layout";
import DoctorDummy from "./doctor_dummy.jpg";
import ButtonComponent from "./components/ButtonComponent";
// import { Button } from "flowbite-react";

export default function Home() {
  return (
    <div>
      <div className="m-10  md:p-20 ">
        <h1 className="text-center   text-3xl  md:text-5xl  ">
          A Safe Space for <br /> BIPOC Individuals and Communities
        </h1>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="w-full p-10">
          <img
            className="shadow-2xl rounded-xl"
            src={DoctorDummy.src}
            alt="Doctor"
          />
        </div>
        <div className="m-10 p-5 md:p-10 flex  items-center">
          <h1 className="text-center   text-xl  md:text-3xl  ">
            A Haven for the <br /> Integration of Mental Health, Sexuality,
            Spirituality & Holistic Practices
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse bg-teal-600">
        <div className="p-10  ">
          <img
            className="shadow-2xl rounded-xl"
            src={DoctorDummy.src}
            alt="Doctor"
          />
        </div>
        <div className=" p-10 flex  items-center   text-white">
          <h1 className="text-center   text-lg  md:text-2xl  ">
            I am <b>Cathleen A. Mauricette</b>, LCSW, a mental health provider
            who aims to integrate the complexity of both the human and spiritual
            experience of life in order to support adults in achieving optimum
            wellness.
          </h1>
        </div>
      </div>
      <div className="m-10 md:m-24 p-5 md:p-10 ">
        <h1 className="text-center   text-2xl  md:text-4xl   ">
          Are you someone who can relate to this?
        </h1>
      </div>
      <div className="grid md:grid-cols-3">
        <div className=" p-14 md:p-10 bg-black text-white ">
          <ul className="list-disc">
            <li className="pb-3">
              You long for more balance, peace, and joy in your relationships
              and interactions?
            </li>
            <li className="pb-3">
              You have the appearance of having it all together but sometimes
              find yourself suffering in silence?
            </li>
            <li className="pb-3">
              You’re struggling with your sexuality and/or identity and are not
              sure how to process your emotions in a safe space without fear of
              retaliation?
            </li>
            <li className="pb-3">
              You find that the belief systems you grew up believing are no
              longer resonating with you and don’t know where to turn to talk
              about it?
            </li>
          </ul>
        </div>
        <div className=" p-14 md:p-10  ">
          <ul className="list-disc">
            <li className="pb-3">
              You want care that gets to the root cause, not a band-aid?
            </li>
            <li className="pb-3">
              Life&apos;s stressors, as well as the cost to maintain your
              successes and achievements, are taking a toll?
            </li>
            <li className="pb-3">
              You want a mental health provider who is a person of color who can
              culturally relate, understand, and validate your experiences?
            </li>
            <li className="pb-3">
              You want care that is culturally competent, aligned with your
              values, and attuned to your experiences and identity?
            </li>
          </ul>
        </div>
        <div className=" p-14 md:p-10 bg-teal-600 text-white ">
          <ul className="list-disc">
            <li className="pb-3">
              You want to explore holistic options to achieve a higher level of
              inner harmony with yourself instead of traditional mental health
              services?
            </li>
            <li className="pb-3">
              You’re ready and motivated to THRIVE and make the lifestyle
              changes necessary to do so?
            </li>
            <li className="pb-3">
              You need help creating an individualized, sustainable, and
              practical self-care routine?
            </li>
            <li className="pb-3">
              You have an endless list of goals you want to achieve yet you need
              an accountability partner to support you without judgment or bias?
            </li>
          </ul>
        </div>
      </div>
      <div className="m-5 md:m-24 md:p-10 ">
        <h1 className="text-center   text-2xl  md:text-4xl   ">
          ...If so,then you’re in the right place!
        </h1>
      </div>
      <div className="flex flex-col md:flex-row bg-teal-600 text-white">
        <div className="p-10">
          <img
            src={DoctorDummy.src}
            alt="Doctor"
            className="shadow-2xl rounded-xl"
          />
        </div>
        <div className="p-5 py-10 md:p-10  ">
          <h1 className="text-center   text-3xl  md:text-4xl text-bold  pb-10  ">
            Here’s how I can help…
          </h1>
          <p className="text-center pb-10  ">
            I treat and specialize in anxiety, depression, ADHD, bipolar,
            trauma, sexuality/gender Identity, ethically non-monogamous
            relationships, military/veteran experience, college student
            experience and holistic practices. I also offer psychiatric
            consultations and gender-affirming treatment, education and outreach
            as well as lifestyle coaching.
          </p>
          <p className="text-center pb-10 ">
            I partner with my clients to discover and cultivate skills for a
            more fulfilling life.
          </p>
          <p className="text-center pb-10">
            I serve as a guide and resource to help you identify the tools you
            need to heal and thrive and design the life you ultimately desire.
          </p>
          <p className="text-center pb-10">
            My therapeutic services are only available to clients in Florida and
            New Mexico. Coaching services and consultations are available to
            anyone regardless of their primary state of residence.
          </p>
        </div>
      </div>
      <div className="p-10 flex justify-center">
        <ButtonComponent>Ready to Request Your Consultation?</ButtonComponent>
      </div>
    </div>
  );
}
