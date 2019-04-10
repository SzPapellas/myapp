declare let gtag: (action, id, value) => {};
declare let ga: (action, category, eventCategory, eventAction, eventLabel, eventValue) => {};

export function googleAnalyticsHeadScripts() {
    const head = document.getElementsByTagName('head')[0];

    const googleAnalyticsFirstScript = document.createElement('script');
    googleAnalyticsFirstScript.async = true;
    googleAnalyticsFirstScript.src = 'https://www.googletagmanager.com/gtag/js?id=UA-137973739-1';

    const googleAnalyticsSecondScript = document.createElement('script');
    googleAnalyticsSecondScript.innerHTML = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-137973739-1');`;

    head.insertBefore(googleAnalyticsSecondScript, head.firstChild);
    head.insertBefore(googleAnalyticsFirstScript, head.firstChild);
}

export function googleAnalytics(url) {
    gtag('config', 'UA-137973739-1', { page_path: url });
}

export function googleAnalyticsEvent(eventCategory, eventAction, eventLabel, eventValue) {
    ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
}
