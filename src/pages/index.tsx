import Layout from "@/layout/Layout";
import Splash from "./splash/Splash";
import SignIn from "./signIn/SignIn";
import CreateAcc from "./createAcc/CreateAcc";

export default function Home() {
  return (
    <Layout>
      <CreateAcc />
      <div className=""></div>
    </Layout>
  );
}
