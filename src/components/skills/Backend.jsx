const Backend = () => {
  // Updated backend skills to reflect Python, PostgreSQL, MongoDB, and trending tools
  const backendSkills1 = [
    {
      name: "Python",
      icon: "bx bxl-python skills_icon",
    },
    {
      name: "PostgreSQL",
      icon: "bx bxl-postgresql skills_icon",
    },
    {
      name: "MongoDB",
      icon: "bx bxl-mongodb skills_icon",
    },
  ];

  const backendSkills2 = [
    {
      name: "Django",
      icon: "bx bxl-django skills_icon",
    },
    {
      name: "FastAPI",
      icon: "bx bx-bolt-circle skills_icon",
    },
    {
      name: "Redis",
      icon: "bx bx-memory-card skills_icon",
    },
  ];

  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development</h3>
      <div className="skills__box">
        <div className="skills__group">
          {backendSkills1.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {backendSkills2.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;
