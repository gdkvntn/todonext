import { supabase } from "@/supabaseClient";
import Splash from "./splash/Splash";
import { useQuery } from "react-query";
import HomeScreen from "../components/HomeScreen/HomeScreen";

export default function Home() {
  const { data } = useQuery("user", async () => {
    return await supabase.auth.getUser();
  });

  if (!data?.data.user) {
    return <Splash />;
  } else {
    return <HomeScreen user={data.data.user} />;
  }
}
