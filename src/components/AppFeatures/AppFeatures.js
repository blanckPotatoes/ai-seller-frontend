import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "High-Quality Content Generation",
    description:
      "Say goodbye to low-quality articles and blog posts. With our SAAS AI content generator"+
       "you can consistently generate top-notch content that engages and converts your audience.",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Time and Cost Efficiency",
    description:
      "Reduce the need for hiring additional writers or freelancers, making content production more cost-effective and scalable.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Customization and Personalization",
    description:
      "Generate personalized content for different audience segments, enhancing engagement and relevance to your target audience.",
    href: "#",
    icon: LockClosedIcon,
  },
];

export default function AppFeatures() {
  return (
    <div className="bg-blue-900 py-24 sm:py-32 w-screen h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-yellow-400">
            Accelerate Your Workflow
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Streamline your application with our tools
          </p>
          <p className="mt-6 text-lg leading-8 text-red-200">
            Explore our suite of tools designed to enhance your app's performance. Utilize our cutting-edge features for an unmatched experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-yellow-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-yellow-200">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-yellow-400 hover:text-yellow-300"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
