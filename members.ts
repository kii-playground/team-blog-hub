import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "kii",
    name: "kii",
    role: "Owner",
    bio:
      "I love Web Front-end & Blockchain",
    avatarSrc: "/avatars/kii.jpeg",
    sources: [
      "https://zenn.dev/kii/feed",
      "https://note.com/kiichi_sugihara/rss",
    ],
    includeUrlRegex: "note.com|zenn.dev",
    twitterUsername: "kiichi_sugihara",
    githubUsername: "KiichiSugihara",
    websiteUrl: "https://scrapbox.io/kii-cafe/",
  },
];
