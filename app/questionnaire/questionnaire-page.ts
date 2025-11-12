import { Button, NavigatedData, Page, View } from '@nativescript/core'
import { localUtils } from '~/code/local-utils'
import { ViewModel } from './questionnaire-view-model'
import 'nativescript-effects';

let page: Page;
let btns: Button[];
let nextBtn: Button;

export function onNavigatingTo(args: NavigatedData) {
  page = <Page>args.object

  page.bindingContext = new ViewModel()

  localUtils.setStatusBarStyle(true)

  btns = [
    page.getViewById('btn1'),
    page.getViewById('btn2'),
    page.getViewById('btn3'),
    page.getViewById('btn4'),
    page.getViewById('btn5'),
    page.getViewById('btn6'),
    page.getViewById('btn7'),
    page.getViewById('btn8'),
  ]

  nextBtn = page.getViewById('next')

  btns.forEach(btn => {
    (btn as any).selected = false;
    btn.className = "unselected";
    setTimeout(() => {
      localUtils.animateIn(btn, "slideRight", 1000);
    }, 100);
  });

  btns.forEach(btn => {
    btn.on("tap", () => {
        if ((btn as any).selected) {
          (btn as any).selected = false;
          btn.className = "unselected";
          return;
        } else {
          (btn as any).selected = true;
          btn.className = "selected";
        }
      });
  });

}

function resetBtns() {
  btns.forEach(btn => {
    (btn as any).selected = false;
    btn.className = "unselected";
  });
}

export function nextBtnTap() {
  localUtils.vibrate(2);
  localUtils.animateOut(nextBtn, "fade", 500);

  btns.forEach(btn => {
    localUtils.animateOut(btn, "slideRight", 1000);
    setTimeout(() => {
      resetBtns();  
      localUtils.animateIn(btn, "slideRight", 1000);
      localUtils.animateIn(nextBtn, "fade", 500);
    }, 1200);
  });
}
