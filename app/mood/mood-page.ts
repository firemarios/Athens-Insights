import { NavigatedData, Page, View, ApplicationSettings, Button, StackLayout, Image, Label, ScrollView, Color } from '@nativescript/core'
import { Builder } from '@nativescript/core/ui/builder'
import { localUtils, apiUrl } from '~/code/local-utils'
import { ViewModel } from './mood-view-model'
import 'nativescript-effects';
import { apiUtils } from '~/code/api-utils';

let page: Page;

export async function onNavigatingTo(args: NavigatedData) {
  page = <Page>args.object

  page.bindingContext = new ViewModel()

  localUtils.setStatusBarStyle(true)

  const navBar = page.getViewById<StackLayout>("navbar")
  const navBarView = Builder.parse(localUtils.getNavBar(), { goHome, goEvents, goChat, goMood, goTraffic, goSettings });
  navBar.addChild(navBarView);
}

export function goHome() {
  localUtils.navigateTo("home/home-page")
}

export function goEvents() {
  localUtils.navigateTo("events/events-page")
}

export function goChat() {
  localUtils.navigateTo("chat/chat-page")
}

export function goMood() {
  localUtils.navigateTo("mood/mood-page")
}

export function goSettings() {
  localUtils.navigateTo("settings/settings-page")
}

export function goTraffic() {
  localUtils.navigateTo("traffic/traffic-page")
}
