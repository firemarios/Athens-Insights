import { NavigatedData, Page, View, ApplicationSettings, Button, StackLayout, Image, Label, ScrollView, Color } from '@nativescript/core'
import { Builder } from '@nativescript/core/ui/builder'
import { localUtils, apiUrl } from '~/code/local-utils'
import { } from "nativescript-videoplayer";
import { ViewModel } from './traffic-view-model'
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

  const videoPlayer1 = page.getViewById("ipCamera1");
  (videoPlayer1 as any).src = "https://s58.ipcamlive.com/streams/3ay03zx4sd1hureqb/stream.m3u8";
  const videoPlayer2 = page.getViewById("ipCamera2");
  (videoPlayer2 as any).src = "https://s21.ipcamlive.com/streams/15cthpqepfbng7emd/stream.m3u8";
  const videoPlayer3 = page.getViewById("ipCamera3");
  (videoPlayer3 as any).src = "https://s43.ipcamlive.com/streams/2brxnpk2qdjk9dh1e/stream.m3u8";
  const videoPlayer4 = page.getViewById("ipCamera4");
  (videoPlayer4 as any).src = "https://s29.ipcamlive.com/streams/1dlnrj9ufvpiafe1s/stream.m3u8";
  const videoPlayer5 = page.getViewById("ipCamera5");
  (videoPlayer5 as any).src = "https://s76.ipcamlive.com/streams/4c7rzzamgbxeqnig1/stream.m3u8";
  const videoPlayer6 = page.getViewById("ipCamera6");
  (videoPlayer6 as any).src = "https://s31.ipcamlive.com/streams/1fhcuolml0nqes7eg/stream.m3u8";
  const videoPlayer7 = page.getViewById("ipCamera7");
  (videoPlayer7 as any).src = "https://hd-auth.skylinewebcams.com/live.m3u8?a=jdfgfcqp6hhp386uqtu2nr6k16";
  const videoPlayer8 = page.getViewById("ipCamera8");
  (videoPlayer8 as any).src = "https://hd-auth.skylinewebcams.com/live.m3u8?a=i4rs9dsvmqog6gecvuuiu44o20";
  const videoPlayer9 = page.getViewById("ipCamera9");
  (videoPlayer9 as any).src = "https://hd-auth.skylinewebcams.com/live.m3u8?a=pc8r58iiqpgemuanlqd30mmdj0";
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
