import React from 'react';
import './AboutMe.scss';

export function AboutMe() {
  return (
    <div className="wrapper">
      <h2 className="about-title">Обо мне</h2>
      <div className="about-wrapper">
        <div className="about-photo-wrapper">
          <div className="about-photo"></div>
        </div>
        <div className="about-text">
          <p className="about-paragraph">Привет !</p>
          <p className="about-paragraph">
            Меня зовут Ксения. Я успешный фотограф, специализирующийся на лайфстайл съемках. Мои
            работы высоко оцениваются клиентами и используются в рекламных кампаниях. Я являюсь
            одним из тех людей, которые умеют создавать на фотографиях атмосферу, и она заставляет
            зрителей остановиться и задуматься.
          </p>

          <p className="about-paragraph">
            Кроме того, я также являюсь фронтенд разработчиком, что позволяет мне использовать мои
            технические навыки для создания уникальных веб-сайтов и презентаций своих работ. Я
            постоянно совершенствуюсь в своих умениях, и это помогает мне удерживать свою позицию в
            качестве лидера в отрасли.
          </p>

          <p className="about-paragraph">
            Кроме работы, я люблю путешествовать. Я нахожу вдохновение в различных культурах и
            традициях, которые встречаются мне во время путешествий, и это отражается в моих
            работах.
          </p>

          <p className="about-paragraph">
            Сочетание моих профессиональных и творческих навыков делает меня уникальным и
            талантливым фотографом. На моем сайте портфолио собраны некоторые из работ.
          </p>

          <p className="about-paragraph">
            Сайт поможет вам найти места где можно купить мои фотографии для украшения своего
            интерьера или вашей рекламы.
          </p>
          <p className="about-paragraph">
            Вы можете написать мне по любым вопросам:{' '}
            <a
              href="https://t.me/EvaKerrigan"
              target="_blank"
              className="about-link"
              rel="noreferrer"
            >
              https://t.me/EvaKerrigan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
