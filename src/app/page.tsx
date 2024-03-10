import { TeamArea } from "@/components/team/team-area";
import { ThemeToggler } from "@/components/themes/theme-toggler";


const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-2xl w-full">
        <ThemeToggler />

        <TeamArea />
      </div>
    </div>
  );
}

export default Page;