
import {
  type as setPsiphonEnabledType,
  SetPsiphonEnabledAction,
} from '../actions/setPsiphonEnabled'

import {
  type as setCategoryOrderType,
  SetCategoryAction,
} from '../actions/setCategoryOrder'

import {
  type as setMediaPlaybackRateType,
  SetMediaPlaybackRateAction,
} from '../actions/setMediaPlaybackRate'

import {
  type as toggleDailyNotificationType,
  ToggleDailyNotificationAction,
} from '../actions/toggleDailyNotification'

import {
  type as setTextSizeType,
  SetTextSizeAction,
} from '../actions/setTextSize'

import { ActorMap, buildReducer } from '../actorMap'
import AppSettings from 'types/AppSettings'

const actors: ActorMap<AppSettings> = {
  [setPsiphonEnabledType]: (prev, { psiphonEnabled }: SetPsiphonEnabledAction) => ({
    ...prev,
    psiphonEnabled,
  }),
  [setCategoryOrderType]: (prev, { categories }: SetCategoryAction) => ({
    ...prev,
    categories,
  }),
  [setMediaPlaybackRateType]: (prev, { mediaPlaybackRate }: SetMediaPlaybackRateAction) => ({
    ...prev,
    mediaPlaybackRate,
  }),
  [toggleDailyNotificationType]: (prev, { on: dailyNotificationOn = !prev.dailyNotificationOn }: ToggleDailyNotificationAction) => ({
    ...prev,
    dailyNotificationOn,
  }),
  [setTextSizeType]: (prev, { textSize }: SetTextSizeAction) => ({
    ...prev,
    textSize,
  }),
}

export const INITIAL_STATE: AppSettings = {
  categories: [
    {
      id: 1953,
      name: 'Новости',
    },
    {
      id: 1871,
      name: 'Новости США за 60 секунд',
    },
    {
      id: 1914,
      name: 'Брифинг',
    },
    {
      id: 5353,
      name: 'Экономика: время – деньги',
    },
    {
      id: 5215,
      name: 'Оно вам надо?',
    },
    {
      id: 5393,
      name: 'Викторины',
    },
    {
      id: 4847,
      name: 'Учим английский',
    },
  ],
  mediaPlaybackRate: 1,
  dailyNotificationOn: true,
  psiphonEnabled: true,
  textSize: 1,
}

export default buildReducer(INITIAL_STATE, actors)
