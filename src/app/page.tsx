import { getBoardData } from "@/_lib/api";

export default async function Home() {
 const boardData = await getBoardData();
 console.log("This is the json data:", boardData);

  return <div className="">Homepage</div>;
}
