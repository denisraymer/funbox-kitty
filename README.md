# Тестовое задание FunBox

## Установка

    yarn
    
    yarn run start

## Ответы на вопросы

> Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения

-   пользователя — имеет возможность осуществлять доступ к приложению на любом из своих устройств не имея проблем с адаптивностью и кросс-браузерность. В случае ошибок или неполадок, приложение выводить уведомления не разрушающие верстку по возможности подсказывающие, что необходимо сделать для её устранения. Загрузка контента проходит быстро и не заставляет пользователя ждать. Использованы методы облегчения текста для чтения. Выделены ключевые слова, использованы заголовки, тема описывается короткими параграфами, и используются списки.

-   менеджера проекта - верстка соответствует большинству пунктов технического задания, соблюдены все технические аспекты, оформлен репозиторий, по необходимости есть документация.

-   дизайнера - верстка и её поведение максимально отражает задумку дизайнера.

-   верстальщика - верстка соответствует макету, присутствует кроссбраузерность, кодировка и DOCTYPE, валидность (включая CSSLint и JSHint), доступность, микроформаты SEO. Независимость блоков в CSS: минимизация каскада, использование техник БЭМ. нормально смотрится во всех стандартных разрешениях от 1024 и выше, не имеет горизонтального скролла и вписывается в экран мобильных устройств. Проведена оптимизация по скорости загрузки.

-   клиентского программиста - верстка рассчитана на динамическое изменение контента, блоки могут свободно перемещаться и удаляться, количество текста в блоках может увеличиваться и уменьшаться, изображения могут изменяться.

-   серверного программиста - входящие данные на сервер, например, данные из форм должны поступать в определенном формате, изображения должны быть оптимизированы для быстрой загрузки сайта.

* * *

> Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.

Проект полностью отрисован дизайнером и показана анимация поведения элементов. В верстке используется методология БЭМ. Рутинные задачи автоматизированы например: сборка стилей, обработка javascript, работа со статичными файлами. соблюдается файловая структура и git flow. Задачи выполняются в срок. 

* * *

> Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

В адаптивных сайтах фиксированные размеры должны быть только у мелких блоков, блоки не шире 320 пикселей, все остальные размеры в процентах, расположение блоков и их размер будет меняться в зависимости от устройства. Так же есть особенности отображения контента в устройствах apple. При верстке адаптивных сайтов использовал, flexbox, а так же медиа-запросы для разного отображения контента в зависимости от устройства. Результат тестировал в chrome devtools, а так же на собственной технике (смартфон, планшет).

* * *

> Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

При написании кода экономить время помогает IDE WebStorm, для отладки кода chrome devtools и его основные возможности.  

* * *

> Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

Можно использовать BrowserStack и виртуальные машины. Не часто сталкивался с подобными проблемами на практике.

* * *

> Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

Для базовых элементов (a, button, ...) можно применять стандартные on-off анимации типа "убрать/добавить underline", "изменить opacity".

Для более сложных элементов (аккордеон, dropdown-меню, ...) запросить у дизайнера эти состояния.


