import Charts from "../components/Charts";
import Hero from "../components/Hero";
import NewRelease from "../components/NewRelease";
import DefaultLayout from "../Layout/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="w-full mx-auto bg-[#1D2123]">
        <div className="flex w-full">
          <div className="w-full px-6 md:px-0 mb-32">
            <div className="flex flex-col md:flex-row mt-6 gap-4">
              <div className="md:w-7/12">
                <Hero />
              </div>
              <div className="md:w-5/12">
                <Charts />
              </div>
            </div>
            <div className="w-full mr-10">
              <NewRelease />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
