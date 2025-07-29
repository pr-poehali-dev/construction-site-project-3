import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Ф</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Феникс-Строй</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
            <a href="#projects" className="text-gray-600 hover:text-primary transition-colors">Проекты</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:block">Получить консультацию</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-orange-50 py-20 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Инженерные
              <span className="text-primary block">коммуникации</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Профессиональное строительство систем газоснабжения, водоснабжения 
              и водоотведения. Полный цикл инженерных работ под ключ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Рассчитать стоимость
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Наши работы
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-green-500" />
                <span className="text-sm text-gray-600">Лицензия СРО</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} className="text-blue-500" />
                <span className="text-sm text-gray-600">12+ лет опыта</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/img/0d413137-3c51-43ba-943f-f224b24fc3bf.jpg" 
              alt="Инженерные коммуникации" 
              className="rounded-lg shadow-2xl animate-scale-in"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={24} className="text-green-500" />
                <div>
                  <div className="font-semibold text-gray-900">300+</div>
                  <div className="text-sm text-gray-600">Объектов сдано</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши специализации</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по проектированию и монтажу инженерных систем
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Flame",
                title: "Газоснабжение",
                description: "Проектирование и монтаж газовых сетей, газопроводов среднего и низкого давления",
                color: "text-red-500"
              },
              {
                icon: "Droplet",
                title: "Водоснабжение", 
                description: "Строительство водопроводных сетей, насосных станций и водозаборных сооружений",
                color: "text-blue-500"
              },
              {
                icon: "Waves",
                title: "Водоотведение",
                description: "Канализационные сети, очистные сооружения и системы ливневой канализации",
                color: "text-cyan-500"
              },
              {
                icon: "Zap",
                title: "Электроснабжение",
                description: "Проектирование и монтаж электрических сетей для инженерных объектов",
                color: "text-yellow-500"
              },
              {
                icon: "Thermometer",
                title: "Теплоснабжение",
                description: "Тепловые сети, котельные и системы централизованного теплоснабжения",
                color: "text-orange-500"
              },
              {
                icon: "Settings",
                title: "Техническое обслуживание",
                description: "Регулярное ТО, диагностика и ремонт инженерных коммуникаций",
                color: "text-gray-500"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-l-4 border-l-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className={service.color} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "12+", label: "Лет опыта", icon: "Calendar" },
              { number: "300+", label: "Объектов", icon: "Building" },
              { number: "50км+", label: "Сетей проложено", icon: "Route" },
              { number: "24/7", label: "Аварийная служба", icon: "Phone" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in text-center">
                <Icon name={stat.icon} size={32} className="mx-auto mb-3 opacity-80" />
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Почему выбирают нас</h2>
              <p className="text-lg text-gray-600">
                Феникс-Строй — надежный партнер в области инженерных коммуникаций. 
                Мы обеспечиваем качественное выполнение работ с соблюдением всех 
                технических требований и стандартов безопасности.
              </p>
              
              <div className="space-y-4">
                {[
                  "Лицензия СРО и все необходимые допуски",
                  "Собственный парк специализированной техники",
                  "Опытные инженеры и монтажные бригады",
                  "Соблюдение сроков и гарантия качества",
                  "Аварийная служба работает круглосуточно",
                  "Полное сопровождение от проекта до сдачи"
                ].map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-500" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Icon name="FileCheck" size={24} className="text-orange-500" />
                    <span>СРО и допуски</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Являемся членом СРО строителей. Имеем все допуски для работ 
                    на особо опасных и технически сложных объектах.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Icon name="Truck" size={24} className="text-blue-500" />
                    <span>Собственный автопарк</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Экскаваторы, трубоукладчики, сварочное оборудование — 
                    весь необходимый парк техники в собственности компании.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Icon name="Clock" size={24} className="text-green-500" />
                    <span>Круглосуточная служба</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Аварийно-диспетчерская служба работает 24/7. 
                    Оперативное устранение аварий на инженерных сетях.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Реализованные проекты</h2>
            <p className="text-xl text-gray-600">
              Примеры успешно выполненных работ по инженерным коммуникациям
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ЖК «Северный квартал»",
                description: "Полный комплекс внутриплощадочных сетей водоснабжения и канализации",
                type: "Жилой комплекс",
                year: "2023"
              },
              {
                title: "Промзона «Индустрия»",
                description: "Газопровод среднего давления протяженностью 3,2 км",
                type: "Промышленный объект", 
                year: "2023"
              },
              {
                title: "Микрорайон «Заречье»",
                description: "Реконструкция системы теплоснабжения и ГВС",
                type: "Реконструкция",
                year: "2022"
              },
              {
                title: "ТЦ «Максима»",
                description: "Внутренние сети водоснабжения, канализации и газоснабжения",
                type: "Торговый центр",
                year: "2022"
              },
              {
                title: "КОС «Восток»",
                description: "Строительство канализационных очистных сооружений",
                type: "Инфраструктура",
                year: "2021"
              },
              {
                title: "Завод «Техмаш»",
                description: "Внешние сети водоснабжения и промышленная канализация",
                type: "Промышленный объект",
                year: "2021"
              }
            ].map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{project.year}</span>
                  </div>
                  <div className="text-sm text-orange-600 font-medium">{project.type}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">
              Обсудим ваш проект и предложим оптимальное техническое решение
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">+7 (495) 789-12-34</div>
                      <div className="text-gray-600">Отдел продаж</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                      <Icon name="AlertTriangle" size={20} className="text-red-500" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">+7 (495) 789-12-35</div>
                      <div className="text-gray-600">Аварийная служба 24/7</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">info@feniks-stroy.ru</div>
                      <div className="text-gray-600">Техническая поддержка</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">г. Москва, ул. Инженерная, д. 42</div>
                      <div className="text-gray-600">Офис и склад материалов</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Заявка на расчет</CardTitle>
                <CardDescription>Опишите ваш проект для получения коммерческого предложения</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                </div>
                <Input placeholder="Email" />
                <Input placeholder="Название организации" />
                <Textarea placeholder="Описание проекта: тип объекта, требуемые коммуникации, сроки" rows={4} />
                <Button className="w-full" size="lg">
                  Отправить заявку
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Ф</span>
                </div>
                <span className="text-xl font-bold">Феникс-Строй</span>
              </div>
              <p className="text-gray-400 mb-4">
                Инженерные коммуникации под ключ с 2012 года
              </p>
              <div className="text-sm text-gray-400">
                ИНН: 7734567890<br />
                СРО №0123456789
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Газоснабжение</li>
                <li>Водоснабжение</li>
                <li>Водоотведение</li>
                <li>Теплоснабжение</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Лицензии СРО</li>
                <li>Реализованные проекты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (495) 789-12-34</div>
                <div>info@feniks-stroy.ru</div>
                <div>г. Москва, ул. Инженерная, 42</div>
                <div className="text-red-400 font-medium">Аварийная служба: +7 (495) 789-12-35</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ООО «Феникс-Строй». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;