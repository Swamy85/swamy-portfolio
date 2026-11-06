import { SiCodechef, SiGeeksforgeeks, SiHackerrank, SiLeetcode } from "react-icons/si";

// Edit this file whenever the manually verified profile figures are refreshed.
const codingProfiles = {
  lastUpdated: "2026-11-07",
  overall: {
    problemsSolved: "500+",
    language: "Java",
    closingText: "500+ problems solved, countless approaches explored, and a continuous commitment to becoming a better problem solver.",
  },
  platforms: [
    {
      key: "codechef",
      name: "CodeChef",
      username: "swamyk_85",
      url: "https://www.codechef.com/users/swamyk_85",
      icon: SiCodechef,
      accent: "lime",
      stats: [
        { label: "Problems solved", value: "426" },
        { label: "Achievement", value: "Problem Solver Silver Badge" },
      ],
      difficulty: null,
      contestRating: null,
      streak: null,
    },
    {
      key: "geeksforgeeks",
      name: "GeeksforGeeks",
      username: "swamyk_85",
      url: "https://www.geeksforgeeks.org/profile/swamyk_85",
      icon: SiGeeksforgeeks,
      accent: "green",
      stats: [
        { label: "Problems solved", value: "236" },
        { label: "Coding score", value: "612" },
        { label: "Institute rank", value: "74" },
      ],
      difficulty: null,
      contestRating: null,
      streak: null,
    },
    {
      key: "hackerrank",
      name: "HackerRank",
      username: "22881A0585",
      url: "https://www.hackerrank.com/profile/22881A0585",
      detailUrl: "https://www.hackerrank.com/22881A0585/hackos",
      icon: SiHackerrank,
      accent: "mint",
      stats: [
        { label: "Hackos", value: "2,464" },
      ],
      difficulty: null,
      contestRating: null,
      streak: null,
    },
    {
      key: "leetcode",
      name: "LeetCode",
      username: "swamyk_85",
      url: "https://leetcode.com/u/swamyk_85/",
      icon: SiLeetcode,
      accent: "orange",
      stats: [
        { label: "Total solved problems", value: "235" },
      ],
      difficulty: null,
      contestRating: null,
      streak: null,
    },
  ],
};

export default codingProfiles;
