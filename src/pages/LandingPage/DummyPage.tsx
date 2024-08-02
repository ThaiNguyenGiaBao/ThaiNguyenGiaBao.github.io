import HeaderOfSection from "./HeaderOfSection";
const DummyPage: React.FC = () => {
  return (
    <div id="dummy" className="w-full flex justify-center py-4">
      <div className="w-4/5">
        <HeaderOfSection
          title="Dummy Page"
          icons={"🥳"}
          navLink={"/project"}
          linkText={"See more"}
        />
        <div className="mt-2">
          <p>This section is unavailable at the moment.</p>
        </div>
      </div>
    </div>
  );
};

export default DummyPage;
