function FeatureSection() {
  const features = [
    {
      title: "Task Assignment",
      description: "Easily assign tasks to team members with clear responsibilities and deadlines.",
      icon: "📌",
    },
    {
      title: "Progress Tracking",
      description: "Monitor the progress of tasks in real-time and ensure timely completion.",
      icon: "📊",
    },
    {
      title: "Deadline Management",
      description: "Set deadlines for tasks and receive notifications to keep everyone on track.",
      icon: "⏳",
    },
    {
      title: "Workflow Automation",
      description: "Define workflows and automate repetitive task assignments.",
      icon: "⚙️",
    },
    {
      title: "Collaboration Tools",
      description: "Enable seamless communication and collaboration within teams.",
      icon: "🤝",
    },
    {
      title: "Analytics Dashboard",
      description: "Gain insights into task completion rates, bottlenecks, and team efficiency.",
      icon: "📈",
    },
  ];

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily manage
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "} your tasks
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mt-20 px-10">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <span className="text-3xl">{feature.icon}</span>
            <div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
