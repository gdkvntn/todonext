import { supabase } from "@/supabaseClient";
import Splash from "./splash/Splash";
import { useQuery } from "react-query";
import Loader from "@/components/Loader/Loader";
import HomeScreen from "./home/HomeScreen";

export default function Home() {
  const { data, isLoading } = useQuery("user", async () => {
    return await supabase.auth.getUser();
  });

  if (!data?.data.user) {
    return <Splash />;
  } else {
    return <HomeScreen data={data.data.user} />;
  }
}
