import { defineField, defineType } from "sanity";

export const news = defineType({
  name: "news",
  title: "Add News / Announcement",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Write headline (e.g. Sports Day 2026)",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      description: "When this announcement applies or went live.",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload a clear photo",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      description: "Write the full update here",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [],
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "title", date: "date", media: "image" },
    prepare({ title, date, media }) {
      return {
        title: title ?? "Untitled",
        subtitle: date ? new Date(date).toLocaleDateString() : undefined,
        media,
      };
    },
  },
});
