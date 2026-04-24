import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "NGO Operations Architecture",
    description:
      "Designing complete operational structures including programs, workflows, and execution models.",
  },
  {
    icon: Rocket,
    title: "Digital Transformation for NGOs",
    description:
      "Building structured fundraising channels including donation boxes, campaigns, and donor engagement systems.",
  },
  {
    icon: Users,
    title: "Fundraising Systems",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Field Operations & Beneficiary Management",
    description:
      "Designing systems for beneficiary verification, distribution, and tracking.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building systems 
              <span className="font-serif italic font-normal text-white">
                {" "}
                that power real impact.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I specialize in building complete operational ecosystems for NGOs.
              </p>
              <p>
                From legal setup and program design to donor management, field execution, and digital transformation, I create systems that ensure organizations run efficiently and scale sustainably.
              </p>
              <p>
                With hands-on experience across operations, fundraising, IT systems, and field management, I don’t just design strategies. I implement them in real-world environments.
              </p>
              <p>
                My goal is simple: build NGOs that are structured, transparent, and capable of delivering consistent impact.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Strong NGOs are not built on effort, they are built on systems that work."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
