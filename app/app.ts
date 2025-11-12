import { Application, isAndroid } from "@nativescript/core";
import 'nativescript-effects';

Application.on(Application.launchEvent, () => {

    if (isAndroid) {
        const window = Application.android.startActivity.getWindow();
        window.setStatusBarColor(0x00000000); // transparent
        const decorView = window.getDecorView();
        decorView.setSystemUiVisibility(
            android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
            android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        );
    }
});

Application.run({ moduleName: 'app-root' })

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
