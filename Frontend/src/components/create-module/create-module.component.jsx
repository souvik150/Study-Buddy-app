import { useState } from "react";

const AddModule = (props) => {
  const [modulesName, setModulesName] = useState([]);
  const [modulesDatesToComp, setModulesDatesToComp] = useState([]);

  const handleModuleChange = (event) => {
    setModulesName(event.target.value);
  };

  const handleDaysToCompChange = (event) => {
    setModulesDatesToComp(event.target.value);
  };

  const handleSubmitModule = (event) => {
    event.preventDefault();

    const modules = {
      name: modulesName,
      daysToComplete: modulesDatesToComp,
    };

    props.onSaveModule(modules);

    setModulesName("");
    setModulesDatesToComp("");
  };

  return (
    <div>
      <form className="form-create" onSubmit={handleSubmitModule}>
        <div className="heading-primary">Add Modules</div>
        <label htmlFor="modulename">Module Name</label>
        <input
          type="text"
          required
          onChange={handleModuleChange}
          value={modulesName}
          placeholder="PDE"
          id="modulename"
        />
        <label htmlFor="daystocomp">Days to Complete</label>
        <input
          required
          onChange={handleDaysToCompChange}
          type="number"
          value={modulesDatesToComp}
          placeholder="13"
          id="daystocomp"
        />
        <button type="submit" className="button mar-t-2">
          Add Module
        </button>
      </form>
    </div>
  );
};

export default AddModule;
