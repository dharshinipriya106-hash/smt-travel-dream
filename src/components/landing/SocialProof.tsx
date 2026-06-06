import { Star, BadgeCheck, ShieldCheck, Award } from "lucide-react";
import a1 from "@/assets/smt/a1.jpg";
import a2 from "@/assets/smt/a2.jpg";
import a3 from "@/assets/smt/a3.jpg";

export function SocialProof() {
  return (
    <section className="container-pg pt-10 md:pt-14">
      <div className="rounded-xl border border-border bg-surface px-5 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-border shadow-sm font-bold text-xl">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(45deg,#4285F4,#EA4335,#FBBC05,#34A853)" }}>G</span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-1.5 text-sm font-semibold">4.9 / 5</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Google rated by 500+ travelers
            </p>
          </div>
          <div className="hidden sm:flex -space-x-2 ml-2">
            {[a1, a2, a3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                width={36}
                height={36}
                loading="lazy"
                className="h-9 w-9 rounded-full border-2 border-background object-cover"
              />
            ))}
            <span className="h-9 w-9 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold flex items-center justify-center border-2 border-background">
              +1k
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge icon={ShieldCheck}>Trusted Local Agency</Badge>
          <Badge icon={BadgeCheck}>Govt Registered</Badge>
          <Badge icon={Award}>Since 2015</Badge>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, children }: { icon: typeof Star; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-background border border-border px-3 py-1.5 text-xs font-medium">
      <Icon className="h-3.5 w-3.5 text-primary" />
      {children}
    </span>
  );
}
