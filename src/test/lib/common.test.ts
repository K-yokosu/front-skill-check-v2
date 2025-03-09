import { getLabelFromOption } from "@/lib/common";

const FRAMEWORKS: { value: number; label: string }[] = [
  {
    value: 1,
    label: "Next.js"
  },
  {
    value: 2,
    label: "SvelteKit"
  },
  {
    value: 3,
    label: "Nuxt.js"
  },
  {
    value: 4,
    label: "Remix"
  },
  {
    value: 5,
    label: "Astro"
  }
];

describe("getLabelFromOption", () => {
  test("正常パターン", () => {
    expect(getLabelFromOption(FRAMEWORKS, 3)).toBe("Nuxt.js");
  });
});
