import type { ContentSection } from "@/types";
import { FlaskConical, Lightbulb, ShieldAlert, CaseSensitive } from "lucide-react";
import { cn } from "@/lib/utils";

const calloutStyles = {
  science: { icon: FlaskConical, className: "border-sage/50 bg-sage/10 text-forest" },
  tip: { icon: Lightbulb, className: "border-apricot/40 bg-apricot/10 text-[#8A5424]" },
  caution: { icon: ShieldAlert, className: "border-apricot/50 bg-apricot/10 text-[#8A5424]" },
  case: { icon: CaseSensitive, className: "border-forest/20 bg-sand/70 text-forest" },
};

function inlineFormat(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section) => {
        const callout = section.callout ? calloutStyles[section.callout.type] : null;
        const Icon = callout?.icon;
        return (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="mb-4 text-2xl sm:text-[28px]">{section.heading}</h2>
            <div className="prose-nutri">
              {section.paragraphs?.map((p, i) => (
                <p key={i}>{inlineFormat(p)}</p>
              ))}
              {section.bullets?.length ? (
                <ul>
                  {section.bullets.map((b, i) => (
                    <li key={i}>{inlineFormat(b)}</li>
                  ))}
                </ul>
              ) : null}
              {section.steps?.length ? (
                <ol>
                  {section.steps.map((s, i) => (
                    <li key={i}>{inlineFormat(s)}</li>
                  ))}
                </ol>
              ) : null}
              {section.table ? (
                <div className="overflow-x-auto rounded-card border border-line">
                  <table>
                    <thead>
                      <tr>
                        {section.table.head.map((h) => (
                          <th key={h}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j}>{inlineFormat(cell)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>
            {section.callout && callout && Icon ? (
              <aside className={cn("mt-6 flex gap-3 rounded-card border p-4 text-sm leading-7 sm:p-5", callout.className)}>
                <Icon className="mt-1 h-4 w-4 shrink-0" />
                <p>{section.callout.text}</p>
              </aside>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
