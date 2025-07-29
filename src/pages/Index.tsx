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
            <Icon name="Building2" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-gray-900">Строительная компания</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:block">Связаться с нами</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Строительство
              <span className="text-primary block">будущего</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Профессиональные строительные услуги полного цикла. 
              Качественное выполнение работ в установленные сроки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Получить расчет
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Наши работы
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/img/2b3c72f7-319a-493e-87ba-d4eb3092ee98.jpg" 
              alt="Строительные работы" 
              className="rounded-lg shadow-2xl animate-scale-in"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={24} className="text-green-500" />
                <div>
                  <div className="font-semibold text-gray-900">Опыт работы</div>
                  <div className="text-sm text-gray-600">Более 10 лет</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексные строительные решения от профессиональной команды
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Home",
                title: "Жилое строительство",
                description: "Строительство частных домов и жилых комплексов любой сложности"
              },
              {
                icon: "Building",
                title: "Коммерческие объекты",
                description: "Офисные здания, торговые и производственные помещения"
              },
              {
                icon: "Wrench",
                title: "Реконструкция",
                description: "Модернизация и капитальный ремонт зданий и сооружений"
              },
              {
                icon: "FileText",
                title: "Проектирование",
                description: "Архитектурное проектирование и техническая документация"
              },
              {
                icon: "HardHat",
                title: "Отделочные работы",
                description: "Внутренняя и внешняя отделка помещений премиум класса"
              },
              {
                icon: "Truck",
                title: "Материалы",
                description: "Поставка качественных строительных материалов"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
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
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Лет опыта" },
              { number: "200+", label: "Проектов" },
              { number: "30+", label: "Специалистов" },
              { number: "100%", label: "Качество" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in">
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
              <h2 className="text-4xl font-bold text-gray-900">Наши принципы</h2>
              <p className="text-lg text-gray-600">
                Мы создаем качественные объекты, которые соответствуют всем современным 
                стандартам и требованиям. Каждый проект выполняется с особым вниманием к деталям.
              </p>
              
              <div className="space-y-4">
                {[
                  "Строгое соблюдение сроков выполнения",
                  "Использование современных технологий",
                  "Контроль качества на каждом этапе",
                  "Профессиональная команда специалистов",
                  "Полное сопровождение проекта"
                ].map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-500" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Icon name="Award" size={24} className="text-primary" />
                    <span>Лицензии и допуски</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Имеем все необходимые документы для выполнения 
                    строительных работ различной категории сложности.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Icon name="Shield" size={24} className="text-primary" />
                    <span>Гарантии качества</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Предоставляем расширенную гарантию на все виды 
                    выполненных работ и используемые материалы.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">
              Обсудим ваш проект и предложим оптимальное решение
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Как с нами связаться</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Телефон</div>
                      <div className="text-gray-600">Звонок в рабочее время</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Электронная почта</div>
                      <div className="text-gray-600">Ответим в кратчайшие сроки</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Офис</div>
                      <div className="text-gray-600">Работаем с понедельника по пятницу</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>Заполните форму для получения консультации</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Контактный телефон" />
                </div>
                <Input placeholder="Электронная почта" />
                <Textarea placeholder="Опишите ваши потребности" rows={4} />
                <Button className="w-full" size="lg">
                  Отправить заявку
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Отправляя форму, вы соглашаетесь на обработку данных
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
                <Icon name="Building2" size={24} className="text-primary" />
                <span className="text-xl font-bold">Строительная компания</span>
              </div>
              <p className="text-gray-400">
                Профессиональные строительные услуги высокого качества
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Жилое строительство</li>
                <li>Коммерческие объекты</li>
                <li>Реконструкция</li>
                <li>Проектирование</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О компании</li>
                <li>Наши работы</li>
                <li>Документы</li>
                <li>Вакансии</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <div className="space-y-2 text-gray-400">
                <div>Консультации по телефону</div>
                <div>Электронная почта</div>
                <div>Офис в центре города</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Строительная компания. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;