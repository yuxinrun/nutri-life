import type { Article, ContentSection, Reference } from "@/types";

export type ArticleInput = Omit<Article, "kind">;

const defaultRefs: Reference[] = [
  {
    title: "Harvard T.H. Chan School of Public Health – The Nutrition Source",
    publisher: "Harvard University",
    url: "https://www.hsph.harvard.edu/nutritionsource/",
  },
  {
    title: "中国营养学会官网",
    publisher: "中国营养学会",
    url: "https://www.cnsoc.org/",
  },
];

export function buildArticle(input: ArticleInput): Article {
  const sections: ContentSection[] = [
    {
      id: "conclusion",
      heading: "先说结论",
      paragraphs: input.keyPoints.map((point) => `**${point}**`),
      callout: {
        type: "tip",
        text: "本文用于营养科普，不提供个体化诊疗方案。特殊人群请结合医生或临床营养师建议。",
      },
    },
    ...input.sections,
    {
      id: "action",
      heading: "可以立即执行的行动清单",
      steps: [
        "把本文的一两条建议写进下一餐，而不是同时改变所有习惯。",
        "用一周时间观察执行难度与身体感受，再决定是否保留。",
        "遇到疾病、用药或特殊生理阶段，先咨询专业人士再调整饮食。",
      ],
    },
    {
      id: "references",
      heading: "参考资料与延伸阅读",
      paragraphs: [
        "以下资料用于核对本文的科学表述。链接可能随机构网站改版而变化，如失效可通过机构名称检索最新版本。",
      ],
      bullets: [...input.references, ...defaultRefs].map(
        (r) => `${r.title}（${r.publisher ?? "权威资料"}）：${r.url}`,
      ),
    },
  ];

  return { ...input, kind: "article", sections };
}
