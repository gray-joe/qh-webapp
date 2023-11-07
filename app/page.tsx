import Logo from './components/Logo';
import HomeLink from './components/HomeLinks';
import Header from './components/Header';

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Logo />

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-centre">
          <HomeLink
            title="Quality Metrics"
            description="Find in-depth information about the level of quality in your app."
            href="/quality"
          />

          <HomeLink
            title="Productivity Metrics"
            description="Find in-depth information about the productivity of your Engineering team(s)."
            href="/productivity"
          />

          <HomeLink
            title="Recommendations"
            description="See your recommendations for improved quality & productivity!"
            href="/recommendations"
          />
        </div>
      </div>
    </main>
  );
}
