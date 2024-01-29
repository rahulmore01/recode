import FeatureTitle from "../features/title";
import {
  Availability,
  Colors,
  Music,
  SchedulingLinks,
  Team,
  Team1,
  Todo,
} from "@/components/features/card";
const Works = () => {
  const features = [
    {
      step: 1,
      title: "Nonprofits Post Content Requests ",
      id: "todo-list",
      card: Todo,
      description:
        "Nonprofits submit requests detailing the types of custom branded content needed for their social media and campaigns.",
    },
    {
      step: 2,
      title: "Creatives Claim Aligned Requests",
      id: "colors",
      card: Colors,
      description:
        "Creatives review open requests and claim nonprofit projects matching their skills, values and availability.",
    },
    {
      step: 3,
      title: "Creatives Develop Custom Assets",
      id: "availability",
      card: Availability,
      description:
        "After claiming a request, creatives design branded social posts, graphics, videos or other assets based on provided nonprofit brand guidelines.",
    },
    {
      step: 4,
      title: "Nonprofits Launch Voting Rounds",
      id: "music",
      card: Music,
      description:
        "Nonprofits select their favorite 3-6 submissions and launch community voting rounds to decide on winning entries.",
    },
    {
      step: 5,
      title: "Winning Entry Gets Published",
      id: "scheduling-links",
      card: SchedulingLinks,
      description:
        "The nonprofit publishes the community-chosen submission on their social platforms and marketing materials.",
    },

    {
      step: 6,
      title: "Community Engagement Amplifies Reach",
      id: "team1",
      card: Team,
      description:
        "The collective community shares and engages with published creative posts to extend their reach and impact.",
    },
    {
      step: 7,
      title: "Creatives Earn Points for Rewards",
      id: "team",
      card: Team1,
      description:
        "Creatives earn points and build leaderboard status throughout the process, redeeming credits for rewards.",
    },
  ];
  return (
    <div className="mx-auto max-w-6xl px-4">
      <h3 className="primary text-[28px] lg:text-[32px] text-darkPink w-full text-center lg:text-left">
        How it works
      </h3>
      <div className="flex w-full items-start gap-20">
        <div className=" w-full ">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>
                  <div className="flex flex-col">
                    <span>{feature.title}</span>
                    <span className="secondary SpaceMonoRegular pt-4">
                      {feature.description}
                    </span>
                  </div>
                </FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square w-full rounded-2xl bg-gray-100">
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
