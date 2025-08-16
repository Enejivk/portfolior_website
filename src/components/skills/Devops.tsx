const Devops = () => {
  return (
    <div> 
      <div className="skills__content">
        <h3 className="skills__title">DevOps & System Admin</h3>
        <div className="skills__box">
          <div className="skills__group">
            {[
              { name: "GitHub Actions", icon: "bx bxl-github skills_icon" },
              { name: "CI/CD", icon: "bx bx-git-branch skills_icon" },
              { name: "Shell Scripting", icon: "bx bx-terminal skills_icon" },
            ].map((skill, index) => (
              <div className="skills__data" key={index}>
                <i className={skill.icon}></i>
                <div>
                  <h3 className="skills__name">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="skills__group">
            {[
              { name: "Docker", icon: "bx bxl-docker skills_icon" },
              { name: "AWS", icon: "bx bxl-amazon skills_icon" },
              { name: "Nginx", icon: "bx bx-server skills_icon" },
            ].map((skill, index) => (
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
    </div>
  );
};

export default Devops;
