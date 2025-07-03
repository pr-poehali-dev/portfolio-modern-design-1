import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const skills = [
    { name: "React", icon: "Code2", level: "Expert" },
    { name: "TypeScript", icon: "FileCode", level: "Advanced" },
    { name: "Node.js", icon: "Server", level: "Advanced" },
    { name: "Python", icon: "Bot", level: "Intermediate" },
    { name: "PostgreSQL", icon: "Database", level: "Advanced" },
    { name: "AWS", icon: "Cloud", level: "Intermediate" },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Полнофункциональная платформа электронной коммерции с React и Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "Современное приложение для управления задачами с real-time обновлениями",
      tech: ["TypeScript", "Socket.io", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Chat Assistant",
      description: "Интеллектуальный чат-бот с интеграцией OpenAI API",
      tech: ["Python", "FastAPI", "React"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 hover-scale">
              <Icon name="Code2" size={64} className="text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Алексей Кодеров
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl">
            Fullstack разработчик с 5+ лет опыта создания современных
            веб-приложений. Специализируюсь на React, Node.js и облачных
            технологиях.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Icon name="Download" className="mr-2" size={20} />
              Скачать CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
            >
              <Icon name="Mail" className="mr-2" size={20} />
              Связаться
            </Button>
          </div>

          <div className="flex gap-6 mt-8">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-purple-400"
            >
              <Icon name="Github" size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-purple-400"
            >
              <Icon name="Linkedin" size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-purple-400"
            >
              <Icon name="Twitter" size={24} />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Технические навыки
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover-scale group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon
                    name={skill.icon}
                    size={32}
                    className="text-purple-400 group-hover:text-pink-400 transition-colors"
                  />
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300"
                  >
                    {skill.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-white text-lg">
                  {skill.name}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Избранные проекты
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover-scale group"
            >
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-md flex items-center justify-center mb-4">
                  <Icon
                    name="Globe"
                    size={48}
                    className="text-purple-400 group-hover:text-pink-400 transition-colors"
                  />
                </div>
                <CardTitle className="text-white text-xl">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                  >
                    <Icon name="Github" className="mr-2" size={16} />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Icon name="ExternalLink" className="mr-2" size={16} />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Готов к сотрудничеству
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ищете разработчика для вашего проекта? Давайте обсудим, как я могу
            помочь воплотить ваши идеи в жизнь.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Icon name="Mail" className="mr-2" size={20} />
              alex@example.com
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Алексей Кодеров. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
