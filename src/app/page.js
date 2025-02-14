import { API_URL } from "@/utils/constant";

export default function Home() {
  console.log(API_URL);
  return (
    <div className="w-full h-screen text-center text-xl font-semibold font-serif bg-[url('/images/charizard.jpg')] ">
      <h1>welcome to our site</h1>
  </div>
  );
}
