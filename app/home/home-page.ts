import { NavigatedData, Page, View, ApplicationSettings, Button } from '@nativescript/core'
import { localUtils } from '~/code/local-utils'
import { ViewModel } from './home-view-model'
import 'nativescript-effects';

let page: Page;

export function onNavigatingTo(args: NavigatedData) {
  page = <Page>args.object

  page.bindingContext = new ViewModel()

  localUtils.setStatusBarStyle(true)
}