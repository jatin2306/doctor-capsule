import Sidebar from "../../Components/Onbarding/Sidebar/Sidebar";
import Form from "../../Components/Onbarding/Form/Form";
import Header from "../../Components/Onbarding/Header/Header";

const Onbarding = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default Onbarding;
