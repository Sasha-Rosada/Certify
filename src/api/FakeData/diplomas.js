const diplomas = [
  {
    "nameUA": "Храпач Віталій Олександрович",
    "nameEN": "Hrapach Vitaliy Oleksandrovych",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Гирявенко Дар'я Сергіївна",
    "nameEN": "Giryavenko Daria Sergeevna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Гладенко Марія Володимирівна",
    "nameEN": "Gladenko Maria Vladimirovna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Трубчанінова Альона Андріївна",
    "nameEN": "Trubchaninova Alyona Andriivna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Фотоколаж",
    "nominationEN": "Computer graphics: Photo collage"
  },
  {
    "nameUA": "Jemielniak Dariusz",
    "nameEN": "Jemielniak Dariusz",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Веб-дизайн: Графічне оформлення",
    "nominationEN": "Web design: Graphic design"
  },
  {
    "nameUA": "Корчовий Максим Выталыйович",
    "nameEN": "Korchoviy Maxim Vitalyovich",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Візуальне програмування: Навчальний додаток",
    "nominationEN": "Visual programming: Educational application"
  },
  {
    "nameUA": "Ємельянова Вікторія Геннадіївна",
    "nameEN": "Emelyanova Victoria Gennadievna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна анімація: GIF-анімація",
    "nominationEN": "Computer animation: GIF-animation"
  },
  {
    "nameUA": "Бих Катерина Володимирівна",
    "nameEN": "I would like Kateryna Volodymyrivna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Диченко Віра Олександрівна",
    "nameEN": "Dychenko Vira Oleksandrivna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Заєць Вікторія Олександрівна",
    "nameEN": "Hare Victoria Alexandrovna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Носаченко Дар’я Сергіївна",
    "nameEN": "Nosachenko Daria Sergeevna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Салова Марія Василівна",
    "nameEN": "Salova Maria Vasylivna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Гонтар Олена Сергіївна",
    "nameEN": "Gontar Olena Serhiivna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Ткаченко Ірина Ігорівна",
    "nameEN": "Tkachenko Iryna Ihorivna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Юшко Катерина Сергіївна",
    "nameEN": "Yushko Kateryna Serhiivna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Олійникова Ілона Вячеславівна",
    "nameEN": "Oliynikova Ilona Vyacheslavivna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Фотоколаж",
    "nominationEN": "Computer graphics: Photo collage"
  },
  {
    "nameUA": "Кіблицька Ольга Вікторівна",
    "nameEN": "Kiblytska Olga Viktorivna",
    "placeUA": "1",
    "placeEN": "1st",
    "nominationUA": "Комп'ютерна графіка: Фотоколаж",
    "nominationEN": "Computer graphics: Photo collage"
  },
  {
    "nameUA": "Коняєва Поліна Сергіївна",
    "nameEN": "Konyaeva Polina Sergeevna",
    "placeUA": "1",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Фотоколаж",
    "nominationEN": "Computer graphics: Photo collage"
  },
  {
    "nameUA": "Бугаєнко Олександр Васильович",
    "nameEN": "Bugaenko Alexander Vasilyevich",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Вишня Наталія Валеріївна",
    "nameEN": "Cherry Natalia Valerievna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Бойко Дмитро Романович",
    "nameEN": "Boyko Dmitry Romanovich",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Матвієнко Анна Вікторівна",
    "nameEN": "Matvienko Anna Viktorivna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Токар Руслана Олександрівна",
    "nameEN": "Turner Ruslana Alexandrovna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Іванюта Ігорь В'ячеславович",
    "nameEN": "Ivanyuta Igor Vyacheslavovich",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Айнутдинов Дмитрий Николаевич",
    "nameEN": "Ainutdinov Dmitry Nikolaevich",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Веб-дизайн: Графічне оформлення",
    "nominationEN": "Web design: Graphic design"
  },
  {
    "nameUA": "Родінко Ольга Павлівна",
    "nameEN": "Rodinko Olga Pavlovna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Візуальне програмування: Навчальний додаток",
    "nominationEN": "Visual programming: Educational application"
  },
  {
    "nameUA": "Троценко Дарина Юріївна",
    "nameEN": "Trotsenko Daryna Yuriyivna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Візуальне програмування: Навчальний додаток",
    "nominationEN": "Visual programming: Educational application"
  },
  {
    "nameUA": "Ізосімова Оксана Олексіївна",
    "nameEN": "Izosimova Oksana Oleksiivna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна анімація: GIF-анімація",
    "nominationEN": "Computer animation: GIF-animation"
  },
  {
    "nameUA": "Лахно Володимир Анатолійович",
    "nameEN": "Lakhno Volodymyr Anatoliyovych",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна анімація: GIF-анімація",
    "nominationEN": "Computer animation: GIF-animation"
  },
  {
    "nameUA": "Шумейко Володимир Юрійович",
    "nameEN": "Shumeiko Volodymyr Yuriiovych",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна анімація: GIF-анімація",
    "nominationEN": "Computer animation: GIF-animation"
  },
  {
    "nameUA": "Щепотін Ярослав Євгенович",
    "nameEN": "Shchepotin Yaroslav Yevhenovych",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна анімація: GIF-анімація",
    "nominationEN": "Computer animation: GIF-animation"
  },
  {
    "nameUA": "Павленко Ксенія Сергіївна",
    "nameEN": "Pavlenko Ksenia Sergeevna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Кирноз Карина Володимирівна",
    "nameEN": "Kirnoz Karina Vladimirovna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Кривко Антоніна Миколаївна",
    "nameEN": "Kryvko Antonina Mykolayivna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Рева Тетяна Миколаївна",
    "nameEN": "Reva Tatiana Nikolaevna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Момот Роман Анатолійович",
    "nameEN": "Momot Roman Anatoliyovych",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Бодарєва Єлизавета Олександрівна",
    "nameEN": "Bodareva Elizaveta Oleksandrivna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Касап Вікторія Сергіївна",
    "nameEN": "Kasap Victoria",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Рахматова Нігора",
    "nameEN": "Rakhmatova Nigora",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Сіра Інна Сергіївна",
    "nameEN": "Gray Inna Sergeevna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Войтенко Альона Андріївна",
    "nameEN": "Voitenko Alyona Andriivna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Мигаль Віталій Олександрович",
    "nameEN": "Mygal Vitaliy Oleksandrovych",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Сиромля Андрій Миколайович",
    "nameEN": "Syromlya Andriy Mykolayovych",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Токмань Віталіна Анатоліївна",
    "nameEN": "Tokman Vitalina Anatoliyivna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Федорчук Анна Віталіївна",
    "nameEN": "Fedorchuk Anna Vitaliyivna",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Фотоколаж",
    "nominationEN": "Computer graphics: Photo collage"
  },
  {
    "nameUA": "Небилиця Володимир Олексійович",
    "nameEN": "Nebylytsia Volodymyr Oleksiiovych",
    "placeUA": "2",
    "placeEN": "2nd",
    "nominationUA": "Комп'ютерна графіка: Фотоколаж",
    "nominationEN": "Computer graphics: Photo collage"
  },
  {
    "nameUA": "Александров Асен Асенов",
    "nameEN": "Alexandrov Assen Assenov",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Веб-дизайн: Графічне оформлення",
    "nominationEN": "Web design: Graphic design"
  },
  {
    "nameUA": "Спінов Микита Арсенйович",
    "nameEN": "Spinov Nikita Arsenyevich",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Веб-дизайн: Графічне оформлення",
    "nominationEN": "Web design: Graphic design"
  },
  {
    "nameUA": "Тімонович Мар'яна",
    "nameEN": "Timonovich Mariana",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Веб-дизайн: Графічне оформлення",
    "nominationEN": "Web design: Graphic design"
  },
  {
    "nameUA": "Шаповал Анна",
    "nameEN": "Shapoval Anna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Веб-дизайн: Графічне оформлення",
    "nominationEN": "Web design: Graphic design"
  },
  {
    "nameUA": "Перепека Сергій Андрійович",
    "nameEN": "Sergey Andreevich Perepeka",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Вербицький Євгеній Олександрович",
    "nameEN": "Verbytsky Eugene Alexandrovich",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Шеліхова Елизавета Максимівна",
    "nameEN": "Shelikhova Elizaveta Maksimivna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Бойко Дмитро Романович",
    "nameEN": "Boyko Dmitry Romanovich",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Рожковський Данило Олегович",
    "nameEN": "Rozhkovsky Danylo Olehovych",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Ізосімова Оксана Олексіївна",
    "nameEN": "Izosimova Oksana Oleksiivna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Веб-дизайн: Графічне оформлення",
    "nominationEN": "Web design: Graphic design"
  },
  {
    "nameUA": "Колеснікова Дар'я Євгеніївнаи",
    "nameEN": "Kolesnikova Daria Evgenievna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Веб-дизайн: Графічне оформлення",
    "nominationEN": "Web design: Graphic design"
  },
  {
    "nameUA": "Житлов Гліб Юрійович",
    "nameEN": "Zhitlov Gleb Yurievich",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Веб-дизайн: Графічне оформлення",
    "nominationEN": "Web design: Graphic design"
  },
  {
    "nameUA": "Котовський Гліб Валерійович",
    "nameEN": "Kotovsky Gleb Valerievich",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Веб-дизайн: Графічне оформлення",
    "nominationEN": "Web design: Graphic design"
  },
  {
    "nameUA": "Ворона Дмитро Михайлович",
    "nameEN": "Crow Dmitry Mikhailovich",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Візуальне програмування: Навчальний додаток",
    "nominationEN": "Visual programming: Educational application"
  },
  {
    "nameUA": "Сасіна Юлія Олександрівна",
    "nameEN": "Sasina Julia Alexandrovna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Візуальне програмування: Навчальний додаток",
    "nominationEN": "Visual programming: Educational application"
  },
  {
    "nameUA": "Смоловий Дмитро Сергійович",
    "nameEN": "Smolovy Dmitry Sergeevich",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Візуальне програмування: Навчальний додаток",
    "nominationEN": "Visual programming: Educational application"
  },
  {
    "nameUA": "Пащенко Діана Сергіївна",
    "nameEN": "Pashchenko Diana Sergeevna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна анімація: GIF-анімація",
    "nominationEN": "Computer animation: GIF-animation"
  },
  {
    "nameUA": "Куркін Дмитрій Юрійович",
    "nameEN": "Kurkin Dmitry Yurievich",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна анімація: GIF-анімація",
    "nominationEN": "Computer animation: GIF-animation"
  },
  {
    "nameUA": "Сікорський Ігор Андрійович",
    "nameEN": "Sikorsky Igor Andreevich",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна анімація: GIF-анімація",
    "nominationEN": "Computer animation: GIF-animation"
  },
  {
    "nameUA": "Радоніч Вікторія Михайлівна",
    "nameEN": "Radonich Victoria Mikhailovna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Авдеева Анастасия Олеговна",
    "nameEN": "Avdeeva Anastasia Olegovna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Song Jiamei",
    "nameEN": "Song Jiamei",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Тарасюк Олена Михайлівна",
    "nameEN": "Tarasyuk Olena Mykhailivna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Нищета Микола Петрович",
    "nameEN": "Poverty Mykola Petrovich",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Притика Оксана Валентинівна",
    "nameEN": "Prityka Oksana Valentynivna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Векторна графіка",
    "nominationEN": "Computer graphics: Vector graphics"
  },
  {
    "nameUA": "Чередник Ірина Вікторівна",
    "nameEN": "Cherednyk Iryna Viktorivna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Брунько Марина Миколаївна",
    "nameEN": "Brunko Marina Nikolaevna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Ковальчук Юрій Олександрович",
    "nameEN": "Kovalchuk Yuriy Oleksandrovych",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Тарасенко Владислав Олександрович",
    "nameEN": "Tarasenko Vladislav Alexandrovich",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Галізів Денис",
    "nameEN": "Galiziv Denis",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Лахно Володимир Анатолійович",
    "nameEN": "Lakhno Volodymyr Anatoliyovych",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Jolanta Religa",
    "nameEN": "Jolanta Religa",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Peter Clarkwood",
    "nameEN": "Peter Clarkwood",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Шимко Вадим Олександрович",
    "nameEN": "Shimko Vadim Alexandrovich",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Колот Діана Миколаївна",
    "nameEN": "Kolot Diana Nikolaevna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Цілуйко Віта Романівна",
    "nameEN": "Tsiluyko Vita Romanivna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Растрова графіка",
    "nominationEN": "Computer graphics: Raster graphics"
  },
  {
    "nameUA": "Перемот Анастасія Ігорівна",
    "nameEN": "Peremot Anastasia Igorivna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Фотоколаж",
    "nominationEN": "Computer graphics: Photo collage"
  },
  {
    "nameUA": "Лукавенко Ксенія Олексіївна",
    "nameEN": "Ksenia Oleksiivna Lukavenko",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Фотоколаж",
    "nominationEN": "Computer graphics: Photo collage"
  },
  {
    "nameUA": "Шердананулов Умітджан",
    "nameEN": "Sherdananulov Umitjan",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Фотоколаж",
    "nominationEN": "Computer graphics: Photo collage"
  },
  {
    "nameUA": "Лібець Єлизавета Сергіївна",
    "nameEN": "Libets Elizaveta Serhiivna",
    "placeUA": "3",
    "placeEN": "3rd",
    "nominationUA": "Комп'ютерна графіка: Фотоколаж",
    "nominationEN": "Computer graphics: Photo collage"
  }
]

export default diplomas;
