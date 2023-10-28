import React from "react";
import FeesBanner from "../components/Banner";
import bgImage from "../doctor.jpg";
import DefaultCard from "../components/Card";

const Services = () => {
  return (
    <div className="mt-5">
      <FeesBanner title="Our Services" bgImage={bgImage.src} />
      <div className="grid md:grid-cols-3 gap-3 p-3 md:p-10 ">
        <DefaultCard
          title="INDIVIDUAL AND COUPLES THERAPY"
          body="Sessions are offered via telehealth for individual and couples therapy where a comprehensive intake is completed
during the initial session and goals for therapy are discussed to plan for future follow-up sessions. Contact me today
for a free 15 minute consultation!"
        />
        <DefaultCard
          title="ONE-TIME CONSULTATIONS FOR GENDER-AFFIRMING CARE"
          body="We provide consultations as well as one-time psychiatric evaluations for surgical assessments. As an active member
          of The World Professional Association for Transgender Health (WPATH), all evaluations and assessments are in-line
          with WPATH standards of care.
          "
        />
        <DefaultCard
          title="EDUCATION AND OUTREACH"
          body="Cathleen has the ability to participate in speaking engagements about mental health and wellness as it relates to the
          military experience and provide training for military-informed practice to civilians who provide care for veterans, active
          duty personnel and their dependents. I am also well-versed in speaking at engagements related to gender-affirming
          care and can be booked to speak at professional organizations,civic organizations, retreats, and corporate events.
          Contact us today to inquire about booking Cathleen for your next event!"
        />
        <DefaultCard
          title="PROFESSIONAL CONSULTATIONS FOR CLINICIANS & HEALTHCARE PROFESSIONALS"
          body="We offer professional consultations related to career mentorship, licensure supervision as well as specialized
          consultation on cases you may have that are related to any of the areas I specialize in. Reach out today for more
          information about our services.
          "
        />
        <DefaultCard
          title="LIFESTYLE AND HOLISTIC WELLNESS COACHING"
          body="If you are interested in coaching services related to achieving optimum wellness in areas of your life such as
          self-development, creating a self-care plan, accountability in achieving goals, improving communication and more,
          schedule a consultation today! If you are interested in integrating holistic practices such as astrology, tarot, meditative
          practices, benefits of herbal practices and more into your wellness plan, these services are also available and all
          coaching services are available to anyone regardless of their primary state of residence. This option is not mental
          health counseling and there will not be any evaluating, diagnosing and/or treatment recommendations of any mental
          health disorders during coaching sessions.
          
          "
        />
        <DefaultCard
          title="TRAINING MODALITIES OFFERED"
          body={
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>Acceptance and Commitment Therapy</li>
              <li>Attachment Based Therapy</li>
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Cognitive Processing Therapy (CPT)</li>
              <li>Eye Movement Desensitization and Reprocessing (EMDR)</li>
              <li>Narrative Therapy</li>
              <li>Prolonged Exposure Therapy (PE)</li>
              <li>Solution Focused Brief Therapy</li>
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Services;
