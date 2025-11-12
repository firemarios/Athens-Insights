import { NavigatedData, Page, View } from '@nativescript/core'
import { localUtils } from '~/code/local-utils'
import { ViewModel } from './welcome-view-model'
import 'nativescript-effects';

let page: Page;

export function onNavigatingTo(args: NavigatedData) {
  page = <Page>args.object

  page.bindingContext = new ViewModel()

  localUtils.setStatusBarStyle(false)

  const image = page.getViewById('bgImage');
  localUtils.animateIn(image, "slideUp", 1000)
  const button = page.getViewById('getStartedBtn');
  localUtils.animateIn(button, "slideUp", 2000)
}

export function onGetStartedTap() {
  localUtils.vibrate(2)
  const image = page.getViewById('bgImage');
  localUtils.animateOut(image, "slideUp", 1000)
  const button = page.getViewById('getStartedBtn');
  localUtils.animateOut(button, "fade", 1000)
  setTimeout(() => {
    localUtils.navigateTo('questionnaire/questionnaire-page')
  }, 500);
}
