import Image from "next/image";
import LoginBox from "./components/LoginBox";
import TopBar from "./components/TopBar";

export default function Home() {
  const dogepicURL =
    "https://w7.pngwing.com/pngs/491/941/png-transparent-ice-cream-dogecoin-doge-snake-dodge-doge-ice-cream-cream-mammal-food-thumbnail.png";
  const dogesize = 600;
  return (
    <div className="bg-stone-200 ">
      {/* <div className="flex justify-center rounded-full">
        <Image
          src={dogepicURL}
          alt={"yes"}
          width={dogesize}
          height={dogesize}
        />
      </div> */}
      <TopBar />
      <LoginBox />
    </div>
  );
}
