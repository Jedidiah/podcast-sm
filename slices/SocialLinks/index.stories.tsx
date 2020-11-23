import { UnwrappedSocialLinks } from ".";

export default {
  title: "slices/SocialLinks",
  component: UnwrappedSocialLinks,
  argTypes: {
    twitter: {
      control: "text",
      defaultValue: "https://twitter.com/seagazingpod",
    },
    instagram: {
      control: "text",
      defaultValue: "https://twitter.com/seagazingpod",
    },
    youtube: {
      control: "text",
      defaultValue: "https://twitter.com/seagazingpod",
    },
    soundcloud: {
      control: "text",
      defaultValue: "https://twitter.com/seagazingpod",
    },
  },
};

export const Default = ({ ...props }) => {
  return <UnwrappedSocialLinks {...props} />;
};

Default.args = {};
