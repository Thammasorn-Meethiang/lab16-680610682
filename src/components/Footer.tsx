import { type FooterProps } from "../lib/Footer";

export default function Footer({
  firstName,
  lastName,
  studentId,
}: FooterProps) {
  return (
    <footer className="w-full border-t bg-background">
      <div className="px-4 py-3 text-center text-xs text-muted-foreground">
        จัดทำโดย {firstName} {lastName} - รหัสนักศึกษา {studentId}
      </div>
    </footer>
  );
}
