import { readFile, writeFile } from "node:fs/promises";

const account = "Jairoy2426";
const calendarUrl = `https://github.com/users/${account}/contributions`;
const palette = ["#e3e5ee", "#bbc7ff", "#859aff", "#4c68f5", "#2845c8"];
const dayLength = 86_400_000;
const month = new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" });
const dateLabel = new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" });

function attribute(tag, name) {
  return tag.match(new RegExp(`\\s${name}="([^"]+)"`))?.[1];
}

function parseCalendar(html) {
  const counts = new Map();
  for (const [, tag, label] of html.matchAll(/<tool-tip\b([^>]+)>([^<]*)<\/tool-tip>/g)) {
    const id = attribute(tag, "for");
    const count = label.trim().match(/^(No|[\d,]+) contributions? on /i);
    if (id && count) counts.set(id, count[1].toLowerCase() === "no" ? 0 : Number(count[1].replaceAll(",", "")));
  }

  const days = [];
  for (const [, tag] of html.matchAll(/<td\b([^>]+)>/g)) {
    const iso = attribute(tag, "data-date");
    const level = attribute(tag, "data-level");
    const count = counts.get(attribute(tag, "id"));
    if (iso && /^\d{4}-\d{2}-\d{2}$/.test(iso) && /^[0-4]$/.test(level) && Number.isInteger(count)) {
      days.push({ date: new Date(`${iso}T00:00:00Z`), level: Number(level), count });
    }
  }

  days.sort((a, b) => a.date - b.date);
  if (days.length < 350 || days.length > 371 || days.some((day, i) => i && day.date - days[i - 1].date !== dayLength)) {
    throw new Error("GitHub did not return a complete contribution calendar. Keeping the previous artwork.");
  }
  return days;
}

function activityArtwork(days) {
  const first = days[0].date;
  const last = days.at(-1).date;
  const origin = first.getTime() - first.getUTCDay() * dayLength;
  const monthly = new Map();
  const cells = [];
  const monthLabels = [];
  let total = 0;
  let active = 0;
  let run = 0;
  let longest = 0;
  let busiest = 0;

  for (const { date, count, level } of days) {
    const key = date.toISOString().slice(0, 7);
    const x = 42 + 13.5 * Math.floor((date.getTime() - origin) / (7 * dayLength));
    const y = 92 + 13.5 * date.getUTCDay();
    cells.push(`<rect x="${x}" y="${y}" width="10.5" height="10.5" rx="2" fill="${palette[level]}"/>`);
    if (!monthly.has(key)) {
      monthly.set(key, { name: month.format(date), count: 0 });
      if (x < 738 && (!monthLabels.length || x - monthLabels.at(-1).x >= 36)) {
        monthLabels.push({ x, name: month.format(date) });
      }
    }
    monthly.get(key).count += count;
    total += count;
    active += Number(count > 0);
    run = count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
    busiest = Math.max(busiest, count);
  }

  const months = [...monthly.values()];
  const peak = Math.max(1, ...months.map(({ count }) => count));
  const bars = months.map(({ name, count }, i) => {
    const x = 43 + i * 39;
    const height = Math.round(106 * count / peak);
    return `<rect x="${x}" y="${488 - height}" width="29" height="${height}" rx="3" fill="${count === peak ? palette[4] : "#222924"}"/><text x="${x + 14.5}" y="513" text-anchor="middle" class="label">${name}</text>`;
  }).join("\n    ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="540" viewBox="0 0 800 540" role="img" aria-labelledby="title description">
  <title id="title">GitHub activity for ${account}</title>
  <desc id="description">${total} contributions from ${dateLabel.format(first)} to ${dateLabel.format(last)}. ${active} active days, ${longest} days in the longest streak, and ${busiest} contributions on the busiest day.</desc>
  <style>
    .serif { font-family: Georgia, Times New Roman, serif; fill: #131816 }
    .label { font: 12px monospace; fill: #48504d }
    .detail { font: 15px Arial, sans-serif; fill: #414848 }
  </style>
  <rect width="800" height="230" rx="14" fill="#f5f2e9"/>
  <text x="41" y="54" class="serif" font-size="37">GitHub activity<tspan fill="#2845c8">.</tspan></text>
  <text x="758" y="52" text-anchor="end" class="label">Through ${dateLabel.format(last)}</text>
  <g>
    ${cells.join("\n    ")}
  </g>
  ${monthLabels.map(({ x, name }) => `<text x="${x}" y="204" class="label">${name}</text>`).join("\n  ")}
  <rect y="244" width="800" height="296" rx="14" fill="#f5f2e9"/>
  <text x="42" y="283" class="label">ROLLING CONTRIBUTION CALENDAR</text>
  <text x="40" y="345" class="serif" font-size="49">${total.toLocaleString("en-US")} <tspan font-style="italic">contributions</tspan></text>
  <path d="M42 488H545M581 280V510" fill="none" stroke="#cbc9bf"/>
  <g>
    ${bars}
  </g>
  <text x="610" y="316" class="serif" font-size="35">${active}</text>
  <text x="611" y="340" class="detail">Active days</text>
  <text x="610" y="397" class="serif" font-size="35">${longest} days</text>
  <text x="611" y="421" class="detail">Longest streak</text>
  <text x="610" y="478" class="serif" font-size="35">${busiest}</text>
  <text x="611" y="502" class="detail">Busiest day</text>
</svg>
`;
}

const source = process.argv[2];
let html;
if (source) {
  html = await readFile(source, "utf8");
} else {
  const response = await fetch(calendarUrl, {
    headers: { accept: "text/html", "accept-language": "en-US" },
    signal: AbortSignal.timeout(20_000),
  });
  if (!response.ok) throw new Error(`GitHub calendar returned HTTP ${response.status}`);
  html = await response.text();
}
await writeFile(new URL("../assets/activity.svg", import.meta.url), activityArtwork(parseCalendar(html)));
