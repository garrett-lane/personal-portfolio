import { profile } from "../data/content";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <p className="reveal max-w-3xl whitespace-pre-line text-xl leading-relaxed text-text md:text-2xl md:leading-relaxed">
        {profile.bio}
      </p>
    </Section>
  );
}
