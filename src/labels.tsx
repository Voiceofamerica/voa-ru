
import * as React from 'react'
import { push } from 'react-router-redux'
import store from 'redux-store'
import toggleCircumventionDrawer from 'redux-store/actions/toggleCircumventionDrawer'
import * as moment from 'moment'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import { Audience } from 'helpers/graphql-types'

setAnalyticsOptions({
  language: 'russian',
  languageService: 'russian',
  propertyName: 'russian',
  propertyId: 'something',
  rsidAccount: 'something',
  reportSuite: 'something',
})
setDirection('ltr')

export const graphqlAudience = Audience.ru

moment.locale('ru')

export const articleLabels = {
  updatedOn: (date: string) => `Обновление загружено ${date}`,
  relatedContent: 'Еще на эту тему',
  shareMessage: '',
  galleryLoading: 'VOA',
}

export const categorySettingsLabels = {
  header: 'Организовать избранные категории',
  myCategories: 'Мои новости',
  allCategories: 'Добавить категории',
  dragAndDrop: 'Избранные новости',
  headlinesFirst: 'Отображать только заголовки',
  cancel: 'Cancel',
}

export const circumventionDrawerLabels = {
  enabledContent: (
    <div>
      <p>
      «Голос Америки»  использует технологию VPN для обхода блокировок.
      </p>
      <p>
      Вы всегда сможете прочитать самые важные новости
      </p>
      <p>
        You can change this in
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>Settings</a>.
      </p>
    </div>
  ),
  disabledContent: (
    <div>
      <p>
      «Голос Америки»  использует технологию VPN для обхода блокировок.
      </p>
      <p>
      Вы всегда сможете прочитать самые важные новости
      </p>
      <p>
        You can change this in
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>Settings</a>.
      </p>
    </div>
  ),
}

export const editorsChoiceLabels = {
  header: 'Редакция рекомендует',
}

export const errorBoundaryLabels = {
  error: 'У нас возникли небольшие проблемы. Мы работаем над их разрешением',
  retry: 'Попробуйте зайти в приложение снова!',
}

export const favoritesSettingsLabels = {
  header: 'Организовать избранное',
  removeAll: 'Удалить избранное',
}

export const homeLabels = {
  headlines: 'Главные новости',
  search: 'Search',
  manage: '+',
}

export const introLabels = {
  content: (
    <div>
      <div>«Голос Америки»</div>
      <div>новости, аналитика, репортажи о США, России и странах постсоветского пространства</div>
    </div>
  ),
  continue: 'VOA',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
      Видео- и медиапроекты «Голоса Америки». Вы можете посмотреть наши видеорепортажи. Чтобы закрыть страницу и вернуться к новости, просто проведите пальцем по экрану. Чтобы вернуться к видео, проведите пальцем вверх от значка "воспроизведение" в середине нижней части экрана. Начать и завершить просмотр видео можно, нажав кнопку "воспроизведение"
      </p>
    </div>
  ),
  loading: 'Подождите, идет загрузка',
}

export const mediaSettingsLabels = {
  normalSpeed: '1x',
  halfAgainSpeed: '1.5x',
  doubleSpeed: '2x',
  chooseSpeed: 'Изменить скорость воспроизведения',
}

export const programsScreenLabels = {
  videos: 'Video',
  audio: 'Audio',
  empty: 'В настоящее время в данной категории нет данных',
}

export const pullToRefreshLabels = {
  pull: 'Перезагрузить страницу',
  release: 'Перезагрузить страницу',
}

export const searchLabels = {
  header: 'Результаты поиска',
  back: 'Вернуться',
  all: 'Все',
  query: 'Поиск',
  empty: 'Извините, по Вашему запросу ничего не найдено. Попробуйте написать вопрос по-другому',
}

export const settingsLabels = {
  header: 'Мои настройки',
  panic: 'Вернуть первоначальные настройки',
  sendToFriends: 'Поделиться с друзьями',
  sendFeedback: 'Комменрарии и предложения: связаться с «Голосом Америки» ',
  aboutVoa: (
    <div>
      <p>
        «Голос Америки» – информационный интернет-ресурс, предлагающий новости, аналитику, репортажи о США, России и странах постсоветского пространства. «Голос Америки» вещает на сорока пяти языках мира. Аудитория информационных, образовательных и культурных программ «Голоса Америки» составляет свыше 115 миллионов человек.
      </p>
      <p>
        Радиостанция «Голос Америки» была создана в 1942 году, в 1947-м было начато вещание на русском языке. Мы стремимся максимально доступно объяснять русскоязычной аудитории реалии американской жизни и политики.
      </p>
      <p>
        Фундаментальные принципы нашей работы сформулированы в Хартии «Голоса Америки»:
      </p>
      <div>
        «Голос Америки» будет служить надежным и авторитетным источником новостей. Новости «Голоса Америки» будут точными, объективными и всеобъемлющими.
      </div>
      <div>
        «Голос Америки» будет представлять Америку, а не какой-то один сегмент американского общества, и в силу этого будет представлять сбалансированное и всеобъемлющее описание значительных американских идей и институтов.
      </div>
      <div>
        «Голос Америки» будет представлять действия Соединенных Штатов ясно и эффективно, а также будет представлять ответственные дискуссии и мнения об этих действиях.
      </div>
      <p>
        «Голос Америки» публикует только информацию, достоверность которой подтверждена как минимум двумя независимыми источниками. «Голос Америки» всегда отделяет факт от комментария.
      </p>
      <p>
        Шесть дней в неделю на нашем сайте вы можете смотреть прямой эфир передачи «Настоящее время. Америка».
      </p>
      <p>
        На нашем сайте и на наших страницах в соцсетях представлены видео-, фото- и аудиоматериалы - в том числе уроки английского языка.
      </p>
    </div>
  ),
  feedbackEmail: 'golosameriki@gmail.com',
  feedbackSubject: encodeURIComponent('Комментарии и предложения'),
  feedbackBody: encodeURIComponent(''),
  shareMessage: '',
  psiphon: 'Secure VPN',
  psiphonOn: 'On',
  psiphonOff: 'Off',
  takeEffectOnRestart: 'You must restart the app for your changes to take effect.',
  okay: 'Okay',
}

export const textSettingsLabels = {
  textSize: 'Выбрать размер шрифта',
  normalSize: '1x',
  largeSize: '1.5x',
  hugeSize: '2x',
}
