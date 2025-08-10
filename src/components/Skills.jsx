import React from 'react';
import { useScrollAnimation } from '../hooks/UseScrollAnimation';

const Skills = () => {
  const isVisible = useScrollAnimation();

  const languagesFrameworks = [
    {
      name: "HTML",
      level: 95,
      imgUrl: "https://cdn-icons-png.freepik.com/512/3128/3128323.png",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "CSS",
      level: 90,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDwBd9LoQzBAZigXXxzQ0kKn6TwyrE0Y7Rg&s",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "JavaScript",
      level: 92,
      imgUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      name: "React JS",
      level: 88,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Express JS",
      level: 85,
      imgUrl: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Node JS",
      level: 87,
      imgUrl: "https://cdn-icons-png.freepik.com/256/15484/15484303.png?semt=ais_hybrid",
      color: "from-green-500 to-green-600"
    },
    {
      name: "PHP",
      level: 80,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrelwqGMjl6ct8aULoAcWXwuND-6PBkvOyC-KOZRdDWmeaMjgjKvyPixeY5zK0savjBI&usqp=CAU",
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Laravel",
      level: 78,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3T7YuUihuxhlHnDOgHJp6wwvvBx4ZcwmBg&s",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Python",
      level: 82,
      imgUrl: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
      color: "from-blue-400 to-yellow-400"
    }
  ];

  const tools = [
    {
      name: "VS Code",
      level: 95,
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Git",
      level: 90,
      imgUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Laragon",
      level: 88,
      imgUrl: "https://cdn.worldvectorlogo.com/logos/laragon.svg",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Terminal",
      level: 90,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEiUxhq8rE9PRZywY8yqbErqkdA-4YB8r4A&s",
      color: "from-gray-700 to-black"
    },
    {
      name: "Postman",
      level: 85,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaC1Wwhn9L7cfCZluV6THjvosD4RJkoW7jQ&s",
      color: "from-orange-400 to-orange-500"
    }
  ];

  const SkillCard = ({ skill, index, delay = 0 }) => (
    <div
      className={`group bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
        isVisible['skills-content']
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay + index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
          <img
            src={skill.imgUrl}
            alt={skill.name}
            className="w-full h-full object-contain"
          />
        </div>
        <h4 className="font-bold text-gray-900 text-lg">{skill.name}</h4>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="skills-content"
          data-animate
          className={`transition-all duration-1000 ${
            isVisible['skills-content']
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>💼</span>
              Technical Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
            {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels across various technologies
            </p> */}
          </div>

          {/* Languages & Frameworks */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Languages & Frameworks
              </h3>
              <p className="text-gray-600">Programming languages and frameworks I work with</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languagesFrameworks.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} delay={0} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Development Tools
              </h3>
              <p className="text-gray-600">Tools and software I use for development</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} delay={600} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
