/** Supported locale codes */
export type Locale = "en" | "pt" | "es";

/** Testimonial data */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

/** FAQ item */
export interface FaqItem {
  question: string;
  answer: string;
}

/** Feature tab */
export interface FeatureTab {
  label: string;
  title: string;
  description: string;
  bullets: string[];
}

/** How it works step */
export interface Step {
  title: string;
  description: string;
}

/** Value proposition item */
export interface ValueProp {
  title: string;
  description: string;
}

/** Demo form fields */
export interface DemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
}

/** Form submission states */
export type FormStatus = "idle" | "loading" | "success" | "error";
