import { FunctionComponent } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Index: FunctionComponent = () => {
  return (
    <Layout>
      <SEO />
      <h1>Demo Page</h1>
      <style jsx>{`
        h1 {
          font-size: 5em;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
