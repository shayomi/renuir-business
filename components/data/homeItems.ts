import {
  Sparkle,
  Shield,
  Clock1,
  Users2,
  Clock,
  Heart,
  Smartphone,
  BoxIcon,
} from "lucide-react";
import { Zap, ShieldCheck } from "lucide-react";
import { BarChart3, RefreshCw } from "lucide-react";

export const Loststat = [
  {
    icon: Smartphone,
    value: "Report it",
    label: "Describe your item in 60 seconds",
    bg: "bg-white",
    iconColor: "text-primary-600",
    order: "1",
  },
  {
    icon: Sparkle,

    value: "We search",
    label: "AI checks and matches in real time",
    bg: "bg-white",
    iconColor: "text-primary-600",
    order: "2",
  },
  {
    icon: BoxIcon,

    value: "Get it back",
    label: "Pick up or have it shipped",
    bg: "bg-white",
    iconColor: "text-primary-600",
    order: "3",
  },
];

export const times = [
  {
    icon: Shield,
    value: "100%",
    label: "Secure Verification",
  },
  {
    icon: Clock1,
    value: "48 hrs",
    label: "Average recovery time",
  },
  {
    icon: Users2,
    value: "10k+",
    label: "Items reunited",
  },
];

type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "How does Renuir actually work?",
    answer:
      "It's simple: you report your lost item with a description and where you think you lost it. Our system automatically searches our network of partner venues (hotels, airports, transit systems, restaurants, and more) in real-time. When we find a potential match, you'll get an instant notification. You can then verify the match and coordinate pickup or shipping directly through the platform.",
  },
  {
    question: "Is it really free for individuals?",
    answer:
      "Yes, completely free. Reporting a lost item, getting matched, and receiving notifications costs you nothing. We make money by providing businesses with tools to manage their lost & found operations more efficiently. This allows us to keep the service free for individuals while building a comprehensive network of partner venues.",
  },
  {
    question: "How long does it typically take to find a match?",
    answer:
      "Most matches happen within 24-48 hours, though it can vary depending on when and where you lost your item. Items lost in high-traffic areas like airports or hotels often get turned in quickly. Your report stays active for 90 days, and we'll keep searching our network continuously. You'll receive a notification immediately when a match is found.",
  },
  {
    question: "What types of items can I report?",
    answer:
      "You can report virtually any lost item: luggage, electronics, wallets, keys, jewelry, clothing, documents, sports equipment, and more. The more details you provide (photos, serial numbers, distinctive features), the better our matching system can help. We work with venues that handle all types of lost property.",
  },
  {
    question: "How do you protect my personal information?",
    answer:
      "Privacy is our top priority. Your contact information is never visible to anyone until there's a confirmed match. Even then, you control whether to share your details. We use encryption for all data, comply with GDPR and CCPA regulations, and never sell your personal information. You can read our full Privacy Policy for complete details.",
  },
  {
    question: "How do you verify that a match is actually my item?",
    answer:
      "Our matching system uses AI to compare descriptions, photos, and location data. When a potential match is found, you'll see photos and details from the venue. You can verify distinctive features, serial numbers, or other identifying marks before confirming. We also require venues to verify ownership through security questions or documentation before releasing items.",
  },
  {
    question: "What if my item is never found?",
    answer:
      "Unfortunately, not every lost item gets turned in. Your report stays active for 90 days, and we'll continue searching as new items are logged by our partner venues. If your item isn't found, you haven't lost anything—the service is free. We also provide tips on additional steps you can take, like contacting venues directly or filing police reports for valuable items.",
  },
  {
    question: "Can businesses and venues use Renuir?",
    answer:
      "Absolutely! Renuir offers a complete lost & found management system for businesses. It replaces spreadsheets and manual processes with a streamlined platform that your staff will actually use. Features include photo uploads, automatic matching, secure handoff processes, and detailed reporting. Join our business waitlist and we'll reach out to set up a demo tailored to your needs.",
  },
  {
    question: "What locations and venues do you cover?",
    answer:
      "We're continuously expanding our network. Currently, we partner with major airports, hotel chains, transit systems, restaurants, event venues, and retail locations across multiple regions. When you report an item, we search all relevant venues in that area. The more venues in our network, the better your chances of finding your item.",
  },
  {
    question: "Do I need to create an account to use Renuir?",
    answer:
      "For basic reporting, you can submit a lost item report with just your email address. However, creating a free account gives you access to additional features like tracking all your reports in one place, receiving push notifications, managing your profile, and faster reporting for future incidents. Account creation takes less than a minute.",
  },
];

export const trustedByStats = [
  {
    icon: Smartphone,
    value: "One report",
    label: "Search everywhere",
    bg: "bg-primary-50",
    iconColor: "text-primary-600",
  },
  {
    icon: Clock,
    value: "Always on",
    label: "We search 24/7",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: ShieldCheck,
    value: "Private",
    label: "Your info stays safe",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Heart,
    value: "Free",
    label: "for individuals",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export const businessFeatures = [
  {
    icon: Zap,
    title: "Log items in seconds",
    description:
      "Staff snap a photo, we handle the rest. No more spreadsheets or handwritten logs.",
  },
  {
    icon: BarChart3,
    title: "See what gets lost",
    description:
      "Know which items pile up, where they come from, and how long they sit unclaimed.",
  },
  {
    icon: RefreshCw,
    title: "Automatic matching",
    description:
      "When someone reports a lost item, we check your inventory instantly. You just confirm the match.",
  },
  {
    icon: ShieldCheck,
    title: "Safe handoffs",
    description:
      "Verify the owner's identity before returning anything. Simple pickup or shipping options built in.",
  },
];

export const consumerFeatures = [
  {
    icon: Smartphone,
    title: "Report once, search everywhere",
    description:
      "Fill out one form. We check airports, hotels, transit, and more. You don't have to.",
  },
  {
    icon: Sparkle,
    title: "Get notified when it's found",
    description:
      "The moment there's a potential match, you'll know. No more checking back every day.",
  },
  {
    icon: Shield,
    title: "Photos help us find it faster",
    description:
      "Got a picture of your bag or laptop? Upload it. It makes matching way more accurate.",
  },
  {
    icon: ShieldCheck,
    title: "Your info stays private",
    description:
      "We don't share your details until there's a confirmed match and you say it's okay.",
  },
];
