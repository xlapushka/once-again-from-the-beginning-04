# once-again-from-the-beginning-03

!! не забувати робити валідацію !!!

не підключені шрифти

-4-

- зроблені два фонових зображення;
- в services-and-prices знайдено і додано два різних градієнти під меню;
- додано ::after в секцію advantages, для цього заданий батьку флекс, щоб спозиціонувати вгору
- оптимізовані svg
- доданий sprite
- правиьно розставлені aria-lable (все, що всередині тегу читалками буде ігноритись)
- зроблені елементи ::before ::after (горизонтальна полоска)
- замінені svg в контактах, бо не змінювали колір

!! не розібралась з paddings на a для збільшення області натискання при хувері

-5-

- абсолют для верхнього меню
- додано клас current-active (нижнє підкреслення активної сторінки - в перспективі, коли багато сторінковий сайт)
- transition: color 250ms ease-in-out на події наведення
- зроблене бокове меню в hero
- зроблені зірочки в advantages через позиціонування
- додані фон+текст при ховері на карточках
- зроблена модалка (працює тільки на першій кнопці, тре підкрутити js)

-6-

- кожне друге фото в галереї перевернуте
- додана модалка і скрипт (реагує перша кнопка)
- outline в формі замінені колір
- заменена кнопка close в модалці (чомусь не виходить додати в спрайт, тому зʼявився ще один)
- в формі зроблена анімація lable + зміана кольору при фокусі
- зроблений кастомний radio
- зроблена нижня секція online-booking (погралася трохи)
- підключена бібліотека через link (не використовувалась)
- js поправлений, щоб реагували віс кнопки

-7-

- заблокована можливість прокручування сайту при модалці (в тому числі JS)
- перевираховані фото для секії about, додані
  (існує дві версії фото для різних девайсів)
- перевірена валідація html
- скачані і переформатованbq різними форматами фон на hero (webp)
- прописані медіа для фона в hero. в services and contacts залишена png
- оптимізовані під ретіну зображення в секції our-barbers, додано picture with srcset
- застосовано picture для картинок в about
- зроблено секції header+hero, доданий скрипт (поява + заборона scroll) для появи меню в найменьшому форматі

!!!! не вирішене питання z-index для бургер-меню (деякі елементи сторінки вище)

- зроблений костилик для приховання subtitle при відкриттті burger-menu за допомогою класу в jsб який додає z-index: -1
- зроблений адаптив
