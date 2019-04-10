import {chain, keys, map} from 'lodash';

declare let gtag: (action, id, value) => {};

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

    gtag('config', 'UA-137973739-1', {
        custom_map: {
            dimension1: 'user_id',
            dimension2: 'page_to'
        }
    });
}

export function googleAnalytics(url) {
    gtag('config', 'UA-137973739-1', { page_path: url });
    gtag('event', 'route_change', {
        user_id: 'valami',
        page_to: url
    });
}

/* export function googleAnalyticsEvent(eventAction, eventDetails) {
    const dimension = chain(eventDetails)
        .keys()
        .map((key, index) => ['dimension' + index, key])
        .fromPairs()
        .value();

    console.log(dimension);

    gtag('config', 'UA-137973739-1', {
        custom_map: dimension
    });

    gtag('event', eventAction, eventDetails);
}*/
