import fs from "fs";
import path from "path";

export function isResumeAvailable(): boolean {
  const resumePath = path.join(process.cwd(), "public", "resume.pdf");
  return fs.existsSync(resumePath);
}
