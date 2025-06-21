import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#232335] text-white ">
      <div className="h-[40vh] flex justify-center flex-col items-center gap-4 py-4">
        <h1 className="text-5xl font-bold text-green-500 flex flex-row gap-3 pt-5">
          Welcome to My WebPage
          <span>
            <img
              src="cup-of-tea-tea.gif"
              alt="teatime"
              width={50}
              className="rounded-3xl"
            />
          </span>{" "}
        </h1>
        <p className="m-auto w-[80%] text-center">
          Confused about which book to choose? We’ve got you covered! This site is my effort to share the best books that helped me grow—curated to save you time and guide your journey. Discover, learn, and enjoy reading with us!
        </p>
        <div className="flex flex-row gap-2">
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 cursor-pointer to-blue-500 hover:bg-gradient-to-bl  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Start Now
            </button>
          </Link>
          <Link href={"/about"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="h-1 bg-white opacity-10"></div>
      <div className="flex w-[75vw] m-auto flex-col py-10">
        <h1 className="text-xl font-bold text-center p-2 mb-4">
          Your Fan Can buy a book
        </h1>
        <div className="flex flex-row justify-between ">
          <div className="flex items-center flex-col">
            <img src="man.gif" alt="man" width={100} className="rounded-full" />
            <p>Find your self</p>
            <p>Your fan are available for help you</p>
          </div>
          <div className="flex items-center flex-col">
            <img
              src="coin.gif"
              alt="man"
              width={100}
              className="rounded-full "
            />
            <p>Find your self</p>
            <p>Your fan are available for help you</p>
          </div>
          <div className="flex items-center flex-col">
            <img
              src="group.gif"
              alt="man"
              width={100}
              className="rounded-full"
            />
            <p>Find your self</p>
            <p>Your fan are available for help you</p>
          </div>
        </div>
      </div>

      <div className="h-1 bg-white opacity-10"></div>
      <div className="flex w-[75vw] m-auto flex-col py-10">
        <h1 className="text-xl font-bold text-center p-2 mb-4">
          Learn more About Us
        </h1>
        <div className="flex flex-row justify-between ">
          <div className="flex items-center flex-col">
            <img src="man.gif" alt="man" width={100} className="rounded-full" />
            <p>Find your self</p>
            <p>Your fan are available for help you</p>
          </div>
          <div className="flex items-center flex-col">
            <img
              src="coin.gif"
              alt="man"
              width={100}
              className="rounded-full "
            />
            <p>Find your self</p>
            <p>Your fan are available for help you</p>
          </div>
          <div className="flex items-center flex-col">
            <img
              src="group.gif"
              alt="man"
              width={100}
              className="rounded-full"
            />
            <p>Find your self</p>
            <p>Your fan are available for help you</p>
          </div>
        </div>
      </div>
    </div>
  );
}
