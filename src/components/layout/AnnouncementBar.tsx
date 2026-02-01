import { useEffect, useState } from "react";
import { Calendar, Moon } from "lucide-react";

// Helper function to convert Gregorian to Hijri date (approximate)
const getHijriDate = (): { day: number; month: string; year: number } => {
  // Fallback approximate calculation (kept for environments without Intl support)
  const today = new Date();
  const gregorianYear = today.getFullYear();
  const gregorianMonth = today.getMonth();
  const gregorianDay = today.getDate();

  // Approximate Hijri calculation
  const jd = Math.floor((1461 * (gregorianYear + 4800 + Math.floor((gregorianMonth - 14) / 12))) / 4) +
    Math.floor((367 * (gregorianMonth - 2 - 12 * Math.floor((gregorianMonth - 14) / 12))) / 12) -
    Math.floor((3 * Math.floor((gregorianYear + 4900 + Math.floor((gregorianMonth - 14) / 12)) / 100)) / 4) +
    gregorianDay - 32075;

  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const l2 = l - 10631 * n + 354;
  const j = Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) +
    Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
  const l3 = l2 - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const month = Math.floor((24 * l3) / 709);
  const day = l3 - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;

  const hijriMonths = [
    "Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani",
    "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Sha'ban",
    "Ramadan", "Shawwal", "Dhul Qa'dah", "Dhul Hijjah"
  ];

  return {
    day,
    month: hijriMonths[month - 1] || "Unknown",
    year,
  };
};

const formatHijriIntl = (): string | null => {
  try {
    const today = new Date();
    // Use Intl with the Islamic calendar if available
    const formatter = new Intl.DateTimeFormat('en-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const formatted = formatter.format(today);
    // Ensure we append AH if not present
    return formatted.includes('AH') ? formatted : formatted + ' AH';
  } catch (e) {
    return null;
  }
};

const AnnouncementBar = () => {
  const [hijriDate, setHijriDate] = useState<{ day: number; month: string; year: number } | null>(null);
  const [hijriStr, setHijriStr] = useState<string | null>(null);

  useEffect(() => {
    // Prefer Intl if available for accurate Hijri date
    const intl = formatHijriIntl();
    if (intl) {
      setHijriStr(intl);
    } else {
      const d = getHijriDate();
      setHijriDate(d);
      setHijriStr(`${d.day} ${d.month} ${d.year} AH`);
    }
  }, []);

  const announcements = [
    "🌙 New Qawwali videos every Friday",
    "📿 Subscribe for spiritual enlightenment",
    "🎵 Experience the divine through music",
    "✨ Join our growing community of Sufi lovers",
  ];

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="flex items-center justify-between container mx-auto px-4">
        {/* Islamic Date Display */}
        <div className="flex items-center gap-2 text-sm font-medium whitespace-nowrap">
          <Moon className="h-4 w-4" />
          {hijriStr && (
            <span className="truncate">{hijriStr}</span>
          )}
        </div>

        {/* Scrolling Announcements */}
        <div className="flex-1 overflow-hidden mx-4">
          <div className="flex animate-scroll-left">
            {[...announcements, ...announcements].map((announcement, index) => (
              <span
                key={index}
                className="text-sm whitespace-nowrap mx-8 font-medium"
              >
                {announcement}
              </span>
            ))}
          </div>
        </div>

        {/* Gregorian Date */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium whitespace-nowrap">
          <Calendar className="h-4 w-4" />
          <span>{new Date().toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
          })}</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
